"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useMemo, useCallback, useState } from "react";

const Hero = () => {
  const [showVideoDesktop, setShowVideoDesktop] = useState(false);
  const [showVideoMobile, setShowVideoMobile] = useState(false);

  const benefits = useMemo(
    () => [
      "Queima gordura sem cafeína",
      "Pele firme durante o emagrecimento",
      "Inibe o apetite e aumenta o foco",
    ],
    []
  );

  const scrollToPricing = useCallback(() => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary min-h-screen">
      {/* Círculos decorativos */}
      <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-8 py-20 lg:py-40">

        {/* COLUNA ESQUERDA */}
        <div className="flex flex-col justify-center text-primary-foreground space-y-6 animate-fade-in text-center lg:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light font-jost tracking-widest">
              LEANOVA
            </h2>
            <p className="text-5xl sm:text-6xl font-dm-sans font-bold -mt-2">
              21 ERVAS
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight break-words max-w-[22ch] mx-auto lg:mx-0">
            O NOVO <span className="text-accent">CHÁ NATURAL</span> PARA VOCÊ{" "}
            <span className="text-accent">DERRETER GORDURA</span> E NÃO FICAR FLÁCIDA!
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium mt-8 max-w-md mx-auto lg:mx-0">
            O único chá que seca, firma e controla a fome — com sabor delicioso e
            zero cafeína.
          </p>

          {/* VÍDEO MOBILE — COM PLACEHOLDER */}
          <div className="block lg:hidden mt-6">
            {!showVideoMobile ? (
              <div
                className="relative w-full max-w-md mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => setShowVideoMobile(true)}
              >
                <img
                  src="https://img.youtube.com/vi/cMlFiSfL_PQ/maxresdefault.jpg"
                  alt="Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-primary"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 4.5v7l6-3.5-6-3.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full max-w-md mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/cMlFiSfL_PQ?autoplay=1&controls=1&playsinline=1"
                  title="Leanova video mobile"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* Lista */}
          <div className="space-y-3 mt-6 w-full max-w-md mx-auto lg:mx-0">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-left">
                <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-base sm:text-lg font-semibold">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button
  variant="accent"
              size="lg"
              className="
    w-full sm:w-auto px-8 py-5 sm:px-12 sm:py-6 
    rounded-full 
    text-sm sm:text-base md:text-lg 
    font-extrabold 
    tracking-tight 
    shadow-[0_6px_0_#B5CC00]
    text-white               /* fonte branca */
    bg-[#CCFF00]             /* mesma cor de fundo */
    transition-transform 
    hover:scale-105          /* mantém só o efeito antigo */
  "
              onClick={scrollToPricing}
            >
              QUERO GARANTIR MEU CHÁ NATURAL!
            </Button>



          </div>
        </div>

        {/* VÍDEO DESKTOP — COM PLACEHOLDER */}
        <div className="hidden lg:flex justify-center animate-fade-in">
          {!showVideoDesktop ? (
            <div
              className="relative w-[900px] h-[506px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setShowVideoDesktop(true)}
            >
              <img
                src="https://img.youtube.com/vi/cMlFiSfL_PQ/maxresdefault.jpg"
                alt="Thumbnail"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-primary"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 4.5v7l6-3.5-6-3.5z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-[900px] h-[506px] rounded-3xl overflow-hidden shadow-2xl bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/cMlFiSfL_PQ?autoplay=1&controls=1&playsinline=1"
                title="Leanova video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;
