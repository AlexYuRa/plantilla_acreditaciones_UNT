import React, { useEffect } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import EnConstruccion from '../../components/layout/EnConstruccion';
import { siteName } from '@/profile';
import { FileText } from 'lucide-react';

export default function Resoluciones() {
  useEffect(() => {
    document.title = `Resoluciones | Admisión | ${siteName}`;
  }, []);

  return (
    <PageWrapper>
      <PageHero
        title="Resoluciones"
        subtitle="Documentos y resoluciones oficiales del proceso de admisión."
        icon={FileText}
        breadcrumbs={[{ label: 'Admisión' }, { label: 'Resoluciones' }]}
      />
      <EnConstruccion titulo="Resoluciones" />
    </PageWrapper>
  );
}
