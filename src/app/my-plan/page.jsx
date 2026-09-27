'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePlan } from '@/context/PlanContext';
import { Check, X, Clock, Flame, Star } from 'lucide-react';

export default function MyPlanPage() {
  const { plan, saved, toggleComplete, removeFromPlan } = usePlan();
  const [activeTab, setActiveTab] = useState('plan');
  const [sortBy, setSortBy] = useState('duration');

  const currentList = activeTab === 'plan' ? plan : saved;

  // Calculate stats live
  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((sum, item) => sum + (parseInt(item.duration) || 0), 0);
  const totalCalories = plan.reduce((sum, item) => sum + (parseInt(item.calories) || 0), 0);

  // Sorting logic
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'duration') return (parseInt(a.duration) || 0) - (parseInt(b.duration) || 0);
    if (sortBy === 'calories') return (parseInt(a.calories) || 0) - (parseInt(b.calories) || 0);
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 text-white min-h-[80vh]">
      <h1 className="text-3xl font-extrabold tracking-tight mb-1">MY PLAN</h1>
      <p className="text-gray-400 text-sm mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics Summary Row */}
      <div className="bg-[#121418] border border-gray-800/80 rounded-2xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-800/80">
        <div className="pt-2 md:pt-0">
          <p className="text-xs text-gray-400 font-medium mb-1">Exercises</p>
          <p className="text-4xl font-black text-[#ccff00]">{totalExercises}</p>
        </div>
        <div className="pt-4 md:pt-0 md:pl-6">
          <p className="text-xs text-gray-400 font-medium mb-1">Minutes</p>
          <p className="text-4xl font-black text-white">{totalMinutes}</p>
        </div>
        <div className="pt-4 md:pt-0 md:pl-6">
          <p className="text-xs text-gray-400 font-medium mb-1">Calories</p>
          <p className="text-4xl font-black text-white">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs & Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex bg-[#1a1d24] p-1 rounded-xl border border-gray-800">
          <button
            onClick={() => setActiveTab('plan')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'plan'
                ? 'bg-[#262a34] text-white shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Today's Plan
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'saved'
                ? 'bg-[#262a34] text-white shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs text-gray-400">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#1a1d24] border border-gray-800 text-xs text-white rounded-lg px-3 py-2 outline-none cursor-pointer hover:border-gray-700"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Workout Cards List */}
      {sortedList.length > 0 ? (
        <div className="space-y-4">
          {sortedList.map((item) => (
            <div
              key={item.id}
              className={`bg-[#121418] border border-gray-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition ${
                item.completed ? 'opacity-50' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                  <Image
                    src={item.image || '/banner.png'}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-extrabold text-base tracking-wide uppercase text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">{item.equipment}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#ccff00]" /> {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#ccff00]" /> {item.calories}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" /> {item.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <Link
                  href={`/workout/${item.id}`}
                  className="px-4 py-2 border border-gray-700 rounded-full text-xs font-semibold hover:border-gray-500 transition text-gray-200"
                >
                  View Details
                </Link>

                {activeTab === 'plan' && (
                  <button
                    onClick={() => toggleComplete(item.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition ${
                      item.completed
                        ? 'bg-gray-800 text-gray-400'
                        : 'bg-[#ccff00] text-black hover:bg-[#b8e600]'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    {item.completed ? 'Completed' : 'Mark as Done'}
                  </button>
                )}

                <button
                  onClick={() => removeFromPlan(item.id, activeTab)}
                  className="p-2 text-gray-500 hover:text-white transition"
                  title="Remove"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="border border-dashed border-gray-800 rounded-2xl p-16 text-center my-8">
          <h2 className="text-xl font-extrabold tracking-wide mb-2">NOTHING HERE YET</h2>
          <p className="text-xs text-gray-400 mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#ccff00] text-black text-xs font-bold px-6 py-3 rounded-full hover:bg-[#b8e600] transition"
          >
            Go to workouts
          </Link>
        </div>
      )}
    </div>
  );
}