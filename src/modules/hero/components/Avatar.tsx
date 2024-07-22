import Image from "next/image";
import Helmet from "@/assets/icons/a-random-sports-bike-and-a-sports-helmet.svg";

const Avatar = () => {
  return (
    <>
      <div className="w-20 h-20 rounded-full bg-red-100">
        <Image src={Helmet} alt="helmet" />
      </div>
    </>
  );
};

export default Avatar;
