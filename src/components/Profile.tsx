import { getUser } from "@/lib/auth";
import Image from "next/image";

export const Profile = () => {
  const { name, avatarUrl } = getUser();
  return (
    <div className=" mt-3 flex w-[400px] items-center justify-center gap-3 md:flex md:items-center md:justify-start md:gap-3 md:text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 items-center rounded-full"
      />
      <p className="  md:max-w-[140px] md:text-sm md:leading-snug ">
        {name}
        <a
          href="/api/auth/logout"
          className="  block text-red-400 hover:text-red-300"
        >
          Quero sair
        </a>
      </p>
    </div>
  );
};
