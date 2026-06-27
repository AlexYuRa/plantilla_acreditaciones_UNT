import { useState, useEffect, useCallback, useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeProps,
  type NodeTypes,
  type NodeMouseHandler,
} from 'reactflow';
import { Download, BookOpen, Clock, Award, X, HelpCircle } from 'lucide-react';

import 'reactflow/dist/style.css';

import {
  type AreaType,
  type CourseData,
  CURRICULUM_DATA,
  PREREQUISITES_EDGES,
  CYCLE_COLUMNS,
} from '@profile/content/malla';


// ── Nodo de curso (colores por área, definidos por el usuario) ───────────────
const AREA_STYLES: Record<AreaType, string> = {
  general: 'border-l-emerald-500 bg-white text-emerald-950 hover:bg-emerald-100/70',
  especifico: 'border-l-orange-400 bg-white text-orange-950 hover:bg-orange-100/70',
  especialidad: 'border-l-sky-400 bg-white text-sky-950 hover:bg-sky-100/70',
};

function CourseNode({ data }: NodeProps<CourseData>) {
  return (
    <div className={`w-64 p-3 shadow-md rounded border border-slate-200 border-l-4 transition-colors ${AREA_STYLES[data.type]}`}>
      <Handle type="target" position={Position.Left} className="opacity-40 !bg-slate-400" />

      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[9px] font-bold tracking-wider uppercase opacity-60">{data.cycle}</span>
        <div className="flex gap-1">
          {data.isElective && (
            <span className="bg-purple-100 text-purple-800 text-[8px] px-1 font-bold rounded">ELECTIVO</span>
          )}
          <span className="bg-white/90 border border-slate-200 text-slate-800 text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-sm">
            {data.credits} CR
          </span>
        </div>
      </div>

      <h3 className="text-xs font-bold leading-tight line-clamp-2 select-none h-8 flex items-center">
        {data.name}
      </h3>

      <div className="mt-2 pt-1.5 border-t border-slate-200/50 text-[9px] opacity-80 flex justify-between items-center">
        <span>HT: {data.hoursT}h | HP: {data.hoursP}h</span>
        <span className="font-semibold underline">Detalles</span>
      </div>

      <Handle type="source" position={Position.Right} className="opacity-40 !bg-slate-400" />
    </div>
  );
}

const nodeTypes: NodeTypes = { courseNode: CourseNode };

const PLAN_PDF = `${import.meta.env.BASE_URL}Plan_de_Estudios_2025.pdf`;

