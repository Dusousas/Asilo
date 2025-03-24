import React from 'react';

export default function Gallery() {
  const images = [
    { src: "galeria/g1.webp", alt: "Imagem da residência 1" },
    { src: "galeria/g2.webp", alt: "Imagem da residência 2" },
    { src: "galeria/g3.webp", alt: "Imagem da residência 3" },
    { src: "galeria/g4.webp", alt: "Imagem da residência 4" },
    { src: "galeria/g5.webp", alt: "Imagem da residência 5" },
    { src: "galeria/g6.webp", alt: "Imagem da residência 6" }
  ];

  return (
    <section className="py-10 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="font-bold text-lg md:text-xl uppercase tracking-wider text-center">Galeria</h2>
        <h1 className="font-bold text-2xl md:text-3xl mt-2 text-center max-w-full md:max-w-2xl lg:max-w-3xl mx-auto">
          Nossos momentos mais especiais com aqueles que cuidamos
        </h1>
        <p className="text-center mt-4 max-w-full md:max-w-2xl lg:max-w-3xl mx-auto text-sm md:text-base">
          Conheça um pouco do nosso espaço e do ambiente acolhedor que preparamos para o conforto dos nossos residentes
        </p>
        
        <div className="mt-8 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}