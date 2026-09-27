import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#121418] rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between border border-gray-800/50">
      <div className="max-w-xl">
        <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase mb-3 block">
          WORKOUT LIBRARY
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-4 uppercase">
          TRAIN WITH INTENT. <br /> LOG EVERY SET.
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
        </p>
        <a
          href="#library"
          className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#b8e600] transition text-sm uppercase tracking-wide"
        >
          BROWSE WORKOUTS
        </a>
      </div>

      <div className="mt-8 md:mt-0 flex justify-center">
        <Image
          src="/banner.png"
          alt="Gym Companion Illustration"
          width={320}
          height={320}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}