import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[#1f242d] bg-[#0b0c0e] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl text-white">
          <Image 
            src="/logo.png" 
            alt="FitLog Logo" 
            width={24} 
            height={24} 
            className="object-contain"
          />
          FITLOG
        </Link>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}