import Heading from "./Heading";

export default function About() {
  return (
    <section id="about" className="bg-[#f3f3f5]">
      <div className="container py-24 mx-auto px-3">
        <Heading tag="About US" head="Discover Our" tail="Story" />
        <p className="text-center mb-12 max-w-screen-lg mx-auto">
          Authorized customers do not need to visit the store to pick up and
          return the products they need. They simply browse through their
          personal computer or mobile phone to visit stores and evaluate product
          descriptions and screen images to select products. Furthermore, store
          owners do not need to organize or display their inventory products.
          They simply enter product descriptions and prices and upload their
          photos.
        </p>
        {/* <iframe
          className="w-full aspect-video max-w-screen-md mx-auto mb-10 rounded-xl"
          width=""
          height=""
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
    </section>
  );
}
