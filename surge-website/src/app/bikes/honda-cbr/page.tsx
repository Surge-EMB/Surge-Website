import BikePageBlock from "@/src/components/BikePageBlock";

export default function HondaCBRPage() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12 bg-white">
      <BikePageBlock
        variant="header"
        title="Honda CBR"
        bodyText="Experience the pinnacle of sport bike engineering with the Honda CBR series. Built for performance enthusiasts who demand precision handling, explosive acceleration, and race-inspired design. The CBR lineage carries decades of championship-winning technology directly to the street."
        images={[
          { src: "/images/honda-cbr/hero-1.jpg", alt: "Honda CBR front view" },
          { src: "/images/honda-cbr/hero-2.jpg", alt: "Honda CBR side view" },
          { src: "/images/honda-cbr/hero-3.jpg", alt: "Honda CBR rear view" },
        ]}
      />

      <BikePageBlock
        variant="body"
        title="Power Train"
        bodyText="The heart of the CBR beats with a finely-tuned inline engine delivering smooth, linear power throughout the rev range. Advanced fuel injection and variable valve timing ensure optimal performance whether you're carving canyon roads or pushing limits on the track. Every component is engineered for maximum power-to-weight efficiency."
        images={[
          { src: "/images/honda-cbr/performance-1.jpg", alt: "CBR engine detail" },
          { src: "/images/honda-cbr/performance-2.jpg", alt: "CBR exhaust system" },
          { src: "/images/honda-cbr/performance-3.jpg", alt: "CBR in motion" },
        ]}
      />

      <BikePageBlock
        variant="body"
        title="Battery"
        bodyText="Cutting-edge electronics put you in complete control. Ride-by-wire throttle, multiple riding modes, traction control, and quickshifter come together to create an intuitive riding experience. The full-color TFT display keeps vital information at your fingertips while maintaining focus on the road ahead."
        images={[
          { src: "/images/honda-cbr/tech-1.jpg", alt: "CBR digital display" },
          { src: "/images/honda-cbr/tech-2.jpg", alt: "CBR controls" },
          { src: "/images/honda-cbr/tech-3.jpg", alt: "CBR electronics" },
        ]}
      />

      <BikePageBlock
        variant="body"
        title="Low Voltage"
        bodyText="Aerodynamic bodywork slices through the air with purpose, reducing drag while providing stability at speed. LED lighting illuminates the path forward with aggressive styling cues. Every curve and angle serves both form and function, resulting in a machine that looks as fast standing still as it performs in motion."
        images={[
          { src: "/images/honda-cbr/design-1.jpg", alt: "CBR aerodynamic fairing" },
          { src: "/images/honda-cbr/design-2.jpg", alt: "CBR LED headlights" },
          { src: "/images/honda-cbr/design-3.jpg", alt: "CBR color options" },
        ]}
      />
    </main>
  );
}