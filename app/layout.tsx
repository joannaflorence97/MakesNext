import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Footer } from '@/components/Footer';
import AdSense from '@/components/AdSense';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

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
    <html lang="en" className={`${poppins.className}`}>
      <head>
        <AdSense pId="ca-pub-2155859976545968" />
      </head>
      <body className="antialiased tracking-tight">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-col flex-1 justify-between p-8 bg-background text-gray-900">
            <main className="max-w-[80ch] mx-auto w-full space-y-6">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
