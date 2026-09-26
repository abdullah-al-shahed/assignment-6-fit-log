import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-heading text-8xl text-[#ccff00] mb-2">404</h1>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase">PAGE NOT FOUND</h2>
      <p className="text-gray-400 text-sm max-w-md mb-6">
        The workout route or page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-[#ccff00] text-black font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#b8e600] transition"
      >
        Back to Library
      </Link>
    </div>
  );
}