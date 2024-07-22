import React from "react";
import Avatar from "./components/Avatar";
import HeroIntro from "./components/HeroIntro";

const Hero = () => {
  return (
    <section className="flex flex-col items-start gap-10">
      <Avatar />
      <HeroIntro />
    </section>
  );
};

export default Hero;
