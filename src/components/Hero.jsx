'use client';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#121418] border border-[#1f242d] rounded-3xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
      <div className="max-w-xl">
        <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase mb-3 block">
          WORKOUT LIBRARY
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4 leading-tight">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mb-8">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button
          onClick={() => document.getElementById('workout-grid')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#ccff00] text-black font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 hover:bg-[#b8e600] transition cursor-pointer"
        >
          BROWSE WORKOUTS <ArrowDown className="w-4 h-4" />
        </button>
      </div>
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-[#1a1d24] border border-[#2b303c] flex items-center justify-center p-6">
          <span className="text-[#ccff00] font-heading text-6xl tracking-wider">FITLOG</span>
        </div>
      </div>
    </section>
  );
}