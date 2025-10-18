import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col sm:flex-row border bg-green-500 border-gray-400 min-h-[400px]">
      
      {/* Hero left side - Backdrop full size */}
      <div className="absolute sm:relative inset-0 sm:inset-auto w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 z-10">
        {/* Backdrop filter qui couvre tout l'écran sur mobile */}
        
        
        {/* Contenu */}
        <div className="relative z-20 text-white text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="w-8 md:w-11 h-[4px] bg-white"></p>
            <p className="font-bold text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="font-bold text-3xl sm:py-3 lg:text-5xl leading-relaxed mt-4">Latest Arrivals</h1>
          <div className="flex items-center gap-2 justify-center sm:justify-start mt-4 bg-qh py-2">
            <p className="font-bold text-sm md:text-base">SHOP Now</p>
            <p className="w-8 md:w-11 h-[4px] bg-white"></p>
          </div>
        </div>
      </div>
      
      {/* Hero right side */}
      <img 
        className="w-full sm:w-1/2 object-cover h-[400px] sm:h-auto" 
        src='https://merchy.ma/storage/categories/42622f93d3a71ccb81afc9a287e47374/banner.png' 
        alt="" 
      />
      <div className="absolute inset-0 bg-emerald-600/50 sm:bg-transparent "></div>
    </div>
  )
}

export default Hero