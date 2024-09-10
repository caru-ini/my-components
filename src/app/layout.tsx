import { BackToPagetop } from '@/components/backToPagetop';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My components',
  description: 'My components',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className + ' flex flex-col min-h-[200svh]'}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
          <Footer />
          <BackToPagetop />
        </ThemeProvider>
      </body>
    </html>
  );
}
