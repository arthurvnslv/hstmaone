import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Plataforma de Estudos Maranhão Colonial - Padrão CEBRASPE',
  description: 'Sessão de estudos imersiva e funcional sobre a História do Maranhão Colonial com trilha pedagógica modular e caderno de questões inéditas no formato Certo ou Errado da banca CEBRASPE.',
  openGraph: {
    title: 'Plataforma de Estudos Maranhão Colonial - Padrão CEBRASPE',
    description: 'Sessão de estudos imersiva e funcional sobre a História do Maranhão Colonial com trilha pedagógica modular e caderno de questões inéditas no formato Certo ou Errado da banca CEBRASPE.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plataforma de Estudos Maranhão Colonial - Padrão CEBRASPE',
    description: 'Sessão de estudos imersiva e funcional sobre a História do Maranhão Colonial com trilha pedagógica modular e caderno de questões inéditas no formato Certo ou Errado da banca CEBRASPE.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
