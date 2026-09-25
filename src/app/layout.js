import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PlanProvider } from '@/context/PlanContext';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'FitLog — Workout Library & Gym Companion',
  description: 'Train with intent. Log every set.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#0b0c0e] text-white">
        <PlanProvider>
          <Toaster 
            position="bottom-right" 
            toastOptions={{ 
              style: { background: '#16181e', color: '#fff', border: '1px solid #2b303c' } 
            }} 
          />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}