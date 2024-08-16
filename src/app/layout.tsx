import { Source_Sans_3 } from 'next/font/google';

import { ColorSchemeScript } from '@mantine/core';
import { MantineProvider } from '@/provider';
import type { Metadata } from 'next';

import './globals.css';
import { Footer, Header } from '@/lib';

const subset = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS 13 Web BoilerPlate',
  description: 'NextJS 13 Web BoilerPlate by Mezorn LLC v 0.0.1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${subset.className}`}>
        <Header />
        <MantineProvider>{children}</MantineProvider>
        <Footer />
      </body>
    </html>
  );
}
