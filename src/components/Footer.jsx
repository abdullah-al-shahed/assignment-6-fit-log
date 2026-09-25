import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1f242d] bg-[#0b0c0e] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 font-heading text-xl text-white">
          <Dumbbell className="w-6 h-6 text-[#ccff00] -rotate-45" />
          FITLOG
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}