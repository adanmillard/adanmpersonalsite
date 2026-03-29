import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Adan M | Web Developer',
  description: 'Portfolio with projects, about section, and contact info',
  keywords: ['Next.js', 'React', 'TypeScript', 'Portfolio', 'Developer'],
  authors: [{ name: 'Adan M', url: 'https://github.com/adanmillard' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
