import React from 'react'
import Link from 'next/link';
import {
    FiGithub,
    FiInstagram,
    FiYoutube,
    FiLinkedin,
    FiTwitter,
  } from "react-icons/fi";


const SocialIcon = () => {

    const socialLinks = [
        { name: "Github", icon: <FiGithub />, link: "https://github.com/Zaw-Naing-Oo" },
        {
          name: "LinkedIn",
          icon: <FiLinkedin />,
          link: "https://www.linkedin.com/in/zaw-naing-oo-660150206/",
        },
      ];

  return (
    <div
    className="social-icons"
  >
    <ul className="social-icons-list">
      {socialLinks.map(({ name, icon, link }) => (
        <li key={name} title={name} className="social-icons-list-item">
          <Link
            href={link}
            className="social-icons-list-item-link"
            target="_blank"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default SocialIcon