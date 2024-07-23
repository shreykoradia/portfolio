import React from "react";
import SocialCard from "../shared/ListCard";
import { socials } from "../shared/constants";

const Socials = () => {
  return (
    <section>
      <h3 className="text-lg text-grey font-medium pb-4">Media & Blogs:</h3>
      {socials.map((social, index) => (
        <SocialCard
          avatar={social?.avatar}
          description={social?.description}
          title={social.title}
          link={social.link}
          key={index}
        />
      ))}
    </section>
  );
};

export default Socials;
