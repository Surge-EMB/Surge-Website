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
                Surge is made up of students like you. Join Now. Lorem ipsum
                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.
            </p>
            </div>

            {/* Right column - Apply button (1/3) */}
            <div className="flex justify-center lg:justify-end">
            <Link href="/apply">
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