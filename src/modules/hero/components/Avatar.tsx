import Image from "next/image";
import AvatarImg from "../../../../public/images/shrey.jpg";

const Avatar = () => {
  return (
    <>
      <div className="w-20 h-20 rounded-full">
        <Image src={AvatarImg} alt="helmet" className="aspect-square rounded-full" loading="lazy" />
      </div>
    </>
  );
};

export default Avatar;
