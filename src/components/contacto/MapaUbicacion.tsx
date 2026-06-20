import React from 'react';

export default function MapaUbicacion() {
  return (
    <div className="w-full h-64 md:h-full min-h-[400px] bg-gray-200 relative overflow-hidden">
      <iframe
        title="Ubicación de la Universidad Nacional de Trujillo"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.938694545802!2d-79.03988952776623!3d-8.113964999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9e50ca1411%3A0xa3f82176b6111e97!2sEscuela%20de%20Ingenier%C3%ADa%20Ambiental!5e0!3m2!1ses!2spe!4v1781980940853!5m2!1ses!2spe"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}