import './globals.css';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PlanProvider } from '@/context/PlanContext';

export const metadata = {
  title: 'FitLog — Train Hard, Log Honest',
  description: 'A dark, no-nonsense gym companion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0b0d] text-white min-h-screen flex flex-col font-sans antialiased">
        <PlanProvider>
          <Toaster position="bottom-right" toastOptions={{ style: { background: '#121418', color: '#fff', border: '1px solid #1f242d' } }} />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}