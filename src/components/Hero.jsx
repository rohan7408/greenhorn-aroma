import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://ecs.com.np/fckimage/article/images/2017/IMAG0174%20copy.jpg"
        alt=""
      />
      <div className="bg-black/30 absolute top-0 lrft-0 w-full h-screen " />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="font-serif text-3xl md:text-5xl drop-shadow-2xl  ">
            Greenhorn Aroma
          </p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">
            Pure Essential Oils
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            "Nurture your well-being naturally with our pure essential oils,
            promoting balance, vitality, and harmony in your life."
          </p>
          <button className="bg-white  text-black ">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
