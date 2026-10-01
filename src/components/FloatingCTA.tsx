import Link from "next/link";

export default function FloatingCTA() {
  return (
    <Link
      href="/request-demo"
      className="fixed bottom-4 right-4 z-40 inline-flex rounded-full bg-green-500 px-5 py-3 font-label text-xs font-bold uppercase tracking-wider sm:bottom-6 sm:right-6 sm:px-6 sm:py-3.5 sm:text-sm text-navy-900 shadow-float transition-all hover:-translate-y-0.5 hover:bg-green-400"
    >
      Book a Demo
    </Link>
  );
}
