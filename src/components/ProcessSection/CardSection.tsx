import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { Html, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import designCard from "../../../public/images/Design.png";

const CardSection = () => {
  type posType = {
    x: number;
    top: number;
  };

  var pos = {
    x: 0,
    top: 0,
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const dx = e.clientX - pos.x;

    // Scroll the element
    if (scrollData.fixed.parentElement) {
      scrollData.fixed.parentElement.scrollTop = pos.top - dx * 1.5;
    }
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

    /* eslint-disable */
    // Reset the cursor
    if (scrollData.fixed.parentElement) {
      const temp =
        scrollData.fixed.lastChild?.lastChild!.lastChild?.lastChild?.lastChild;
      // @ts-ignore
      temp!.style.cursor = "grab";
      scrollData.fixed.parentElement.style.userSelect = "auto";
    }
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (scrollData.fixed.parentElement) {
      pos.x = e.clientX;
      pos.top = scrollData.fixed.parentElement.scrollTop;

      // Set the cursor
      const temp =
        scrollData.fixed.lastChild?.lastChild!.lastChild?.lastChild?.lastChild;
      // @ts-ignore
      temp!.style.cursor = "grabbing";
      scrollData.fixed.parentElement.style.userSelect = "none";
      /* eslint-enable */
      // Add the listeners
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  }, []);

  const scrollData = useScroll();

  const cardsRef = useRef<THREE.Group>(null!);
  const canvasSize = useThree((state) => state.size);
  const cardEquation = (x: number) => {
    return (
      0.000000000005834 * Math.pow(x, 4) -
      0.000000026484216 * Math.pow(x, 3) +
      0.000043610057363 * Math.pow(x, 2) -
      0.023913195646469 * x -
      5.90941162392738
    );
  };

  const cardContainer = useRef<HTMLDivElement>(null!);
  const imageElement = useRef<HTMLImageElement>(null!);

  useEffect(() => {
    console.log(imageElement);
  }, [imageElement]);

  useFrame(() => {
    if (cardsRef.current) {
      cardsRef.current.position.x =
        cardEquation(canvasSize.width) + 11 * (1 - scrollData.offset);
    }
  });

  return (
    <group ref={cardsRef} position={[0, 0, 0]}>
      <Html transform portal={{ current: scrollData.fixed }}>
        <div
          ref={cardContainer}
          onMouseEnter={() => {
            if (scrollData.fixed.parentElement) {
              document.addEventListener("mousedown", handleMouseDown);
            }
          }}
          onMouseLeave={() => {
            if (scrollData.fixed.parentElement) {
              document.removeEventListener("mousedown", handleMouseDown);
            }
          }}
          onMouseUp={() => {}}
          className="flex cursor-grab flex-row items-center gap-x-9"
        >
          <ArrowLeftCircleIcon className="w-h-20 h-20 text-neutral-300 mix-blend-difference " />
          <div>
            <h3 className="font-josefin">Discovery</h3>
            <div className="h-48 w-48 rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding p-2 shadow-md backdrop-blur-md backdrop-filter"></div>
          </div>
          <div>
            <h3 className="font-josefin">Design</h3>
            <div
              ref={imageElement}
              className="h-48 w-48 overflow-hidden rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter"
            >
              <Image
                className="object-cover object-center opacity-90 transition-opacity duration-500 ease-in-out hover:opacity-20"
                fill
                src={designCard}
                alt=""
              />
            </div>
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
export default CardSection;
