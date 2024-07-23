import React from "react";
import Hero from "../hero";
import Projects from "../projects";
import Socials from "../socials";
import Skills from "../skills";
import Experience from "../experience";
import Footer from "../footer";

const Landing = () => {
  return (
    <section className="flex flex-col justify-start items-start flex-nowrap gap-0 min-h-screen pl-[3.75rem] pb-[7.5rem] maxMd:p-4">
      <div className="max-w-[37.5rem] w-full pt-[5rem] flex flex-col gap-16">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Socials />
        <Footer />
      </div>
    </section>
  );
};

export default Landing;
