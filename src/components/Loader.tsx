import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {

  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Zaw Naing Oo</title>
            <g>
              <g id="K" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M21.875,4.592V2.194H4.125v2.398H9.98l-5.494,6.677v3.31h6.384l-0.036,2.32l-6.348,0.019V24h17.75v-2.389h-9.506l4.931-6.687v-3.317H12.65l0.036-2.319l6.348-0.02V4.592H21.875z"
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                // exit={{
                //   scale: 2,
                // }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
                L 11, 27
                L 11, 72
                L 50, 95
                L 89, 73
                L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
