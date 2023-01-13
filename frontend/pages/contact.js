import Image from "next/image";
import React, { useState } from "react";
import ContactImage from "../assets/image/contact_hero.jpg";
import { motion } from "framer-motion";
import { sendContactForm } from "../lib/api";
import { toast } from "react-hot-toast";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initState = { values: initValues };

const ContactPage = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      toast.success("Email sent Successfully", {
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      toast.error(error.message, {
        duration: 2000,
        position: "top",
      });
    }
  };
  return (
    <div className="">
      <div className="relative flex items-center justify-center  h-60 sm:h-80">
        <div className="relative w-full h-full ">
          <Image
            src={ContactImage}
            layout="fill"
            alt="Contact Banner"
            objectFit="cover"
            objectPosition="center"
          />
          {/* <img src={ContactImage} alt=""/> */}
        </div>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-serif font-bold drop-shadow-xl">
          Contact Us
        </h2>
      </div>

      <div className=" container mx-auto px-4">
        <form action="" className=" py-12 px-18 max-w-screen-md mx-auto">
          <h2 className="text-3xl font-serif font-medium pb-4">Get In Touch</h2>
          <div className="form__input flex flex-col ">
            <label className="py-2 font-mono" htmlFor="contact__msg">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              className={`p-2 outline-none border-2  rounded-none font-mono transition-all duration-150 ${
                touched.message && !values.message && "border-red-400"
              }`}
              name="message"
              id="contact__msg"
              cols="30"
              rows="5"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <div className="form__input flex flex-col">
            <label className="py-2 font-mono" htmlFor="contact__name">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              required
              className={`p-2 outline-none border-2  rounded-none font-mono transition-all duration-150 ${
                touched.name && !values.name && "border-red-400"
              }`}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              id="contact__name"
              // cols="30"
              // rows="5"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form__input flex flex-col">
            <label className="py-2 font-mono" htmlFor="contact__email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              required
              className={`p-2 outline-none border-2  rounded-none font-mono transition-all duration-150 ${
                touched.email && !values.email && "border-red-400"
              }`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              id="contact__email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="form__input flex flex-col">
            <label className="py-2 font-mono" htmlFor="contact__sub">
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
              className={`p-2 outline-none border-2  rounded-none font-mono transition-all duration-150 ${
                touched.subject && !values.subject && "border-red-400"
              }`}
              name="subject"
              id="contact__sub"
              placeholder="Enter your Subject"
            />
          </div>

          <button
            className="mt-6 text-lg transition-all duration-150 font-bold text-[#014b85] border-[#014b85] hover:bg-[#014b85] py-3 px-8 hover:text-white outline-none border-2 rounded-none font-mono"
            // type="submit"
            onClick={onSubmit}
            disabled={
              !values.name &&
              !values.email &&
              !values.subject &&
              !values.message &&
              "disabled"
            }
          >
            Submit
          </button>
        </form>
      </div>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.8725679162008!2d78.18583691450412!3d26.147412798910374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c4964532abdd%3A0xe71fa0450b77e0a5!2sITM%20Gwalior!5e1!3m2!1sen!2sin!4v1672589937993!5m2!1sen!2sin"
        width="600"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <iframe
        className="w-full h-60 sm:h-80 md:h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.8725679162008!2d78.18583691450412!3d26.147412798910374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c4964532abdd%3A0xe71fa0450b77e0a5!2sITM%20Gwalior!5e1!3m2!1sen!2sin!4v1672589937993!5m2!1sen!2sin"
        // width="600"
        // height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactPage;
