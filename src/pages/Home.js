import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dibyanjaya",
    "url": "https://www.Dibyanjaya.com",
    "sameAs": [
      "https://www.linkedin.com/in/dibyanjaya/",
      "https://github.com/DIX2580",
    ],
   
  };

  return (
    <>
      <Helmet>
        <title>Home - Dibyanjaya's Portfolio</title>
        <meta name="description" content="I am a dedicated frontend developer and student proficient in HTML, CSS, JavaScript, Tailwind, React, Next.js, and backend technologies like MongoDB and SQL. Experienced in C++ for algorithmic problem-solving. Eager to contribute dynamic web solutions while continuing to expand my skills in web development.." />
        <meta name="keywords" content="home, portfolio, react, Dibyanjaya, web development" />
        <meta property="og:title" content="Home - Dibyanjaya's Portfolio" />
        <meta property="og:description" content="I am a dedicated frontend developer and student proficient in HTML, CSS, JavaScript, Tailwind, React, Next.js, and backend technologies like MongoDB and SQL. Experienced in C++ for algorithmic problem-solving. Eager to contribute dynamic web solutions while continuing to expand my skills in web development.." />
        <meta property="og:image" content="%PUBLIC_URL%/og-home.png" />
        <meta property="og:url" content="https://www.dibyanjaya.com/home" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Dibyanjaya's Portfolio" />
        <meta name="twitter:description" content="I am a dedicated frontend developer and student proficient in HTML, CSS, JavaScript, Tailwind, React, Next.js, and backend technologies like MongoDB and SQL. Experienced in C++ for algorithmic problem-solving. Eager to contribute dynamic web solutions while continuing to expand my skills in web development.." />
        <meta name="twitter:image" content="%PUBLIC_URL%/twitter-home.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
