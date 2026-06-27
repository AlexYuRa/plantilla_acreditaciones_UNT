export const director = {
  nombre: "Dr. Ing. Carlos Alberto Mendoza Ríos",
  cargo: "Director de la Escuela Profesional de Ingeniería Ambiental",
  correo: "direccion.ambiental@universidad.edu.pe",
  bio: "Doctor en Ingeniería Ambiental con amplia experiencia en gestión de recursos hídricos, evaluación de impacto ambiental y docencia universitaria.",
  foto: null // Placeholder
};

export const coordinadores = [
  {
    nombre: "Mg. Ing. Roberto Carlos Salazar",
    cargo: "Coordinador Académico",
    correo: "acad.ambiental@universidad.edu.pe"
  },
  {
    nombre: "Dra. Ing. Patricia Salinas Vega",
    cargo: "Coordinadora de Investigación",
    correo: "investiga.ambiental@universidad.edu.pe"
  },
  {
    nombre: "Mg. Ing. Luis Fernando Gómez",
    cargo: "Coordinador de Prácticas Preprofesionales",
    correo: "practicas.ambiental@universidad.edu.pe"
  }
];

export const organigrama = {
  nombre: "Dirección de Escuela",
  cargo: "Dr. Ing. Carlos Alberto Mendoza",
  hijos: [
    {
      nombre: "Coordinación Académica",
      cargo: "Mg. Ing. Roberto Carlos Salazar",
      hijos: [
        { nombre: "Comité de Currículo", cargo: "" },
        { nombre: "Tutoría y Asesoría", cargo: "" }
      ]
    },
    {
      nombre: "Coordinación de Investigación",
      cargo: "Dra. Ing. Patricia Salinas"
    },
    {
      nombre: "Prácticas Preprofesionales",
      cargo: "Mg. Ing. Luis Fernando Gómez"
    }
  ]
};
