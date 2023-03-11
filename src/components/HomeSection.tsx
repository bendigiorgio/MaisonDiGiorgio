import React from "react";
import Image from "next/image";
import seasonImage from "../../public/images/treeScene.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function HomeSection() {
  const [hovering, setHovering] = useState(false);
  const [hoverNumber, setHoverNumber] = useState(0);
  return (
    <section>
      <div className="pt-32">
        <div className="flex h-full w-full flex-col items-center gap-12 md:gap-20">
          {/* Title Section */}
          <div className="flex flex-col items-center text-s-grey md:gap-y-4">
            <h1 className="font-krylon text-5xl md:text-7xl">
              Maison Di Giorgio
            </h1>
            <h2 className="mt-3 font-josefin text-2xl font-light md:mt-0 md:text-3xl">
              Digital Agency
            </h2>
          </div>

          {/* Season Section */}
          <div className="flex flex-col items-center font-times leading-tight md:mt-28 md:text-2xl">
            <p>春 - 夏</p>
            <p>Printemps - Été</p>
            <p>Spring-Summer 2023</p>
          </div>

          {/* Season Image */}
          <div className="h-[80vh] w-screen px-8 md:px-12 lg:px-32 xl:px-48">
            <AnimatePresence>
              <div
                className="flex h-[82.5%] w-full"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <div
                  onMouseEnter={() => setHoverNumber(0)}
                  className={`${
                    // eslint-disable-next-line
                    hovering && "opacity-40"
                  } relative flex grow cursor-pointer overflow-hidden rounded-l-3xl transition-all delay-75 ease-in-out hover:z-20 hover:scale-125 hover:rounded-3xl hover:opacity-100`}
                >
                  {hovering && hoverNumber === 0 && (
                    <motion.h3
                      key={"first_image"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute top-1/2 left-[45%] z-30 text-white"
                    >
                      Test
                    </motion.h3>
                  )}
                  <Image
                    priority
                    className="scale-[1.5] object-cover object-left-bottom"
                    fill
                    src={seasonImage}
                    alt="Season Image"
                  />
                </div>
                <div
                  className={`${
                    // eslint-disable-next-line
                    hovering && "opacity-40"
                  } relative hidden grow cursor-pointer overflow-hidden transition-all delay-75 ease-in-out hover:z-20 hover:scale-125 hover:rounded-3xl hover:opacity-100 xl:flex`}
                  onMouseEnter={() => setHoverNumber(1)}
                >
                  <Image
                    priority
                    className="scale-[2.8] object-cover object-[0%_-10vw]"
                    fill
                    src={seasonImage}
                    alt="Season Image"
                  />
                </div>
                <div
                  className={`${
                    // eslint-disable-next-line
                    hovering && "opacity-40"
                  } relative flex grow cursor-pointer overflow-hidden transition-all delay-75 ease-in-out hover:z-20 hover:scale-125 hover:rounded-3xl hover:opacity-100`}
                  onMouseEnter={() => setHoverNumber(2)}
                >
                  <Image
                    priority
                    className="scale-[1.6] object-cover object-[60%,-5vw]"
                    fill
                    src={seasonImage}
                    alt="Season Image"
                  />
                </div>
                <div
                  className={`${
                    // eslint-disable-next-line
                    hovering && "opacity-40"
                  } relative hidden grow cursor-pointer overflow-hidden transition-all delay-75 ease-in-out hover:z-20 hover:scale-125 hover:rounded-3xl hover:opacity-100 lg:flex`}
                  onMouseEnter={() => setHoverNumber(3)}
                >
                  <Image
                    priority
                    className="scale-[2] object-cover object-[45%_8vw]"
                    fill
                    src={seasonImage}
                    alt="Season Image"
                  />
                </div>
                <div
                  className={`${
                    // eslint-disable-next-line
                    hovering && "opacity-40"
                  } relative flex grow cursor-pointer overflow-hidden rounded-r-3xl transition-all delay-75 ease-in-out hover:z-20 hover:scale-125 hover:rounded-3xl hover:opacity-100`}
                  onMouseEnter={() => setHoverNumber(4)}
                >
                  <Image
                    priority
                    className="scale-[2.5] object-cover object-[25%,-7vw]"
                    fill
                    src={seasonImage}
                    alt="Season Image"
                  />
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
