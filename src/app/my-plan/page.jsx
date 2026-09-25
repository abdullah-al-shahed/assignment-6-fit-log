'use client';

import Link from 'next/link';
import { usePlan } from '@/context/PlanContext';
import { Trash2, ArrowLeft, Dumbbell, Flame, Clock, CheckCircle } from 'lucide-react';

export default function MyPlanPage() {
  const { plan, removeFromPlan, clearPlan } = usePlan();

  const totalDuration = plan.reduce((acc, item) => acc + (item.duration || 0), 0);
  const totalCalories = plan.reduce((acc, item) => acc + (item.caloriesBurned || 0), 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-2 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Workouts
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl text-white uppercase">Today&apos;s Workout Routine</h1>
          <p className="text-gray-400 text-sm mt-1">Manage and execute your scheduled exercises</p>
        </div>

        {plan.length > 0 && (
          <button
            onClick={clearPlan}
            className="text-xs text-red-400 hover:text-red-300 border border-red-500/30 bg-red-500/10 px-3 py-2 rounded-lg transition flex items-center gap-1 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear All
          </button>
        )}
      </div>

      {plan.length === 0 ? (
        <div className="bg-[#121418] border border-[#1f242d] rounded-3xl p-12 text-center max-w-lg mx-auto my-12">
          <div className="w-16 h-16 bg-[#1a1d24] border border-[#2b303c] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#ccff00]">
            <Dumbbell className="w-8 h-8" />
          </div>
          <h3 className="font-heading text-2xl text-white mb-2">YOUR PLAN IS EMPTY</h3>
          <p className="text-gray-400 text-sm mb-6">
            You haven&apos;t added any exercises to your routine yet.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#b8e600] transition"
          >
            Browse Workouts
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Routine Item List */}
          <div className="lg:col-span-2 space-y-4">
            {plan.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="bg-[#121418] border border-[#1f242d] rounded-2xl p-4 flex items-center justify-between gap-4 hover:border-[#ccff00]/30 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#1a1d24] shrink-0 border border-[#2b303c]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#ccff00] uppercase tracking-wider">
                      Exercise #{idx + 1}
                    </span>
                    <h4 className="font-heading text-lg text-white">{item.name}</h4>
                    <p className="text-xs text-gray-400">
                      {item.sets} Sets × {item.reps} Reps
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex flex-col items-end text-xs text-gray-400">
                    <span className="flex items-center gap-1 text-gray-300 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#ccff00]" /> {item.duration}m
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-orange-400" /> {item.caloriesBurned} kcal
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromPlan(item.id)}
                    className="p-2 text-gray-500 hover:text-red-400 rounded-lg bg-[#1a1d24] border border-[#2b303c] transition cursor-pointer"
                    title="Remove from plan"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Sidebar */}
          <div>
            <div className="bg-[#121418] border border-[#1f242d] rounded-3xl p-6 sticky top-24">
              <h3 className="font-heading text-xl text-white mb-4 uppercase border-b border-[#1f242d] pb-3">
                Routine Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Total Exercises</span>
                  <span className="font-semibold text-white">{plan.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Est. Time</span>
                  <span className="font-semibold text-[#ccff00] flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {totalDuration} min
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Est. Calories</span>
                  <span className="font-semibold text-orange-400 flex items-center gap-1">
                    <Flame className="w-4 h-4" /> {totalCalories} kcal
                  </span>
                </div>
              </div>

              <button
                onClick={() => alert('Routine Started! Stay focused.')}
                className="w-full bg-[#ccff00] text-black font-bold py-3.5 px-4 rounded-xl hover:bg-[#b8e600] transition flex items-center justify-center gap-2 cursor-pointer uppercase text-sm tracking-wide"
              >
                <CheckCircle className="w-5 h-5" /> Start Workout Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}