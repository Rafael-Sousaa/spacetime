import Image from "next/image";
import nlwLogo from "../assets/spacetime-logo.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" mt-6 flex w-[400px] flex-col items-center justify-center gap-3 space-y-5 text-center md:w-full md:max-w-[420px] md:items-start md:justify-start">
      <Image src={nlwLogo} alt="Spacetime" />

      <div className=" flex max-w-[200px] flex-col justify-start space-y-1 text-justify md:flex md:max-w-max md:flex-col md:justify-start">
        <h1 className=" w-[200px] text-xl font-bold leading-tight md:w-full md:text-5xl">
          Sua cápsula do tempo
        </h1>
        <p className=" flex justify-center text-center  leading-relaxed md:text-start md:text-lg ">
          Colecione momentos marcantes da sua jornada e compartilhe com o mundo!
        </p>
      </div>

      <Link
        className="font-alt inline-block rounded-full  bg-green-500 px-5 py-3 text-sm leading-none text-black hover:bg-green-700"
        href="memories/new"
      >
        Cadastrar lembrança
      </Link>
    </div>
  );
};

export default Hero;
