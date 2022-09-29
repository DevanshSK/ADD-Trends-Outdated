import Image from "next/image";
import titleImage from "../assets/image/title-shape.svg";

export default function Heading({ tag, head, tail }) {
  return (
    <div className="text-center flex flex-col items-center justify-content-center ">
      <p className="inline-block uppercase py-2 px-5 bg-[#f3f3f5] rounded-3xl text-[#ff8243] shadow-[9px_9px_12px_#e4e4e4,_-9px_-9px_12px_#ffffff] text-base mb-4 font-medium">
        {tag}
      </p>
      <h2 className="text-[38px] leading-[3rem] capitalize mb-4 text-[#0d0d25] font-black">
        {head}
        <br />
        {tail}
      </h2>
      <span className="mb-6">
        <Image src={titleImage} alt="" />
      </span>
    </div>
  );
}
