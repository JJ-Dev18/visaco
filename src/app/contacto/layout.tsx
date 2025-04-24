// src/app/contacto/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - VisaCo Servicios Legales',
  description: 'Póngase en contacto con nuestro equipo legal para resolver sus inquietudes y solicitar servicios de asesoría legal.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}