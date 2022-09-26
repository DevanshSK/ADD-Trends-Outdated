import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#f3f3f5] px-[5%]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-full py-[80px] gap-6 lg:gap-20 lg:py-24 px-[12px]  m-auto">
        <div className="hero-left flex flex-col items-start justify-center lg:ml-2">
          <h1 className=" text-[40px]  leading-normal tracking-wide sm:text-6xl lg:text-7xl lg:leading-[90px]">
            Welcome To <span className="text-[#ff8243]">ADD Trends</span>
          </h1>
          <p className="my-4 lg:mr-4">
            ADD Trends is an online shopping system that provides solutions to
            minimize and optimize these costs.
          </p>
          <Link href="/">
            <a className="border border-[#ff8243] bg-[#ff8243] text-white px-6 py-3 ml-0 rounded-full font-semibold hover:border-[#0d0d25] hover:bg-[#0d0d25] transition-colors mt-2 duration-300 shadow-xl">
              Check our Products
            </a>
          </Link>
        </div>
        <div className="hero-right">
          <div className="banner-img-wp aspect-[5/4] w-full mt-6">
            <div className="banner-img w-full h-full bg-[url('../assets/gif/hero-image.gif')] bg-cover bg-center shadow-xl"></div>
          </div>

          <div className="right-text mt-6 text-center max-w-md mx-auto">
            <h5 className="text-left text-xl mb-2 ">Fashion</h5>
            <p className="font-normal text-left text-base">
              A place where you can find anything you can ask for in fashion
            </p>
          </div>
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M50.5,-34.1C65.8,-21,79,0,74.4,15.7C69.8,31.4,47.5,41.8,26.5,50C5.5,58.1,-14.1,64,-33.2,58.7C-52.4,53.5,-71.1,37,-75.9,17C-80.7,-2.9,-71.5,-26.3,-56.6,-39.3C-41.6,-52.3,-20.8,-54.9,-1.6,-53.6C17.6,-52.3,35.1,-47.1,50.5,-34.1Z"
              transform="translate(100 100)"
            />
          </svg> */}
        </div>
      </div>
    </section>
  );
}
