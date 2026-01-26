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
    title: "Thunderbird",
    bikeImage: "/images/bikes/thunderbird/EmptyBike.jpeg",
    bikeName: "Thunderbird",
  }
];

const BikePage: React.FC<BikePageProps> = ({ bikes = defaultBikes }) => {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="min-w-screen mx-auto flex flex-col justify-center gap-8">
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