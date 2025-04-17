import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <div>
      <div className="w-full text-center border-t pt-8 text-2xl ">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10  flex flex-col items-center justify-center md:flex-row gap-10 mb-28">
        <img className="w-[440px] h-auto " src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6 w-[800px]">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="text-xl font-semibold">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className=" text-xl ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row justify-center  mb-20 mt-10  ">
      <div className="flex flex-col border py-10 px-8">
          <p className="py-4 font-semibold">Quality Assurance:</p>
          <p className="text-sm pb-10">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="flex flex-col border py-10 px-8">
          <p className="py-4 font-semibold">Convenience:</p>
          <p className="text-sm pb-10">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="flex flex-col border py-10 px-8">
          <p className="py-4 font-semibold">Quality Assurance:</p>
          <p className="text-sm pb-10">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
        
      </div>

      <div className="">
        <Subscribe />
      </div>
    </div>
  );
};

export default About;
