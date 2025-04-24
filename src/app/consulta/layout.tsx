// src/app/consulta/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solicita tu Consulta - VisaCo Servicios Legales',
  description: 'Elija el tipo de consulta legal que necesita. Ofrecemos consultas regulares, de empleo e internacionales con garantía de satisfacción.',
};

export default function ConsultaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}