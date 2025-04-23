
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/ui/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VisaCo - Servicios Legales',
  description: 'Plataforma para gestionar pagos de servicios legales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div >
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}