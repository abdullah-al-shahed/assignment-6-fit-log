'use client';
import Link from 'next/link';
import { Plus, Bookmark, Eye, Star, Flame, Clock } from 'lucide-react';
import { usePlan } from '@/context/PlanContext';

export default function WorkoutCard({ workout }) {
  const { addToPlan, addToSaved } = usePlan();

  return (
    <div className="bg-[#121418] border border-[#1f242d] rounded-2xl overflow-hidden hover:border-[#ccff00]/50 transition duration-300 flex flex-col justify-between group">
      <div>
        <div className="relative h-48 overflow-hidden bg-[#1a1d24]">
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute top-3 right-3 flex gap-1">
            {workout.muscleGroups?.map((muscle, idx) => (
              <span key={idx} className="bg-black/70 backdrop-blur-md text-[#ccff00] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#ccff00]/30 uppercase">
                {muscle}
              </span>
            ))}
          </div>
          <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1 border border-white/10">
            <Star className="w-3.5 h-3.5 fill-[#ccff00] text-[#ccff00]" /> {workout.rating}
          </span>
        </div>

        <div className="p-5">
          <h3 className="font-heading text-xl text-white mb-2">{workout.name}</h3>
          <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">
            {workout.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-[#1f242d]/60 pt-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-500" /> {workout.duration}m
            </span>
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-orange-500" /> {workout.caloriesBurned} kcal
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-[#1f242d] mt-2 pt-4">
        <Link
          href={`/workout/${workout.id}`}
          className="text-gray-300 hover:text-white p-2 rounded-lg bg-[#1a1d24] border border-[#2b303c] transition"
          title="View Details"
        >
          <Eye className="w-4 h-4" />
        </Link>

        <div className="flex gap-2">
          <button
            onClick={() => addToSaved(workout)}
            className="p-2 text-gray-300 hover:text-white bg-[#1a1d24] border border-[#2b303c] rounded-lg transition"
            title="Save for later"
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            onClick={() => addToPlan(workout)}
            className="flex items-center gap-1 bg-[#ccff00] text-black font-semibold text-xs px-3.5 py-2 rounded-lg hover:bg-[#b8e600] transition cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}