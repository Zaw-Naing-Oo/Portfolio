import React from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Zaw Naing Oo
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        {/* I craft things for the web. */}
        Frontend Developer
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        {/* I&apos;m a software engineer with expertise in creating top-notch
        digital experiences. My current focus is on developing products that are
        accessible and centered around user needs, as part of the team at&nbsp;
        <Link href="https://rapidops.com" target="_blank" className="link">
          Rapidops.
        </Link> */}
        A Frontend focused Web Developer building the frontend Websites and Web Applications that leads to the success of the overall product
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my projects"
          link="https://github.com/Zaw-Naing-Oo"
        />
      </motion.div>
    </div>
  )
}

export default Hero