import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import OrganigramaFlow from '../../components/personas/OrganigramaFlow';
import { site } from '@/profile';

export default function Organigrama() {
  return (
    <div className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Organigrama **Estructural**" center subtitle={`Estructura jerárquica y organizacional del ${site.denominacion}.`} />

        <div className="mt-12">
          <OrganigramaFlow />
        </div>
      </div>
    </div>
  );
}