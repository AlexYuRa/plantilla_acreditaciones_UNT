export const gradoAcademico = "Bachiller en Ingeniería Ambiental";
export const tituloProfesional = "Ingeniero(a) Ambiental";

export const perfilIngresante = [
  { area: "Razonamiento Matemático", descripcion: "Sólida base en matemática y capacidad de razonamiento lógico-cuantitativo." },
  { area: "Ciencias Naturales", descripcion: "Conocimientos básicos de química, física y biología." },
  { area: "Conciencia Ambiental", descripcion: "Interés y sensibilidad por la conservación del ambiente y el desarrollo sostenible." },
  { area: "Pensamiento Crítico", descripcion: "Capacidad de análisis, reflexión y resolución de problemas." },
  { area: "Comunicación", descripcion: "Habilidad para comprender y expresar ideas de forma clara, oral y escrita." },
  { area: "Trabajo en Equipo", descripcion: "Disposición para colaborar en proyectos multidisciplinarios." },
  { area: "Vocación Científica", descripcion: "Curiosidad, observación y disposición para la investigación y la experimentación." },
  { area: "Responsabilidad", descripcion: "Compromiso, ética y actitud proactiva frente a su formación." }
];

export const perfilEgresado = [
  {
    area: "DISEÑA",
    descripcion: "sistemas y tecnologías para la prevención, control y tratamiento de la contaminación del agua, aire y suelo, aplicando principios de la ingeniería."
  },
  {
    area: "EVALÚA",
    descripcion: "el impacto ambiental de proyectos y actividades, formulando estudios y planes de manejo ambiental conforme a la normativa vigente."
  },
  {
    area: "GESTIONA",
    descripcion: "de manera sostenible los recursos naturales, los residuos sólidos y los sistemas de gestión ambiental en organizaciones públicas y privadas."
  },
  {
    area: "INVESTIGA",
    descripcion: "problemáticas ambientales, generando conocimiento e innovación tecnológica para contribuir al desarrollo sostenible y la resiliencia frente al cambio climático."
  }
];

