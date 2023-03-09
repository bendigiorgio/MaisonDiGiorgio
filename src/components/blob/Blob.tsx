import { useMemo, useRef } from "react";
import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { useScroll } from "@react-three/drei";
function Blob() {
  const mesh = useRef(null);
  const vShader = vertexShader;
  const fShader = fragmentShader;
  const scroll = useScroll();

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
      u_scroll_pos: { value: 0 },
      u_boost_red: { value: 0.0 },
      u_boost_green: { value: 0.0 },
      u_boost_blue: { value: 0.0 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      //@ts-ignore
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();
      //@ts-ignore
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        //@ts-ignore
        mesh.current.material.uniforms.u_intensity.value,
        0.15 + scroll.delta * 100,
        0.02
      );

      scroll.offset > 0.33
        ? //@ts-ignore
          ((mesh.current.material.uniforms.u_boost_red.value = MathUtils.lerp(
            //@ts-ignore
            mesh.current.material.uniforms.u_boost_red.value,
            1.0,
            0.002
          )),
          //@ts-ignore
          (mesh.current.material.uniforms.u_boost_green.value = MathUtils.lerp(
            //@ts-ignore
            mesh.current.material.uniforms.u_boost_green.value,
            0.5,
            0.002
          )),
          //@ts-ignore
          (mesh.current.material.uniforms.u_boost_blue.value = MathUtils.lerp(
            //@ts-ignore
            mesh.current.material.uniforms.u_boost_blue.value,
            -1.0,
            0.002
          )))
        : //@ts-ignore
          (mesh.current.material.uniforms.u_boost_red.value = MathUtils.lerp(
            //@ts-ignore
            mesh.current.material.uniforms.u_boost_red.value,
            0.0,
            0.002
          )),
        //@ts-ignore
        (mesh.current.material.uniforms.u_boost_green.value = MathUtils.lerp(
          //@ts-ignore
          mesh.current.material.uniforms.u_boost_green.value,
          0.0,
          0.002
        )),
        //@ts-ignore
        (mesh.current.material.uniforms.u_boost_blue.value = MathUtils.lerp(
          //@ts-ignore
          mesh.current.material.uniforms.u_boost_blue.value,
          0.0,
          0.002
        ));

      //@ts-ignore
      mesh.current.material.uniforms.u_scroll_pos.value = scroll.offset;
      console.log(scroll.offset);
    }
  });

  return (
    <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vShader}
        fragmentShader={fShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default Blob;
