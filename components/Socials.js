//links
import Link from "next/link";
//icons
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-4xl">
      <Link
        target="_blank"
        href={"https://www.facebook.com/nhattien2106"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/nhattien96/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/the-nhat-tien-truong-91ba16226/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
