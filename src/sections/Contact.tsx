import React from 'react'
import Button from '@/components/Button'
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
      I am currently seeking a position as a backend developer, and 
      I am excited to explore new opportunities in this field.
      If you would like to get in touch with me, please feel free to reach out via email or LinkedIn. 
      I look forward to connecting with you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:zawnaingoo002345@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  )
}

export default Contact