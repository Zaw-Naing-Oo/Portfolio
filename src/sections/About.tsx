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
            My name is Zaw Naing Oo, and I am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2020 when I created my first project called Travelling, a
            blog app built using Laravel and Bootstrap.
          </p>
          <p className="about-grid-info-text">
           I recently completed an internship as a React developer,
           where I gained valuable experience working on real-world projects.
           During my internship, I had the opportunity to work with a talented team and contribute 
           to the development of several applications. 
          </p>
          <p className="about-grid-info-text">
          I recently completed a MERN project called  <Link className="link" target="_blank" href="https://frontendvita.com">
              Travelastia&nbsp;
            </Link>
          a platform that allows users to share their travel experiences. 
          This project helped me to deepen my understanding of the MERN stack and build my skills in areas such as database design, API integration, and user authentication.
    
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Nodejs</li>
            <li className="about-grid-info-list-item">Laravel</li>
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