import React, { useEffect } from "react";
import useScrollDirection from "~/utils/useScrollDirection";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  type SectionsType = {
    home: HTMLElement | null;
    process: HTMLElement | null;
    about: HTMLElement | null;
  };

  const scrollDirection = useScrollDirection();

  const sections: SectionsType = {
    home: null,
    process: null,
    about: null,
  };

  useEffect(() => {
    if (document.getElementById("process-section")) {
      sections.process = document.getElementById("process-section");
    }
    if (document.getElementById("about-section")) {
      sections.about = document.getElementById("about-section");
    }
    if (document.getElementById("home-section")) {
      sections.home = document.getElementById("home-section");
    }
  }),
    [];
  return (
    <>
      <AnimatePresence>
        {scrollDirection === "up" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={
              "fixed top-0 left-0 z-50 h-auto w-screen bg-primary bg-opacity-80 p-3"
            }
          >
            <ul className="flex flex-row justify-evenly font-josefin text-s-purple-grey bg-blend-difference">
              <li>
                <button
                  onClick={() => {
                    if (sections.home) {
                      sections.home.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (sections.process) {
                      sections.process.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Process
                </button>
              </li>
              <li>
                <button>Uniqueness</button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (sections.about) {
                      sections.about.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button>Contact Us</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
