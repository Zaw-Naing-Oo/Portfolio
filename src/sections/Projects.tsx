import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {

    const projectsData = [
        {
          image: "/travelastia.png",
          projectName: "Travelastia",
          projectLink: "https://travelastia-i87u.onrender.com/tours",
          projectDescription:
            "This is a MERN stack application that users can share their beautiful travel posts and experience. And they can edit and delete their own posts. And they can also give likes and comments to other posts.",
          projectTech: [
            "React",
            "Nodejs",
            "MongoDB",
            "Redux Toolkit",
            "SCSS",
            "react-query",
            "Mui",
            "Lottiefiles",
          ],
          projectExternalLinks: {
            github: "https://github.com/Zaw-Naing-Oo/Travelastia",
            externalLink: "https://travelastia-i87u.onrender.com/tours",
          },
        },
        {
          image: "/adminDashboard.png",
          projectName: "Admin Dashboard",
          projectLink: "https://admin-dashboard-a9y8.onrender.com/",
          projectDescription:
            "React Admin Dashboard.This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!",
          projectTech: [
            "React",
            "Syncfusion",
            "tailwindcss",
          ],
          projectExternalLinks: {
            github: "https://github.com/Zaw-Naing-Oo/Admin---Dashboard",
            externalLink: "https://admin-dashboard-a9y8.onrender.com/",
          },
        },
        {
          image: "/receipe.png",
          projectName: "Recipe App",
          projectLink: "https://recipe-igs2.onrender.com/",
          projectDescription:
            "I developed a recipe app that showcases popular dishes from four different countries: American, Japanese, Italian, and Thai. This project involved designing and implementing a user-friendly interface, integrating with external APIs to gather recipe information.",
          projectTech: [
            "React",
            "styled-components",
            "spoonacular-api",
            "framer-motion",
            "react-splide",
          ],
          projectExternalLinks: {
            github: "https://github.com/Zaw-Naing-Oo/Recipe-App",
            externalLink: "https://recipe-igs2.onrender.com/",
          },
        },
        {
          image: "/tenzies.png",
          projectName: "Tenzies-Game",
          projectLink: "https://tenziess.netlify.app/",
          projectDescription:
            "I built a Tenzies game using React.Through this project, I gained experience with React components, and functional programming concepts. I learned from Scrimba about game logic and design, including how to implement randomized dice rolls and score calculation.",
          projectTech: [
            "React",
            "react-hooks",
            "react-confetti",
          ],
          projectExternalLinks: {
            github: "https://github.com/Zaw-Naing-Oo/Tenzies-Game",
            externalLink: "https://tenziess.netlify.app/",
          },
        },
      ];

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  {/* <p className="project-info-overline">Featured Project</p> */}
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target='_blank'
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target='_blank'
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  )
}

export default Projects