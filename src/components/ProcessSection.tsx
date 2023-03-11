import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Blob from "./blob/Blob";
import { Html, ScrollControls, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";

const TitleSection = () => {
  const scrollData = useScroll();
  const canvasSize = useThree((state) => state.size);
  const groupRef = useRef<THREE.Group>(null!);

  const polyEquation = (x: number) => {
    return (
      -0.00000000000029707 * Math.pow(x, 4) +
      0.00000000238692124 * Math.pow(x, 3) -
      0.00000447098818061 * Math.pow(x, 2) -
      0.00373916279620851 * x +
      1.17687664001955
    );
  };

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.x = polyEquation(canvasSize.width);
    }
    console.log(canvasSize.width);
  }, [canvasSize.width]);

  window.addEventListener("resize", (e) => {
    if (groupRef.current) {
      groupRef.current.position.x = polyEquation(canvasSize.width);
    }
  });

  return (
    <group ref={groupRef} position={[0, 4.3, 0]}>
      <Html transform portal={{ current: scrollData.fixed }}>
        <div className="flex flex-col font-krylon">
          <h2 className="font-times">プロセス</h2>
          <h1 className="text-4xl">Process</h1>
        </div>
      </Html>
    </group>
  );
};

const ScrollSection = () => {
  const scrollData = useScroll();
  const cardsRef = useRef<THREE.Group>(null!);
  const canvasSize = useThree((state) => state.size);
  useFrame(() => {
    if (cardsRef.current) {
      if (canvasSize.width <= 420) {
        cardsRef.current.position.x =
          -0.041 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 455) {
        cardsRef.current.position.x =
          -0.038 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 500) {
        cardsRef.current.position.x =
          -0.035 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 555) {
        cardsRef.current.position.x =
          -0.033 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 620) {
        cardsRef.current.position.x =
          -0.027 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 705) {
        cardsRef.current.position.x =
          -0.0239 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 815) {
        cardsRef.current.position.x =
          -0.0197 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 1000) {
        cardsRef.current.position.x =
          -0.0155 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 1300) {
        cardsRef.current.position.x =
          -0.011 * canvasSize.width * scrollData.offset + 8;
      } else if (canvasSize.width <= 1700) {
        cardsRef.current.position.x =
          -0.007 * canvasSize.width * scrollData.offset + 8;
      } else {
        cardsRef.current.position.x =
          -0.00455 * canvasSize.width * scrollData.offset + 8;
      }
    }
  });

  return (
    <group ref={cardsRef} position={[0, 0, 0]}>
      <Html transform portal={{ current: scrollData.fixed }}>
        <div className="flex flex-row gap-x-9">
          <div>
            <h3 className="font-josefin">Discovery</h3>
            <div className="h-48 w-48 rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter"></div>
          </div>
          <div>
            <h3 className="font-josefin">Design</h3>
            <div className="h-48 w-48 rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter"></div>
          </div>
          <div>
            <h3 className="font-josefin">Development</h3>
            <div className="h-48 w-48 rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter"></div>
          </div>
          <div>
            <h3 className="font-josefin">Maintenance</h3>
            <div className="h-48 w-48 rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter"></div>
          </div>
        </div>
      </Html>
    </group>
  );
};

function ProcessSection() {
  return (
    <section className="h-screen w-screen">
      <div className="h-full w-full">
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <ScrollControls
            pages={3}
            style={{
              width: "100vw",
              height: "100vh",
              top: "0",
              zIndex: 50,
            }}
          >
            <TitleSection />
            <ScrollSection />
            <Blob />
          </ScrollControls>
        </Canvas>
      </div>
    </section>
  );
}

export default ProcessSection;
