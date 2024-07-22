import React from "react";
import Hero from "@/assets/icons/a-random-sports-bike-and-a-sports-helmet.svg";
import Image from "next/image";

const ListCard = () => {
  return (
    <div className="flex justify-start gap-2 items-center p-6 hover:bg-grey hover:bg-opacity-10 hover:rounded-xl hover:transition hover:delay-300">
      <div className="h-16 w-16 rounded-full bg-white">
        <Image src={Hero} alt="productImage" />
      </div>
      <div>
        <h3 className="text-xl font-medium">Product Title</h3>
        <p className="text-sm text-grey font-light">Product Description</p>
      </div>
    </div>
  );
};

export default ListCard;
