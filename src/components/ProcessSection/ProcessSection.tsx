import { Canvas } from "@react-three/fiber";
import Blob from "../blob/Blob";
import { ScrollControls } from "@react-three/drei";
import TitleSection from "./TitleSection";
import CardSection from "./CardSection";

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
            <CardSection />
            <Blob />
          </ScrollControls>
        </Canvas>
      </div>
    </section>
  );
}

export default ProcessSection;
