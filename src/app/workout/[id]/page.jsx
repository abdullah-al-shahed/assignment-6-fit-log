import Link from 'next/link';
import { ArrowLeft, Clock, Flame, Star, Dumbbell, Layers, Repeat } from 'lucide-react';
import AddToButtons from './AddToButtons';

async function getWorkoutDetail(id) {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;
  const workout = await getWorkoutDetail(id);

  if (!workout) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4">Workout Not Found</h2>
        <Link href="/" className="text-[#ccff00] underline">Back to Library</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition">
        <ArrowLeft className="w-4 h-4" /> Back to Workouts
      </Link>

      <div className="bg-[#121418] border border-[#1f242d] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
        <div>
          <div className="relative rounded-2xl overflow-hidden bg-[#1a1d24] h-72 md:h-96 border border-[#2b303c]">
            <img src={workout.image} alt={workout.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              {workout.muscleGroups?.map((m, i) => (
                <span key={i} className="bg-black/80 backdrop-blur-md text-[#ccff00] text-xs px-3 py-1 rounded-full border border-[#ccff00]/30 uppercase font-semibold">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ccff00]">
                {workout.difficulty} Level
              </span>
              <span className="flex items-center gap-1 text-sm bg-[#1a1d24] px-3 py-1 rounded-full border border-[#2b303c]">
                <Star className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" /> {workout.rating}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl text-white mb-4">{workout.name}</h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{workout.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-[#1a1d24] p-3 rounded-xl border border-[#2b303c]">
                <Clock className="w-4 h-4 text-[#ccff00] mb-1" />
                <p className="text-[10px] text-gray-400 uppercase">Duration</p>
                <p className="text-sm font-semibold text-white">{workout.duration} min</p>
              </div>
              <div className="bg-[#1a1d24] p-3 rounded-xl border border-[#2b303c]">
                <Flame className="w-4 h-4 text-orange-400 mb-1" />
                <p className="text-[10px] text-gray-400 uppercase">Burn</p>
                <p className="text-sm font-semibold text-white">{workout.caloriesBurned} kcal</p>
              </div>
              <div className="bg-[#1a1d24] p-3 rounded-xl border border-[#2b303c]">
                <Layers className="w-4 h-4 text-[#ccff00] mb-1" />
                <p className="text-[10px] text-gray-400 uppercase">Sets</p>
                <p className="text-sm font-semibold text-white">{workout.sets} Sets</p>
              </div>
              <div className="bg-[#1a1d24] p-3 rounded-xl border border-[#2b303c]">
                <Repeat className="w-4 h-4 text-cyan-400 mb-1" />
                <p className="text-[10px] text-gray-400 uppercase">Reps</p>
                <p className="text-sm font-semibold text-white">{workout.reps}</p>
              </div>
            </div>

            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-gray-500" />
              <span><strong>Equipment:</strong> {workout.equipment}</span>
            </div>
          </div>

          <AddToButtons workout={workout} />
        </div>
      </div>

      <div className="mt-8 bg-[#121418] border border-[#1f242d] rounded-3xl p-6 md:p-8">
        <h3 className="font-heading text-xl text-white mb-4 uppercase">How to Perform</h3>
        <ol className="space-y-3">
          {workout.instructions?.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="bg-[#1a1d24] text-[#ccff00] border border-[#2b303c] font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}