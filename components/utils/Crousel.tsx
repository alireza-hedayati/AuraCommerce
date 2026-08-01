"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { missionImage as crouselImage }  from "./missionImages";
import { useEffect,useState } from "react";


export default function Crousel() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);


 return (
  <div>
    <div
      className="overflow-hidden rounded-3xl"
      ref={emblaRef}
    >
      <div className="flex">
        {crouselImage.map((image, index) => (
          <div
            key={index}
            className="relative min-w-full h-40 md:h-50 lg:h-60"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    <div className="pt-4 text-center">
      <h3 className="text-lg lg:text-xl font-semibold">
        {crouselImage[selectedIndex].alt}
      </h3>
    </div>
  </div>
);
}