export const planEstudios = [
  {
    ciclo: "I Ciclo",
    cursos: [
      { codigo: "I-01", nombre: "MATEMÁTICA BÁSICA", creditos: 4, tipo: "Obligatorio" },
      { codigo: "I-02", nombre: "QUÍMICA GENERAL", creditos: 4, tipo: "Obligatorio" },
      { codigo: "I-03", nombre: "FÍSICA I", creditos: 4, tipo: "Obligatorio" },
      { codigo: "I-04", nombre: "BIOLOGÍA GENERAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "I-05", nombre: "COMUNICACIÓN Y REDACCIÓN", creditos: 3, tipo: "Obligatorio" },
      { codigo: "I-06", nombre: "INTRODUCCIÓN A LA INGENIERÍA AMBIENTAL", creditos: 2, tipo: "Obligatorio" },
      { codigo: "I-07", nombre: "METODOLOGÍA DEL TRABAJO UNIVERSITARIO", creditos: 2, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "II Ciclo",
    cursos: [
      { codigo: "II-01", nombre: "CÁLCULO DIFERENCIAL", creditos: 4, tipo: "Obligatorio" },
      { codigo: "II-02", nombre: "QUÍMICA ORGÁNICA", creditos: 4, tipo: "Obligatorio" },
      { codigo: "II-03", nombre: "FÍSICA II", creditos: 4, tipo: "Obligatorio" },
      { codigo: "II-04", nombre: "ECOLOGÍA GENERAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "II-05", nombre: "DIBUJO DE INGENIERÍA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "II-06", nombre: "ESTADÍSTICA GENERAL", creditos: 3, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "III Ciclo",
    cursos: [
      { codigo: "III-01", nombre: "CÁLCULO INTEGRAL", creditos: 4, tipo: "Obligatorio" },
      { codigo: "III-02", nombre: "QUÍMICA AMBIENTAL", creditos: 4, tipo: "Obligatorio" },
      { codigo: "III-03", nombre: "TERMODINÁMICA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "III-04", nombre: "MICROBIOLOGÍA AMBIENTAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "III-05", nombre: "TOPOGRAFÍA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "III-06", nombre: "PROGRAMACIÓN APLICADA", creditos: 3, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "IV Ciclo",
    cursos: [
      { codigo: "IV-01", nombre: "ECUACIONES DIFERENCIALES", creditos: 4, tipo: "Obligatorio" },
      { codigo: "IV-02", nombre: "MECÁNICA DE FLUIDOS", creditos: 4, tipo: "Obligatorio" },
      { codigo: "IV-03", nombre: "FISICOQUÍMICA AMBIENTAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "IV-04", nombre: "HIDROLOGÍA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "IV-05", nombre: "EDAFOLOGÍA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "IV-06", nombre: "SISTEMAS DE INFORMACIÓN GEOGRÁFICA I", creditos: 3, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "V Ciclo",
    cursos: [
      { codigo: "V-01", nombre: "MÉTODOS NUMÉRICOS", creditos: 3, tipo: "Obligatorio" },
      { codigo: "V-02", nombre: "OPERACIONES UNITARIAS", creditos: 4, tipo: "Obligatorio" },
      { codigo: "V-03", nombre: "METEOROLOGÍA Y CLIMATOLOGÍA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "V-04", nombre: "ANÁLISIS INSTRUMENTAL AMBIENTAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "V-05", nombre: "HIDRÁULICA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "V-06", nombre: "SISTEMAS DE INFORMACIÓN GEOGRÁFICA II", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "VI Ciclo",
    cursos: [
      { codigo: "VI-01", nombre: "TRATAMIENTO DE AGUAS RESIDUALES I", creditos: 4, tipo: "Obligatorio" },
      { codigo: "VI-02", nombre: "CALIDAD DEL AIRE", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VI-03", nombre: "GESTIÓN DE RESIDUOS SÓLIDOS I", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VI-04", nombre: "MICROBIOLOGÍA SANITARIA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VI-05", nombre: "ECONOMÍA AMBIENTAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VI-06", nombre: "ENERGÍAS RENOVABLES", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "VII Ciclo",
    cursos: [
      { codigo: "VII-01", nombre: "TRATAMIENTO DE AGUAS RESIDUALES II", creditos: 4, tipo: "Obligatorio" },
      { codigo: "VII-02", nombre: "CONTAMINACIÓN ATMOSFÉRICA Y CONTROL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VII-03", nombre: "GESTIÓN DE RESIDUOS SÓLIDOS II", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VII-04", nombre: "EVALUACIÓN DE IMPACTO AMBIENTAL", creditos: 4, tipo: "Obligatorio" },
      { codigo: "VII-05", nombre: "SISTEMAS DE GESTIÓN AMBIENTAL (ISO 14001)", creditos: 3, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "VIII Ciclo",
    cursos: [
      { codigo: "VIII-01", nombre: "DISEÑO DE PLANTAS DE TRATAMIENTO", creditos: 4, tipo: "Obligatorio" },
      { codigo: "VIII-02", nombre: "REMEDIACIÓN DE SUELOS", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VIII-03", nombre: "ORDENAMIENTO TERRITORIAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VIII-04", nombre: "LEGISLACIÓN AMBIENTAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VIII-05", nombre: "CAMBIO CLIMÁTICO Y GESTIÓN DE RIESGOS", creditos: 3, tipo: "Obligatorio" },
      { codigo: "VIII-06", nombre: "AUDITORÍA AMBIENTAL", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "IX Ciclo",
    cursos: [
      { codigo: "IX-01", nombre: "GESTIÓN INTEGRADA DE CUENCAS HIDROGRÁFICAS", creditos: 3, tipo: "Obligatorio" },
      { codigo: "IX-02", nombre: "TECNOLOGÍAS LIMPIAS Y PRODUCCIÓN MÁS LIMPIA", creditos: 3, tipo: "Obligatorio" },
      { codigo: "IX-03", nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS AMBIENTALES", creditos: 3, tipo: "Obligatorio" },
      { codigo: "IX-04", nombre: "SEMINARIO DE TESIS I", creditos: 3, tipo: "Obligatorio" },
      { codigo: "IX-05", nombre: "PRÁCTICAS PREPROFESIONALES I", creditos: 6, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "X Ciclo",
    cursos: [
      { codigo: "X-01", nombre: "ÉTICA Y DEONTOLOGÍA PROFESIONAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "X-02", nombre: "GESTIÓN AMBIENTAL EMPRESARIAL", creditos: 3, tipo: "Obligatorio" },
      { codigo: "X-03", nombre: "SEMINARIO DE TESIS II", creditos: 3, tipo: "Obligatorio" },
      { codigo: "X-04", nombre: "PRÁCTICAS PREPROFESIONALES II", creditos: 6, tipo: "Obligatorio" }
    ]
  }
];

export const titulacion = [
  {
    modalidad: "Tesis",
    descripcion: "Elaboración, presentación y sustentación de un trabajo de investigación original que aborde una problemática ambiental aplicando la ingeniería.",
    requisitos: [
      "Grado de Bachiller en Ingeniería Ambiental",
      "Aprobación del proyecto de tesis",
      "Constancia de egresado"
    ]
  },
  {
    modalidad: "Trabajo de Suficiencia Profesional",
    descripcion: "Demostración de competencias profesionales mediante la sistematización de una experiencia laboral en el campo de la ingeniería ambiental.",
    requisitos: [
      "Grado de Bachiller en Ingeniería Ambiental",
      "Acreditar mínimo 1 año de experiencia profesional documentada"
    ]
  }
];

export const tramites = [
  {
    id: "bachiller",
    titulo: "Grado de Bachiller",
    descripcion: "Requisitos y procedimiento para la obtención del Grado Académico de Bachiller en Ingeniería Ambiental.",
    requisitos: [
      "Constancia de egresado (haber aprobado el total de créditos del plan de estudios).",
      "Constancia de dominio de idioma extranjero a nivel básico.",
      "Aprobación del Trabajo de Investigación.",
      "Constancia de no adeudar a la universidad."
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Bachiller.pdf`
  },
  {
    id: "titulo",
    titulo: "Título Profesional",
    descripcion: "Requisitos y procedimiento para obtener el título de Ingeniero(a) Ambiental.",
    requisitos: [
      "Copia autenticada del Grado Académico de Bachiller.",
      "Aprobación de Tesis o Trabajo de Suficiencia Profesional.",
      "Constancia de no adeudar a la universidad.",
      "Ejemplares impresos y digitales del trabajo de investigación."
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Titulo.pdf`
  }
];
