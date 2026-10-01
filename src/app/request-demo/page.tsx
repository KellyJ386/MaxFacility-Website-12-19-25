import { Metadata } from "next";
import Image from "next/image";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a live RinkReports demo. See ice depth monitoring, daily reports, scheduling and compliance for your ice rink.",
};

export default function RequestDemoPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 pb-20 pt-40">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-green-500/20 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/rinkreports_logo.svg"
            alt="RinkReports"
            width={360}
            height={185}
            unoptimized
            className="mx-auto mb-6 h-auto w-[200px] md:w-[260px]"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request a Demo
          </h1>
          <p className="text-xl text-grey-300">
            Tell us about your facility and we&apos;ll schedule a walkthrough of
            RinkReports.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-soft p-8 md:p-10">
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
