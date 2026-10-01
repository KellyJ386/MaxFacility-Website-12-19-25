import Link from "next/link";

export default function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-green-500 px-6 py-3.5 font-label text-sm font-bold uppercase tracking-wider text-white shadow-float transition-all hover:-translate-y-0.5 hover:bg-green-600 sm:inline-flex"
    >
      Book a Demo
    </Link>
  );
}
