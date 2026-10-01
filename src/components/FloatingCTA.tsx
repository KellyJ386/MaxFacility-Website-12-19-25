import Link from "next/link";

export default function FloatingCTA() {
  return (
    <Link
      href="/request-demo"
      className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-green-500 px-6 py-3.5 font-label text-sm font-bold uppercase tracking-wider text-navy-900 shadow-float transition-all hover:-translate-y-0.5 hover:bg-green-400 sm:inline-flex"
    >
      Book a Demo
    </Link>
  );
}
