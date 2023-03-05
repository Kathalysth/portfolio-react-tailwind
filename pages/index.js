import Head from "next/head";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { projects } from "../projects";
import { motion, useScroll } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import { ScrollToTop } from "../components/Scroll";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className={`bg-white ${darkMode ? "dark" : ""}`}>
        <Head>
          <title>Chris Ehigimetor</title>
          <meta
            name="portfolio"
            content="Chris Ehigimetor Portfolio created with nextjs"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero setDark={setDarkMode} dark={darkMode} />
        <main className="px-6 dark:bg-gray-900 md:px-10 lg:px-30">
          <About />
          <Skills dark={darkMode} />

          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white font-bold ">
                Projects
              </h3>
            </div>
            <div className="flex flex-col gap-4 justify-center py-10">
              {projects.map((project, index) => (
                <Projects
                  key={`${project.title}-${index}`}
                  project={project}
                  number={index + 1}
                />
              ))}
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
