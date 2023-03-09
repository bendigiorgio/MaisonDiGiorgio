import React from "react";
import Image from "next/image";
import seasonImage from "../../public/images/treeScene.png";
import { useState } from "react";

function HomeSection() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="pt-32">
      <div className="flex h-full w-full flex-col items-center gap-20">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-y-4 text-s-grey">
          <h1 className="font-krylon text-7xl">Maison Di Giorgio</h1>
          <h2 className="font-josefin text-3xl font-light">Digital Agency</h2>
        </div>

        {/* Season Section */}
        <div className="mt-28 flex flex-col items-center font-times text-2xl leading-tight">
          <p>春 - 夏</p>
          <p>Printemps - Été</p>
          <p>Spring-Summer 2023</p>
        </div>

        {/* Season Image */}
        <div className="h-[80vh] w-screen px-48">
          <div
            className="flex h-[82.5%] w-full"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div
              className={`${
                hovering && " opacity-40"
              } relative flex grow cursor-pointer overflow-hidden rounded-l-3xl transition-all delay-75 ease-in-out hover:z-50 hover:scale-125 hover:rounded-3xl hover:opacity-100`}
            >
              <Image
                className="scale-[1.5] object-cover object-left-bottom"
                fill
                src={seasonImage}
                alt="Season Image"
              ></Image>
            </div>
            <div
              className={`${
                hovering && "opacity-40 "
              } relative flex grow cursor-pointer overflow-hidden transition-all delay-75 ease-in-out hover:z-50 hover:scale-125 hover:rounded-3xl hover:opacity-100`}
            >
              <Image
                className="scale-[2.8] object-cover object-[0%_-11vw]"
                fill
                src={seasonImage}
                alt="Season Image"
              ></Image>
            </div>
            <div
              className={`${
                hovering && "opacity-40 "
              } relative flex grow cursor-pointer overflow-hidden transition-all delay-75 ease-in-out hover:z-50 hover:scale-125 hover:rounded-3xl hover:opacity-100`}
            >
              <Image
                className="scale-[1.6] object-cover object-[60%,-5vw]"
                fill
                src={seasonImage}
                alt="Season Image"
              ></Image>
            </div>
            <div
              className={`${
                hovering && "opacity-40 "
              } relative flex grow cursor-pointer overflow-hidden transition-all delay-75 ease-in-out hover:z-50 hover:scale-125 hover:rounded-3xl hover:opacity-100`}
            >
              <Image
                className="scale-[2] object-cover object-[45%_8vw]"
                fill
                src={seasonImage}
                alt="Season Image"
              ></Image>
            </div>
            <div
              className={`${
                hovering && "opacity-40 "
              } relative flex grow cursor-pointer overflow-hidden rounded-r-3xl transition-all delay-75 ease-in-out hover:z-50 hover:scale-125 hover:rounded-3xl hover:opacity-100`}
            >
              <Image
                className="scale-[2.5] object-cover object-[25%,-7vw]"
                fill
                src={seasonImage}
                alt="Season Image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
