import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import ConvenioCard from '../../components/investigacion/ConvenioCard';
import { convenios } from '@profile/content/investigacion';

export default function Convenios() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Convenios **Institucionales**" center subtitle="Alianzas estratégicas que potencian el desarrollo académico y las prácticas profesionales." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {convenios.map((convenio, idx) => (
            <ConvenioCard key={idx} convenio={convenio} />
          ))}
        </div>
      </div>
    </div>
  );
}