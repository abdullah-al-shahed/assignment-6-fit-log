'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { usePlan } from '@/context/PlanContext';

export default function Navbar() {
  const { plan, saved } = usePlan();
  const pathname = usePathname();

  const isWorkoutsActive = pathname === '/';
  const isMyPlanActive = pathname === '/my-plan';

  return (
    <nav className="bg-[#0f1115] border-b border-gray-800/80 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="FitLog Logo" width={24} height={24} />
        <span className="text-xl font-bold tracking-wider text-white">FITLOG</span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-1 bg-[#1a1d24] p-1 rounded-full border border-gray-800">
        <Link
          href="/"
          className={`px-5 py-1.5 rounded-full text-xs font-semibold transition ${
            isWorkoutsActive
              ? 'bg-[#ccff00] text-black font-bold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Workouts
        </Link>
        <Link
          href="/my-plan"
          className={`px-5 py-1.5 rounded-full text-xs font-semibold transition ${
            isMyPlanActive
              ? 'bg-[#ccff00] text-black font-bold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          My Plan
        </Link>
      </div>

      {/* Status Badges */}
      <div className="flex items-center gap-3">
        <Link
          href="/my-plan"
          className="bg-[#ccff00] text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"
        >
          <span>Plan</span>
          <span className="bg-black text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
            {plan?.length || 0}
          </span>
        </Link>
        <Link
          href="/my-plan"
          className="border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"
        >
          <span>Saved</span>
          <span className="bg-gray-800 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
            {saved?.length || 0}
          </span>
        </Link>
      </div>
    </nav>
  );
}