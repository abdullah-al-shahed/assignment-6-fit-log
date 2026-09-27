import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-black text-[#ccff00] mb-2">404</h1>
      <h2 className="text-2xl font-extrabold tracking-wide mb-3 uppercase">Page Not Found</h2>
      <p className="text-gray-400 text-sm max-w-md mb-8">
        The lift or page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#ccff00] text-black font-bold px-6 py-3 rounded-full hover:bg-[#b8e600] transition text-xs uppercase tracking-wider"
      >
        Back to Library
      </Link>
    </div>
  );
}