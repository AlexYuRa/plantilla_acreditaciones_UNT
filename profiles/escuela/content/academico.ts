export const gradoAcademico = "Grado de Bachiller de la Escuela Profesional";
export const tituloProfesional = "Título Profesional de la Escuela Profesional";

export const perfilIngresante = [
  { area: "Competencia de ingreso 1", descripcion: "Descripción breve de la primera competencia esperada en el postulante." },
  { area: "Competencia de ingreso 2", descripcion: "Descripción breve de la segunda competencia esperada en el postulante." },
  { area: "Competencia de ingreso 3", descripcion: "Descripción breve de la tercera competencia esperada en el postulante." },
  { area: "Competencia de ingreso 4", descripcion: "Descripción breve de la cuarta competencia esperada en el postulante." },
  { area: "Competencia de ingreso 5", descripcion: "Descripción breve de la quinta competencia esperada en el postulante." },
  { area: "Competencia de ingreso 6", descripcion: "Descripción breve de la sexta competencia esperada en el postulante." }
];

export const perfilEgresado = [
  {
    area: "COMPETENCIA 1",
    descripcion: "descripción de la primera competencia del egresado: qué es capaz de hacer al terminar la carrera."
  },
  {
    area: "COMPETENCIA 2",
    descripcion: "descripción de la segunda competencia del egresado: qué es capaz de hacer al terminar la carrera."
  },
  {
    area: "COMPETENCIA 3",
    descripcion: "descripción de la tercera competencia del egresado: qué es capaz de hacer al terminar la carrera."
  },
  {
    area: "COMPETENCIA 4",
    descripcion: "descripción de la cuarta competencia del egresado: qué es capaz de hacer al terminar la carrera."
  }
];

export const titulacion = [
  {
    modalidad: "Modalidad de titulación 1",
    descripcion: "Descripción breve de la primera modalidad para obtener el título profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3"
    ]
  },
  {
    modalidad: "Modalidad de titulación 2",
    descripcion: "Descripción breve de la segunda modalidad para obtener el título profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2"
    ]
  }
];

export const tramites = [
  {
    id: "bachiller",
    titulo: "Grado de Bachiller",
    descripcion: "Descripción del trámite y procedimiento para obtener el Grado Académico de Bachiller.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3",
      "Requisito 4"
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Bachiller.pdf`
  },
  {
    id: "titulo",
    titulo: "Título Profesional",
    descripcion: "Descripción del trámite y procedimiento para obtener el Título Profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3",
      "Requisito 4"
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Titulo.pdf`
  }
];
