import React from "react";

const Hero = () => {
  return (
    <div className="relative m-4 flex flex-col sm:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-emerald-600 to-green-500 min-h-[450px] rounded-2xl shadow-xl">
      
      {/* Overlay gradient (mobile only) */}
      <div className="absolute inset-0 sm:hidden bg-black/50 z-10"></div>

      {/* Left Content */}
      <div className="relative z-20 w-full sm:w-1/2 px-8 py-2  sm:py-0 text-white flex flex-col justify-center">
        <div className="flex items-center mt-20 md:mt-0 gap-2 mb-3">
          
          <p className="uppercase tracking-widest text-sm font-semibold opacity-90">
            Our Bestsellers
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Latest <span className="text-lime-300">Arrivals</span>
        </h1>

        <p className="text-sm sm:text-base text-white/90 mb-6 max-w-md">
          Discover our newest collection of high-quality products — designed to
          match your lifestyle.
        </p>

        <button className="relative w-40 inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-semibold rounded-full shadow-md hover:bg-lime-100 transition-all duration-300">
          Shop Now
          <span className="w-3 h-3 bg-emerald-600 rounded-full mx-2 animate-ping"></span>

        </button>
      </div>

      {/* Right Side - Image */}
      <div className="absolute md:relative w-full sm:w-1/2 h-[400px] sm:h-[450px]">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          src="https://merchy.ma/storage/categories/42622f93d3a71ccb81afc9a287e47374/banner.png"
          alt="Hero banner"
        />
        {/* Subtle gradient overlay on desktop */}
        <div className="absolute inset-0 bg-gradient-to-l from-emerald-900/30 to-transparent hidden sm:block"></div>
      </div>
    </div>
  );
};

export default Hero;
