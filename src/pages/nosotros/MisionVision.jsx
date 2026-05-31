import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import MisionCard from '../../components/identidad/MisionCard';
import ValorItem from '../../components/identidad/ValorItem';
import { mision, vision, valores } from '../../constants/identidad';
import { Target, Telescope } from 'lucide-react';

export default function MisionVision() {
  return (
    <>
      {/* ── Misión & Visión ── */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Misión y **Visión**"
            subtitle="Los propósitos que guían nuestro camino hacia la excelencia educativa."
            center
            badge="Identidad"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            <MisionCard
              title="Nuestra Misión"
              description={mision}
              icon={<Target className="w-8 h-8 text-[#F58220]" />}
            />
            <MisionCard
              title="Nuestra Visión"
              description={vision}
              icon={<Telescope className="w-8 h-8 text-[#F58220]" />}
            />
          </div>
        </div>
      </div>

      {/* ── Valores ── */}
      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Nuestros **Valores**"
            subtitle="Principios que guían a nuestra comunidad universitaria."
            center
            badge="Principios"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
            {valores.map((valor, idx) => (
              <ValorItem key={idx} valor={valor} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}