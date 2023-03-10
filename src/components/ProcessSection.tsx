import { Canvas } from "@react-three/fiber";
import Blob from "./blob/Blob";
import { ScrollControls } from "@react-three/drei";

function ProcessSection() {
  return (
    <section className="h-screen w-screen">
      <div className="h-full w-full">
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <ScrollControls
            pages={3}
            style={{
              width: "100vw",

              height: "60vh",
              top: "20%",
            }}
          >
            <Blob />
          </ScrollControls>
        </Canvas>
      </div>
    </section>
  );
}

export default ProcessSection;
