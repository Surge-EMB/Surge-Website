import BikePageBlock from "@/src/components/BikePageBlock";

export default function ThunderbirdPage() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12 bg-white">
      <BikePageBlock
        variant="header"
        title="Thunderbird"
        bodyText={`This motorcycle is the founding project of Surge Electric Motorcycles at Berkeley and serves as the team’s first full electric conversion. The build is based on a 2006 Honda CBR600RR purchased with a failed engine and stripped to the bare frame. From this platform, the team is redesigning the drivetrain, energy system, and supporting structures around a fully electric architecture.

        The project emphasizes safety, modularity, and reliability, with all major systems designed, fabricated, and integrated in-house. After an initial development phase, the team reset its approach for the 2025–26 academic year with higher performance targets, clearer system ownership, and a more disciplined engineering and manufacturing process. The bike is currently in final fabrication and integration, with first operation targeted for early 2026.`}
        images={[
          { src: "/images/bikes/thunderbird/EmptyBike.jpeg", alt: "Honda CBR front view" },
        ]}
      />

      <BikePageBlock
        variant="body"
        title="Power Train"
        bodyText="The bike uses a mid-drive electric powertrain driving the rear wheel through a chain reduction. It is built around a QS180 motor, delivering approximately 8 kW continuous and 24 kW peak power. Gearing is selected to balance strong acceleration with a highway-capable top speed. Custom motor mounting plates and drivetrain alignment features were designed and manufactured to ensure accurate chain alignment, repeatable assembly, and long-term reliability."
        images={[
          { src: "/images/bikes/thunderbird/UpperBodyPrototype.png", alt: "Lower Body Prototype" },
          { src: "/images/bikes/thunderbird/LowerBodyPrototype.png", alt: "Upper Body Prototype" },
        ]}
      />

      <BikePageBlock
        variant="body"
        title="Battery"
        bodyText={`The battery is a fully custom 28s8p lithium-ion pack (~3.4 kWh nominal) built using Molicel P42A cells. It is structurally integrated into an aluminum subframe using laser-cut aluminum side plates, allowing the battery to serve as both an energy system and a structural component of the bike.

        Electrical interconnects use copper–nickel hybrid busbars to combine high conductivity with reliable spot-weld interfaces. The pack incorporates a battery management system for cell monitoring and protection, and the entire battery system was designed, assembled, and validated by the team.`}
        images={[
          { src: "/images/bikes/thunderbird/BatteryCAD1.png", alt: "Battery CAD"},
          { src: "/images/bikes/thunderbird/BatteryCAD2.png", alt: "Battery CAD"},
          { src: "/images/bikes/thunderbird/BatteryModulePrototype.JPG", alt: "Prototype assembly of a single battery module" },
          { src: "/images/bikes/thunderbird/BatteryModule.JPG", alt: "Assembled single battery module" },
        ]}
      />

      <BikePageBlock
        variant="body"
        title="Low Voltage"
        bodyText={`The high-voltage drivetrain is controlled using a VESC-based motor controller, selected for tunability, data access, and flexibility. The low-voltage system is built around an ESP32-based controller responsible for throttle input, system logic, and sensor interfacing, with provisions for future data logging and telemetry.
        
        The electrical architecture is modular and serviceable, with clear separation between high-power and low-voltage systems to simplify testing, debugging, and future upgrades.`}
        images={[
          { src: "/images/bikes/thunderbird/MotorTesting.png", alt: "Motor controller testing"}
        ]}
      />
    </main>
  );
}