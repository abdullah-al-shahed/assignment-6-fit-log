'use client';
import { useState } from 'react';
import WorkoutCard from './WorkoutCard';
import { ArrowUpDown } from 'lucide-react';

export default function WorkoutList({ initialWorkouts }) {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [sortBy, setSortBy] = useState('duration');

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    const sorted = [...workouts].sort((a, b) => {
      if (value === 'duration') return a.duration - b.duration;
      if (value === 'calories') return b.caloriesBurned - a.caloriesBurned;
      if (value === 'rating') return b.rating - a.rating;
      return 0;
    });
    setWorkouts(sorted);
  };

  return (
    <div id="library" className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-heading text-3xl uppercase text-white tracking-wide">
            THE LIBRARY
          </h2>
          <p className="text-gray-400 text-sm">Twelve lifts covering every major muscle group.</p>
        </div>

        {/* Challenge C1: Sort Dropdown */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center bg-[#121418] border border-[#1f242d] rounded-xl px-3 py-1.5 text-xs text-gray-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#ccff00] mr-2" />
            <span className="text-gray-500 mr-2">Sort By:</span>
            <select
              value={sortBy}
              onChange={handleSort}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="duration" className="bg-[#121418]">Duration</option>
              <option value="calories" className="bg-[#121418]">Calories</option>
              <option value="rating" className="bg-[#121418]">Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}