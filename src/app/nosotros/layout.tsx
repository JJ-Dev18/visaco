// src/app/nosotros/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros - VisaCo Servicios Legales',
  description: 'Conozca a nuestro equipo de abogados especializados en trámites migratorios y visas. Más de 25 años de experiencia en servicios legales de inmigración.',
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}