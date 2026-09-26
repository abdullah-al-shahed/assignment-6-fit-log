import Hero from '@/components/Hero';
import WorkoutList from '@/components/WorkoutList';

async function getWorkouts() {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch workouts data');
  return res.json();
}

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <Hero />
      <WorkoutList initialWorkouts={workouts} />
    </div>
  );
}