export default function MallaFlow() {
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showHelp, setShowHelp] = useState(true);

  // ≥1024px (lg): panel lateral. Por debajo: modal (no hay ancho para el panel).
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // La ayuda se autooculta a los 6s; queda el botón "?" para volver a mostrarla.
  useEffect(() => {
    const t = setTimeout(() => setShowHelp(false), 6000);
    return () => clearTimeout(t);
  }, []);

  // Resumen de la malla para el estado por defecto del panel.
  const stats = useMemo(() => ({
    cycles: new Set(CURRICULUM_DATA.map((c) => c.cycle)).size,
    courses: CURRICULUM_DATA.length,
    credits: CURRICULUM_DATA.reduce((sum, c) => sum + c.credits, 0),
  }), []);

  // Cierra el modal de detalle con Escape.
  useEffect(() => {
    if (!selectedCourse) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedCourse(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedCourse]);

  // Las aristas animadas se desactivan si el sistema pide menos movimiento.
  const initialNodes = useMemo<Node<CourseData>[]>(() => {
    return CURRICULUM_DATA.map((course) => {
      const sameCycle = CURRICULUM_DATA.filter((c) => c.cycle === course.cycle);
      const orderInCycle = sameCycle.indexOf(course);
      return {
        id: course.id,
        type: 'courseNode',
        position: { x: CYCLE_COLUMNS[course.cycle] ?? 0, y: orderInCycle * 110 },
        data: course,
      };
    });
  }, []);

  const initialEdges = useMemo<Edge[]>(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return PREREQUISITES_EDGES.map((e) => ({ ...e, animated: !reduce }));
  }, []);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback<NodeMouseHandler>((_event, node) => {
    setSelectedCourse(node.data as CourseData);
  }, []);

  // Detalle de un curso (se reutiliza en el panel lateral y en el modal móvil).
  const detail = (course: CourseData) => (
    <>
      <div className="flex gap-2 items-center flex-wrap mb-2">
        <span className="text-[9px] bg-slate-200 text-slate-800 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
          {course.cycle}
        </span>
        {course.isElective && (
          <span className="text-[9px] bg-purple-100 text-purple-800 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Curso Electivo
          </span>
        )}
      </div>
      <h3 className="text-base font-bold text-slate-900 leading-tight mb-3">{course.name}</h3>

      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
        <BookOpen size={12} /> Descripción de la asignatura
      </h4>
      <p className="text-xs text-slate-600 leading-relaxed mb-4">{course.description}</p>

      <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-xs mb-4">
        <div className="flex items-center gap-2">
          <Award size={16} className="text-slate-600 shrink-0" />
          <div>
            <p className="text-[9px] text-slate-400 font-medium">Valor Académico</p>
            <p className="font-bold text-slate-700">{course.credits} Créditos</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-slate-600 shrink-0" />
          <div>
            <p className="text-[9px] text-slate-400 font-medium">Carga Horaria</p>
            <p className="font-bold text-slate-700">HT {course.hoursT}h · HP {course.hoursP}h</p>
          </div>
        </div>
      </div>

      <a
        href={PLAN_PDF}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-md transition-colors"
      >
        <Download size={14} /> Descargar Plan de Estudios
      </a>
    </>
  );

  // Estado por defecto del panel: resumen de la malla.
  const overview = (
    <>
      <h3 className="font-display font-black text-primary text-lg leading-tight mb-2">Malla curricular</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-5">
        Mapa interactivo del plan de estudios por ciclos. Selecciona un curso para ver sus créditos,
        horas y descripción. Las líneas conectan los prerrequisitos.
      </p>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {[
          { n: stats.cycles, l: 'Ciclos' },
          { n: stats.courses, l: 'Cursos' },
          { n: stats.credits, l: 'Créditos' },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-3 text-center">
            <div className="text-xl font-display font-black text-primary">{s.n}</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{s.l}</div>
          </div>
        ))}
      </div>
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Áreas curriculares</p>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2"><span className="w-3.5 h-3.5 bg-emerald-50 border border-emerald-400 rounded shrink-0" /><span className="text-slate-700">Estudios Generales</span></div>
        <div className="flex items-center gap-2"><span className="w-3.5 h-3.5 bg-orange-50 border border-orange-400 rounded shrink-0" /><span className="text-slate-700">Estudios Específicos</span></div>
        <div className="flex items-center gap-2"><span className="w-3.5 h-3.5 bg-sky-50 border border-sky-400 rounded shrink-0" /><span className="text-slate-700">Estudios de Especialidad</span></div>
      </div>

      <a
        href={PLAN_PDF}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-md transition-colors"
      >
        <Download size={14} /> Descargar Plan de Estudios
      </a>
    </>
  );

  return (
    <div>
      <div className="lg:flex lg:items-stretch rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
        {/* Grafo */}
        <div className="relative w-full lg:flex-1 h-[70svh] min-h-[460px] md:h-[720px] bg-slate-50 overflow-hidden lg:border-r lg:border-slate-200">
          {/* Ayuda: se autooculta; el botón "?" la vuelve a mostrar/ocultar */}
          <div className="absolute bottom-3 right-3 z-10 flex items-end gap-2">
            {showHelp && (
              <div className="bg-slate-900/90 text-white text-[10px] sm:text-[11px] px-2.5 py-1.5 rounded-lg shadow-md max-w-[230px]">
                Arrastra para mover{isDesktop ? ' · Ctrl + rueda para acercar/alejar' : ' · pellizca para zoom'}. {isDesktop ? 'Haz clic en' : 'Toca'} un curso para ver su detalle.
              </div>
            )}
            <button
              type="button"
              onClick={() => setShowHelp((v) => !v)}
              aria-label={showHelp ? 'Ocultar ayuda' : 'Mostrar ayuda'}
              aria-expanded={showHelp}
              className="shrink-0 h-11 w-11 flex items-center justify-center bg-slate-900/90 hover:bg-slate-900 text-sky-300 rounded-full shadow-md transition-colors"
            >
              <HelpCircle size={16} />
            </button>
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
            fitView={isDesktop}
            defaultViewport={isDesktop ? undefined : { x: 16, y: 16, zoom: 0.85 }}
            minZoom={0.3}
            maxZoom={1.5}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable
            zoomOnScroll={true}
            zoomActivationKeyCode="Control"
            panOnScroll={false}
            preventScrolling={false}
            translateExtent={[[-500, -300], [3400, 1300]]}
            attributionPosition="bottom-right"
          >
            <Background color="#cbd5e1" gap={20} size={1} />
            <Controls className="!bg-white !shadow-lg !border-slate-100 !rounded-lg" showInteractive={false} />
          </ReactFlow>
        </div>

        {/* Panel lateral (solo escritorio ≥1024px): resumen o detalle */}
        <aside className="hidden lg:block w-[360px] shrink-0 h-[720px] bg-white overflow-y-auto">
          <div className="p-5">
            {selectedCourse ? (
              <>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className="text-xs font-semibold text-slate-500 hover:text-primary mb-3 inline-flex items-center gap-1"
                >
                  ← Volver al resumen
                </button>
                {detail(selectedCourse)}
              </>
            ) : (
              overview
            )}
          </div>
        </aside>
      </div>

      {/* Leyenda fuera del bloque, debajo. Solo en móvil/tablet: en escritorio
          el panel de resumen ya muestra las áreas, así no se duplica. */}
      <div className="lg:hidden mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-600">
        <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Áreas</span>
        <span className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 bg-emerald-50 border border-emerald-400 rounded" /> Estudios Generales</span>
        <span className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 bg-orange-50 border border-orange-400 rounded" /> Estudios Específicos</span>
        <span className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 bg-sky-50 border border-sky-400 rounded" /> Estudios de Especialidad</span>
      </div>

      {/* Modal solo en móvil/tablet (sin panel lateral) */}
      {!isDesktop && selectedCourse && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Cerrar detalle"
            onClick={() => setSelectedCourse(null)}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default"
          />
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 p-5 max-h-[85svh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              aria-label="Cerrar"
              className="absolute top-3 right-3 z-10 h-11 w-11 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <X size={18} />
            </button>
            {detail(selectedCourse)}
          </div>
        </div>
      )}
    </div>
  );
}
