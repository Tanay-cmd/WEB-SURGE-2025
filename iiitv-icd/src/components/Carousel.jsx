"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarouselButtons, PrevButton, NextButton } from '@/components/ui/carousel-button';

const Carousel = ({ images, options = { loop: true }, autoplay = true, autoplayDelay = 2000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: options.loop,
    align: 'center',
    containScroll: false,
    slidesToScroll: 1,
    dragFree: true,
  });

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCarouselButtons(emblaApi);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || !emblaApi) return;

    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, autoplayDelay);

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, autoplay, autoplayDelay]);

  return (
    <div className="relative w-full overflow-hidden p-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div 
              className="flex-[0_0_75%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 relative h-[350px]" 
              key={index}
            >
              <div className="h-full p-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform hover:scale-[1.02]">
                  <div className="relative h-full">
                    <Image 
                      src={image}
                      alt={`Card ${index + 1}`}
                      width={400}
                      height={350}
                      className="object-cover w-full h-full"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-white font-semibold text-lg"></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="pointer-events-auto z-10 ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors disabled:opacity-50 shadow-md"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="pointer-events-auto z-10 mr-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors disabled:opacity-50 shadow-md"
        />
      </div>
    </div>
  );
};

export default Carousel; 