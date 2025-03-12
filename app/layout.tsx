import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import { Footer } from '@/components/Footer';

const fraunces = Fraunces({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Joanna Florence Makes',
    template: '%s | Joanna Florence Makes',
  },
  description: 'Sewing and crafts!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.className}`}>
      <body className="antialiased tracking-tight">
        <Header />
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[80ch] mx-auto w-full space-y-6">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
