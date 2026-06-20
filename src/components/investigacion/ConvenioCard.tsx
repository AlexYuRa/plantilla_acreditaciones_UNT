import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface Convenio {
  institucion: string;
  tipo: string;
  descripcion: string;
  vigencia: string;
}

export default function ConvenioCard({ convenio }: { convenio: Convenio }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="h-full">
      <Card className="h-full p-6 flex flex-col">
        <div className="mb-2">
          <h3 className="text-lg font-display font-bold text-primary">{convenio.institucion}</h3>
        </div>
        <Badge variant="info" className="w-fit mb-4">{convenio.tipo}</Badge>
        <p className="text-gray-600 font-body text-sm mb-4 flex-grow">{convenio.descripcion}</p>
        <p className="text-xs font-bold text-gray-600 mt-auto bg-gray-50 p-2 rounded inline-block w-fit">
          Vigencia: {convenio.vigencia}
        </p>
      </Card>
    </motion.div>
  );
}