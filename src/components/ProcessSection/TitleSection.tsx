import { Html, useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
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

  const polyEquationHeight = (x: number) => {
    return (
      0.0000000038 * Math.pow(x, 3) -
      0.0000188117 * Math.pow(x, 2) +
      0.0356092824 * x -
      19.9157558831
    );
  };

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.x =
        polyEquation(canvasSize.width) + polyEquationHeight(window.innerHeight);
    }
  }, [canvasSize.width]);

  window.addEventListener("resize", (e) => {
    if (groupRef.current) {
      groupRef.current.position.x =
        polyEquation(canvasSize.width) + polyEquationHeight(window.innerHeight);
    }
  });

  return (
    <group ref={groupRef} position={[0, 4.3, 0]}>
      <Html transform portal={{ current: scrollData.fixed }}>
        <div className="flex flex-col font-josefin">
          <h2 className="font-times">プロセス</h2>
          <h1 className="text-4xl">Process</h1>
        </div>
      </Html>
    </group>
  );
};
export default TitleSection;
