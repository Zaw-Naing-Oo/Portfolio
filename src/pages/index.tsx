import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from "@/sections/Navbar";
import SocialIcon from '@/components/SocialIcon';
import Email from '@/components/Email';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import { useState } from 'react';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
   <div>
     <Head>
      <title>Zaw Naing Oo</title>
      <link key="favicon" rel="shortcut icon" href="/avatar.png" />
     </Head>
     { showContent && (
      <>
        <Navbar />
        <SocialIcon />
        <Email />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </>
     )}
     <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
     {/* <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} /> */}

   </div>
  )
}
