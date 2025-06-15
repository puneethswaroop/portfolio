"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageLightbox({
  images,
}: {
  images: { url: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] overflow-hidden cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index < 4}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <Image
            src={images[currentImage].url}
            alt={`Full Image ${currentImage + 1}`}
            width={1000}
            height={1000}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
