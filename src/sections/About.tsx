import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"


const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            My name is Zaw Naing Oo, and I am a backend-focused web developer.
            I began my web development journey in 2021, and over time, I&apos;ve gained experience in both frontend and full-stack development. 
            Most recently, I worked as a full-stack developer for 3 months, where I collaborated with teams to build and improve web applications.
          </p>
          <p className="about-grid-info-text">
          Currently, I am refining my backend skills, focusing on technologies like Java, Spring Boot, and database management to build scalable and efficient server-side solutions.
          </p>
          <p className="about-grid-info-text">
          One of my recent projects,&nbsp; 
          <Link className="link" target="_blank" href="https://github.com/Zaw-Naing-Oo/hms-frontend">
              Hospital Management System
          </Link>,
          which includes features like appointment booking, doctor profiles, user dashboards, and advanced search/filter options. This project helped me deepen my backend development skills, including API integration and data management.
          </p>
          <p className="about-grid-info-text">
          Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Express</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">Spring Boot</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Git</li>
            <li className="about-grid-info-list-item">Tailwind</li>
            <li className="about-grid-info-list-item">Mui</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>

          </ul>
        </div>
        <div className="about-grid-photo">
          {/* <div className="overlay"></div> */}
          {/* <div className="overlay-border"></div> */}
          <div className="about-grid-photo-container">
            <Image src="/profile.svg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About