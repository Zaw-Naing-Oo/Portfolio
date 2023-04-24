import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";


const Experience = () => {
    
    const [ selected, setSelected] = useState(0);

    useEffect(() => {
        const transformSelected = () => {
          const underline = document.querySelector<HTMLElement>(".underline");
          underline?.style.setProperty('top',`${  selected * 4.5}rem`);
        };
        transformSelected();
      }, [selected]);

    const expereinces = [
        {
            name: "Myanmar High Society",
            place: "Myanmar High Society",
            role: "Frontend Developer Internship",
            url: "https://www.linkedin.com/company/myanmar-high-society/",
            start: "November 2022",
            end: "January 2023",
            shortDescription: [
            "As a frontend developer intern, I had the opportunity to work on several projects using React, a popular JavaScript library for building user interfaces. Through this experience, I gained expertise in React components, state management, and routing, as well as best practices for web development, such as code organization and version control.",
            "As a frontend developer intern with React, I was responsible for maintaining and improving several existing web applications. This involved reviewing code, identifying bugs, debugging errors, and optimizing performance.",
            "Throughout the internship, I collaborated closely with other team members, participated in code reviews, and contributed to discussions on user experience design. This experience allowed me to further develop my technical skills in frontend development while also gaining valuable soft skills such as communication and teamwork.",
            ],
        },
        {
            name: "Computer Science Student",
            place: "University Of Computer Studies Thaton(UCSTT)",
            role: "Student",
            url: "http://ucstt.edu.mm/",
            start: "June 2016",
            end: "June 2024",
            shortDescription: [
            "As a computer science student, I have gained a solid understanding of programming fundamentals, data structures, algorithms and software engineering principles.",
            "During my second year as a computer science student, I had the opportunity to work on my first team project - the Hotel Booking System. Together with my peers, we used Java and MySQL to develop a web-based application that allowed users to search for available hotels and book reservations.",
            "Overall as a computer science student, I have learned how to approach problems with a logical and systematic mindset, and how to work effectively both independently and as part of a team.",
            ],
        },
        {
          name: "Special Web Design",
          place: "MMS IT",
          role: "Student",
          url: "https://mms-it.com/",
          start: "October 2022",
          end: "Current",
          shortDescription: [
          "I recently attended an online class called 'Special Web Design' where I learned advanced web design concepts and gained valuable skills in HTML, CSS, JavaScript, Bootstrap, and React.",
          "Through this class, I also gained knowledge in user interface (UI) design and how to create effective, visually appealing web pages. The class was taught by industry experts and provided a hands-on learning experience with real-world projects.",
          "Overall, the skills and knowledge I gained from this class have greatly contributed to my growth as a frontend developer and expanded my capabilities in web design.",
          ],
        },
        {
            name: "Meta Front-End Developer",
            place: "Meta Front-End Developer Professional Certificate",
            role: "Student",
            url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
            start: "November 2022",
            end: "Current",
            shortDescription: [
            "I currently attended an online course on Coursera called Meta Front-End Developer Professional Certificate. This intensive program covered amazing topics related to front-end web development, including HTML, CSS, JavaScript, React, responsive design, and user experience (UX) design.",
            "I gained practical skills and experience in building web applications, designing effective user interfaces, and writing clean and maintainable code.",
            ],
        },
    ];

  return (
    <motion.div
      className="experience"
      id="experience"
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
        {/* <h2>Where I&apos;ve Worked</h2> */}
        <h2>Education And Experience</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${ index === selected && "exp-slider-item-selected"}`}
                onClick={() => setSelected(index)}
                key={expereince.name} 
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link" target='_blank'>
                  {expereinces[selected].place}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience