import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { Html, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import designCard from "../../../public/images/DesignImage.webp";
import discoveryCard from "../../../public/images/DiscoveryImage.webp";
import developmentCard from "../../../public/images/DevImage.webp";
import MaintenanceCard from "../../../public/images/MaintenanceImage.webp";

const CardSection = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(false);
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      setMobile(true);
    }
  }, []);

  const pos = {
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

      // Add the listeners
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches[0]) {
      const dx = e.touches[0].clientX - pos.x;

      // Scroll the element
      if (scrollData.fixed.parentElement) {
        scrollData.fixed.parentElement.scrollTop = pos.top - dx * 3;
      }
    }
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (e.touches[0]) {
      if (scrollData.fixed.parentElement) {
        pos.x = e.touches[0].clientX;
        pos.top = scrollData.fixed.parentElement.scrollTop;

        // Add the listeners
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
      }
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

  const startLocEquation = (x: number) => {
    return (
      0.0000000048 * Math.pow(x, 3) -
      0.000013448 * Math.pow(x, 2) +
      0.003309577 * x +
      20.8838087174
    );
  };

  const cardContainer = useRef<HTMLDivElement>(null!);

  /* eslint-enable */
  useFrame(() => {
    if (cardsRef.current) {
      cardsRef.current.position.x =
        cardEquation(canvasSize.width) +
        startLocEquation(canvasSize.width) * (1 - scrollData.offset);
    }
  });

  return (
    <group ref={cardsRef} position={[0, 0, 0]}>
      <Html transform portal={{ current: scrollData.fixed }}>
        <div
          ref={cardContainer}
          onMouseEnter={() => {
            if (scrollData.fixed.parentElement) {
              if (mobile) {
                document.addEventListener("touchstart", handleTouchStart);
              } else {
                document.addEventListener("mousedown", handleMouseDown);
              }
            }
          }}
          onMouseLeave={() => {
            if (scrollData.fixed.parentElement) {
              if (scrollData.fixed.parentElement) {
                if (mobile) {
                  document.removeEventListener("touchstart", handleTouchStart);
                } else {
                  document.removeEventListener("mousedown", handleMouseDown);
                }
              }
            }
          }}
          className="flex cursor-grab flex-row items-center gap-x-9"
        >
          <ArrowLeftCircleIcon className="w-h-20 h-20 text-neutral-300 mix-blend-difference " />
          <div>
            <h3 className="font-josefin">Discovery</h3>
            <div className="h-48 w-48 overflow-hidden rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter">
              <Image
                draggable={false}
                className="object-cover object-center opacity-90 transition-opacity duration-500 ease-in-out hover:opacity-20"
                fill
                src={discoveryCard}
                alt=""
              />
            </div>
          </div>
          <div>
            <h3 className="font-josefin">Design</h3>
            <div className="h-48 w-48 overflow-hidden rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter">
              <Image
                draggable={false}
                className="object-cover object-center opacity-90 transition-opacity duration-500 ease-in-out hover:opacity-20"
                fill
                src={designCard}
                alt=""
              />
            </div>
          </div>
          <div>
            <h3 className="font-josefin">Development</h3>
            <div className="h-48 w-48 overflow-hidden rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter">
              <Image
                draggable={false}
                className="object-cover object-left opacity-90 transition-opacity duration-500 ease-in-out hover:opacity-20"
                fill
                src={developmentCard}
                alt=""
              />
            </div>
          </div>
          <div>
            <h3 className="font-josefin">Maintenance</h3>
            <div className="h-48 w-48 overflow-hidden rounded-md border-s-purple bg-neutral-100 bg-opacity-70 bg-clip-padding shadow-md backdrop-blur-md backdrop-filter">
              <Image
                draggable={false}
                className="object-cover object-left opacity-90 transition-opacity duration-500 ease-in-out hover:opacity-20"
                fill
                src={MaintenanceCard}
                alt=""
              />
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
};
export default CardSection;
