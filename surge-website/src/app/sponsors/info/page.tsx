"use client";

import MainButton from "@/src/components/MainButton";

// Configure the border/background color here
const BORDER_COLOR = "#1e3a5f"; // Dark blue - change this to any color you want

export default function SponsorInfoPage() {

  return (
    <main
      className="min-h-screen py-8 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: BORDER_COLOR }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Header with title and download button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-white text-display md:text-dispaly-lg font-display italic">
            Sponsorship Packet
          </h1>
        </div>

        {/* PDF Viewer Container */}
        <div className="w-full rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="/SponsorshipPacketSP26.pdf"
            className="w-full bg-white"
            style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}
            title="Sponsorship Packet PDF"
          />
        </div>
      </div>
    </main>
  );
}
