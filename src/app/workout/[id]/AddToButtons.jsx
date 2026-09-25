'use client';
import { usePlan } from '@/context/PlanContext';
import { Plus, Bookmark } from 'lucide-react';

export default function AddToButtons({ workout }) {
  const { addToPlan, addToSaved } = usePlan();

  return (
    <div className="flex items-center gap-3 pt-4 border-t border-[#1f242d]">
      <button
        onClick={() => addToPlan(workout)}
        className="flex-1 bg-[#ccff00] text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#b8e600] transition cursor-pointer"
      >
        <Plus className="w-5 h-5" /> Add to Today&apos;s Plan
      </button>
      <button
        onClick={() => addToSaved(workout)}
        className="p-3 bg-[#1a1d24] border border-[#2b303c] rounded-xl text-gray-300 hover:text-white transition"
        title="Save for Later"
      >
        <Bookmark className="w-5 h-5" />
      </button>
    </div>
  );
}