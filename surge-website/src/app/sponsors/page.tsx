"use client";

import MainButton from "@/src/components/MainButton";
import Link from "next/link";

export default function SponsorPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Interested In Sponsoring Section */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-text-blue text-display md:text-dispaly-lg font-display italic mb-6">
              Interested In Sponsoring?
            </h2>
            <p className="font-body text-text-blue text-subheading leading-relaxed">
              Info for sponsors. Lorem ipsum dolor sit amet, consectetuer 
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
              minim veniam, quis nostrud exerci tation ullamcorper suscipit 
              lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/sponsor/info">
              <MainButton className="md:text-display text-heading-lg px-16 py-6">
                SPONSOR INFO
              </MainButton>
            </Link>
          </div>
        </section>

        {/* Help Keep the Power On Section */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-text-blue text-display md:text-dispaly-lg font-display italic mb-6">
              Help Keep the Power On.
            </h2>
            <p className="font-body text-text-blue text-subheading leading-relaxed">
              Make a direct donation to our team. Lorem ipsum dolor sit amet, 
              consectetuer adipiscing elit, sed diam nonummy nibh euismod 
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
              enim ad minim veniam, quis nostrud exerci tation ullamcorper 
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/donate">
              <MainButton className="md:text-display text-heading-lg px-16 py-6">
                DONATE
              </MainButton>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}