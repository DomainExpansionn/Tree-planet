import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plantHero.json")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

 
  if (!plants.length) return null;

  return (
    <section className="w-full max-h-[50vh] h-[50vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {plants.map((plant) => (
          <SwiperSlide key={plant.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${plant.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl
                                p-4 sm:p-6 md:p-10
                                max-w-xs sm:max-w-md md:max-w-2xl
                                text-center border border-white/20">
                  <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl
                                 font-bold mb-2 sm:mb-4">
                    {plant.title}
                  </h1>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg">
                    {plant.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
