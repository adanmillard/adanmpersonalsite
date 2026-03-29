import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adam N Personal Website',
  description: 'Portfolio and contact page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
