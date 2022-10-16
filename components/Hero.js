import Link from "next/link";
import Image from "next/image";
import leafImg from "../assets/image/leaf.png";
import cartImg from "../assets/gif/giphy.gif";
import { useStateContext } from "../lib/context";

export default function Hero() {
  // Import Parallax effect
  const { parallaxHandler } = useStateContext();

  return (
    <section
      onMouseMove={(e) => {
        parallaxHandler(e);
      }}
      className="min-h-screen bg-[#f3f3f5] px-[5%] relative overflow-hidden"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-full py-[80px] gap-6 lg:gap-20 lg:py-24 px-[12px]  m-auto">
        <div className="hero-left flex flex-col items-start justify-center lg:ml-2 z-50">
          <h1 className=" text-[40px]  leading-normal tracking-wide sm:text-6xl lg:text-7xl lg:leading-[90px]">
            Welcome To{" "}
            <span className="text-[#ff8243] hero-text-banner">ADD Trends</span>
          </h1>
          <p className="my-4 lg:mr-4">
            ADD Trends is an online shopping system that provides solutions to
            minimize and optimize these costs.
          </p>
          <Link href="#about">
            <a className="border border-[#ff8243] bg-[#ff8243] text-white px-6 py-3 ml-0 rounded-full font-semibold hover:border-[#0d0d25] hover:bg-[#0d0d25] transition-colors mt-2 duration-300 shadow-xl">
              Check our Products
            </a>
          </Link>
        </div>
        <div className="hero-right z-50">
          <div className="banner-img-wp aspect-[5/4] lg:aspect-[16/3]] w-full mt-6">
            <div className="banner-img w-full h-full bg-[url('../assets/gif/hero-image.gif')] bg-cover bg-center shadow-xl"></div>
          </div>

          <div className="right-text mt-6 text-center max-w-md mx-auto">
            <h5 className="text-left text-xl mb-2 ">Fashion</h5>
            <p className="font-normal text-left text-base">
              A place where you can find anything you can ask for in fashion
            </p>
          </div>
        </div>
        <span
          className="absolute -right-32 -top-36 blur-sm parallax-img image-1 pointer-events-none hidden lg:block"
          data-speed="3"
        >
          <Image src={cartImg} alt="" />
        </span>
        <span
          className="absolute -left-40 -bottom-14 z-0 blur-sm parallax-img pointer-events-none hidden lg:block"
          data-speed="2"
        >
          <Image src={leafImg} alt="" />
        </span>
      </div>
    </section>
  );
}
