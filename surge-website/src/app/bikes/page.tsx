"use client"
import React from "react";
import BikePreview from "@/src/components/BikePreview";

interface Bike {
  title: string;
  bikeImage: string;
  bikeName: string;
}

interface BikePageProps {
  bikes?: Bike[];
}

const defaultBikes: Bike[] = [
  {
    title: "Honda CBR Conversion",
    bikeImage: "/images/bikePlaceholder.png",
    bikeName: "Honda CBR",
  },
  {
    title: "Kawasaki Ninja Build",
    bikeImage: "/images/bikePlaceholder.png",
    bikeName: "Kawasaki Ninja",
  },
  {
    title: "Yamaha R6 Custom",
    bikeImage: "/images/bikePlaceholder.png",
    bikeName: "Yamaha R6",
  },
];

const BikePage: React.FC<BikePageProps> = ({ bikes = defaultBikes }) => {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="min-w-screen mx-auto flex flex-col gap-8">
        {bikes.map((bike, index) => (
          <BikePreview
            key={index}
            title={bike.title}
            bikeImage={bike.bikeImage}
            bikeName={bike.bikeName}
          />
        ))}
      </div>
    </main>
  );
};

export default BikePage;