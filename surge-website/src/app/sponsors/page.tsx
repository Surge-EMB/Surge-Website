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
            <p className="font-body text-black text-subheading leading-relaxed">
              	Surge is an exciting club, largely because it’s so new. Support and contributions 
                from companies and individuals like you are vital for our long-term success. We offer a 
                variety of benefits to our sponsors, the details of which can be found in the sponsorship 
                packet linked on the right. Interested in funding Berkeley’s newest, fastest club? Check 
                out our sponsorship packet!
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
            <p className="font-body text-black text-subheading leading-relaxed">
              Individual donations also go a long way in ensuring that Surge can continue to grow and 
              improve. We are incredibly grateful for the support we receive from all our sponsors, no 
              matter the amount. On behalf of everyone at Surge, we’d like to say thank you. 
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