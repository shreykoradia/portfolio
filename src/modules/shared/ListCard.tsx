import React from "react";
import Image, { StaticImageData } from "next/image";

interface ListCardProp {
  title: string;
  description: string;
  avatar: StaticImageData;
  link: string;
}

const ListCard = ({ title, description, avatar, link }: ListCardProp) => {
  return (
    <div className="flex justify-start gap-4 items-start p-6 hover:bg-grey hover:bg-opacity-10 hover:rounded-xl hover:transition hover:delay-300">
      <Image
        src={avatar}
        alt="productImage"
        className="aspect-square h-12 w-12 rounded-full"
        loading="lazy"
      />
      <div>
        <h3 className="text-xl font-medium flex items-center gap-2">
          <span>{title}</span>
          <a href={link} className="text-sm text-blue-400 p-2 hover:underline" target="_blank">
            visit
          </a>
        </h3>
        <p className="text-sm text-grey font-light">{description}</p>
      </div>
    </div>
  );
};

export default ListCard;
