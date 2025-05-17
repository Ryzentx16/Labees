import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Labees – Qatar\'s Curated Fashion Movement',
  description: 'Labees links Gen Z shoppers with bold, culture-first designers from Doha and beyond.',
  openGraph: {
    title: 'Labees – Qatar\'s Curated Fashion Movement',
    description: 'Labees links Gen Z shoppers with bold, culture-first designers from Doha and beyond.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://images.pexels.com/photos/5662862/pexels-photo-5662862.png',
        width: 1200,
        height: 630,
        alt: 'Labees',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}