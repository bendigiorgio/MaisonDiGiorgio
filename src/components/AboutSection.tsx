import Image from "next/image";
import React from "react";
import Profile from "../../public/images/BenD.webp";
import WideProfile from "../../public/images/wideBenD.webp";

function AboutSection() {
  return (
    <section className="flex h-screen flex-col items-center">
      <div className="container mt-10 flex flex-row justify-center">
        <div className="flex flex-col font-josefin">
          <h2 className="font-times text-3xl">自己紹介</h2>
          <h1 className="text-6xl">Who we are</h1>
          <div className=" mt-8 flex flex-col items-start gap-y-2  ">
            <h2 className="font-krylon text-4xl md:text-5xl">
              Benjamin Di Giorgio
            </h2>

            <div className="flex flex-col gap-y-4 md:gap-y-8 ">
              <p className="w-96 text-base">
                Scottish born, American raised, Australian based in Japan. I’ve
                had a strong passion for computers and fashion from a young age.
              </p>
              <blockquote>
                <svg
                  aria-hidden="true"
                  className="h-10 w-10 text-h-yellow"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>

                <p className="relative w-96 text-lg font-light">
                  Fashion’s uniqueness and creativity is a heavy inspiration for
                  my style of design and I seek to make design that captivate
                  their users.
                </p>
                <div className="absolute left-1/2 flex h-[40vh] w-[28rem] -translate-x-1/2 md:hidden lg:w-[25rem]">
                  <Image
                    className="object-contain object-center"
                    fill
                    sizes="50vw"
                    src={WideProfile}
                    alt="Benjamin Di Giorgio"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        <div>
          <div className="relative hidden h-[50vh] w-[20rem] md:flex lg:w-[25rem]">
            <Image
              className="object-contain object-center"
              fill
              sizes="50vw"
              src={Profile}
              alt="Benjamin Di Giorgio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
