export const director = {
  nombre: "Nombre del Director(a)",
  cargo: "Director(a) de la Escuela Profesional",
  correo: "direccion@universidad.edu.pe",
  bio: "Breve reseña del director(a): grado académico, especialidad y experiencia. Reemplaza este texto por la del director(a) de tu escuela.",
  foto: null // Reemplaza por la ruta de la foto o deja null para la silueta
};

export const coordinadores = [
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) Académico",
    correo: "coordinacion.academica@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Investigación",
    correo: "coordinacion.investigacion@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Prácticas Preprofesionales",
    correo: "coordinacion.practicas@universidad.edu.pe"
  }
];

export const organigrama = {
  nombre: "Dirección de Escuela",
  cargo: "Nombre del Director(a)",
  hijos: [
    {
      nombre: "Coordinación Académica",
      cargo: "Nombre del Coordinador(a)",
      hijos: [
        { nombre: "Comité 1", cargo: "" },
        { nombre: "Comité 2", cargo: "" }
      ]
    },
    {
      nombre: "Coordinación de Investigación",
      cargo: "Nombre del Coordinador(a)"
    },
    {
      nombre: "Prácticas Preprofesionales",
      cargo: "Nombre del Coordinador(a)"
    }
  ]
};
