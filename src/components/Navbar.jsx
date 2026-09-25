'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell } from 'lucide-react';
import { usePlan } from '@/context/PlanContext';

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="sticky top-0 z-50 bg-[#0b0c0e]/90 backdrop-blur-md border-b border-[#1f242d]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading text-2xl tracking-wider text-white">
          <Dumbbell className="w-7 h-7 text-[#ccff00] -rotate-45" />
          FITLOG
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 bg-[#121418] p-1.5 rounded-full border border-[#1f242d]">
          <Link
            href="/"
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              pathname === '/' ? 'bg-[#1a1d24] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              pathname === '/my-plan' ? 'bg-[#ccff00] text-black font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counter Badges */}
        <div className="flex items-center gap-3">
          <Link href="/my-plan" className="flex items-center gap-2 bg-[#ccff00] text-black text-xs font-bold px-3 py-1.5 rounded-full">
            Plan <span className="bg-black text-[#ccff00] w-5 h-5 rounded-full flex items-center justify-center text-[11px]">{plan.length}</span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 border border-[#2b303c] text-white text-xs font-medium px-3 py-1.5 rounded-full">
            Saved <span className="bg-[#1e222b] text-gray-300 w-5 h-5 rounded-full flex items-center justify-center text-[11px]">{saved.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}