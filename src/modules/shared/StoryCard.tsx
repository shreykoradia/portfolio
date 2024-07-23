import React from "react";

interface StoryCardProp {
  story: string;
}

const StoryCard = ({ story }: StoryCardProp) => {
  return <p className="text-grey text-lg">{story}</p>;
};

export default StoryCard;
