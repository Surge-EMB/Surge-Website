import MainButton from "@/src/components/MainButton";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Yellow accent bar */}
      <div className="h-2 bg-text-yellow border-y-2 border-text-blue" />

      {/* Main content */}
        <div className="page-container py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Left column - Text content (2/3) */}
            <div className="lg:col-span-2">
            <h1 className="font-display text-display leading-none md:text-display-lg lg:text-display-xl text-text-blue italic tracking-[-0.01em] leading-50">
                Ride the Lightning.
                <br />
                Join Surge.
            </h1>

            <p className="font-body text-black text-subheading text-lg mt-8 max-w-xl">
                While our bikes are powered by electricity, Surge is powered by students. 
                If you’re curious about the inner workings of electric vehicles and want an 
                opportunity to dive into the field headfirst, apply to Surge today. No experience 
                 required, just a desire to learn and contribute. 
            </p>
            </div>

            {/* Right column - Apply button (1/3) */}
            <div className="flex justify-center lg:justify-end">
            <Link href="https://forms.gle/4HsHPY4qsxZWdJjz6">
                <MainButton className="text-display px-16 py-6">
                Apply
                </MainButton>
            </Link>
            </div>

        </div>
        </div>
    </div>
  );
}