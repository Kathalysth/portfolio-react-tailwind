import Head from "next/head";
import dynamic from "next/dynamic";
import { useState, useEffect, Suspense } from "react";
import { motion, useScroll } from "framer-motion";
import { ScrollToTop } from "../components/Scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = dynamic(() => import("../components/Hero"), {
  suspense: true,
});

const Skills = dynamic(() => import("../components/Skills"), {
  suspense: true,
});

const About = dynamic(() => import("../components/About"), {
  suspense: true,
});

const Contact = dynamic(() => import("../components/Contact"), {
  suspense: true,
});

const Footer = dynamic(() => import("../components/Footer/Footer"), {
  suspense: true,
});

const Navbar = dynamic(() => import("../components/Navbar"), {
  suspense: true,
});

const Project = dynamic(() => import("../components/Project"), {
  suspense: true,
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init();
  }, []);

  return <div>404 - not found </div>;

  // return (
  //   <Suspense
  //     fallback={
  //       <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
  //         <span className="animate-pulse bg-teal-500 p-16" />
  //         <p className="text-center">Please wait...</p>
  //       </div>
  //     }
  //   >
  //     <motion.div
  //       className="progress-bar"
  //       style={{ scaleX: scrollYProgress }}
  //     />
  //     <div className={`bg-white ${darkMode ? "dark" : ""} isolate`}>
  //       <Head>
  //         <title>Chris Ehigimetor</title>
  //         <meta
  //           name="portfolio"
  //           content="Chris Ehigimetor Portfolio created with nextjs"
  //         />
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head>

  //       <div className="absolute hidden inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
  //         <svg
  //           className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
  //           viewBox="0 0 1155 678"
  //         >
  //           <path
  //             fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
  //             fillOpacity=".3"
  //             d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
  //           />
  //           <defs>
  //             <linearGradient
  //               id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
  //               x1="1155.49"
  //               x2="-78.208"
  //               y1=".177"
  //               y2="474.645"
  //               gradientUnits="userSpaceOnUse"
  //             >
  //               <stop stopColor="#14b8a6" />
  //               <stop offset={1} stopColor="#064e3b" />
  //             </linearGradient>
  //           </defs>
  //         </svg>
  //       </div>
  //       <Navbar setDark={setDarkMode} dark={darkMode} />
  //       <Hero />
  //       <main className="dark:bg-gray-900 ">
  //         <About />
  //         <Skills dark={darkMode} />
  //         <Project />
  //         <Contact />
  //       </main>
  //       <Footer />
  //       <ScrollToTop />
  //     </div>
  //   </Suspense>
  // );
}
