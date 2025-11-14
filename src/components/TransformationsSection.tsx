"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransformationsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<number | null>(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollStart: 0,
  });

  const baseImages = useMemo(
    () => [
      "/images/testimonials/transf1.jpg",
      "/images/testimonials/transf2.jpg",
      "/images/testimonials/transf3.jpg",
      "/images/testimonials/transf4.jpg",
      "/images/testimonials/transf5.jpg",
      "/images/testimonials/transf6.jpg",
      "/images/testimonials/transf7.jpg",
    ],
    []
  );

  const images = useMemo(
    () => [...baseImages, ...baseImages, ...baseImages],
    [baseImages]
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = container.scrollWidth / 3;
      container.style.scrollBehavior = "smooth";
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused && !dragState.current.isDragging) {
        container.scrollLeft += 1;
      }
      autoScrollRef.current = requestAnimationFrame(scroll);
    };

    autoScrollRef.current = requestAnimationFrame(scroll);

    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const checkLoop = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollLeft = container.scrollWidth / 3;
      } else if (container.scrollLeft <= 10) {
        container.scrollLeft = container.scrollWidth / 3;
      }
    };

    container.addEventListener("scroll", checkLoop);
    return () => container.removeEventListener("scroll", checkLoop);
  }, []);

  const scrollByCard = useCallback((dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 320;
    const gap = 24;
    const scrollAmount = dir === "left" ? -(cardWidth + gap) : (cardWidth + gap);
    setIsPaused(true);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(() => setIsPaused(false), 2000);
  }, []);

  const startDrag = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    dragState.current.isDragging = true;
    setIsPaused(true);
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    dragState.current.startX = pageX;
    dragState.current.scrollStart = scrollRef.current?.scrollLeft || 0;
  }, []);

  const stopDrag = useCallback(() => {
    dragState.current.isDragging = false;
    setTimeout(() => setIsPaused(false), 2000);
  }, []);

  const onDrag = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!dragState.current.isDragging || !scrollRef.current) return;
    e.preventDefault();
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = (pageX - dragState.current.startX) * 1.5;
    scrollRef.current.scrollLeft = dragState.current.scrollStart - walk;
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByCard("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByCard("right");
    }
  }, [scrollByCard]);

  // ✅ Agora apontando para a seção correta (#pricing)
  const scrollToOffer = useCallback(() => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="bg-[#E91E63] py-24 relative overflow-hidden">
      <div className="mx-auto px-4 text-center text-white max-w-[1500px]">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Veja como pessoas comuns assim como você estão amando esse novo chá natural:
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Esses são relatos reais de clientes nossos que, assim como você,
          testaram nosso novo Chá Natural e estão amando os efeitos dele!
        </p>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 md:w-48 bg-gradient-to-r from-[#E91E63] via-[#E91E63]/60 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 md:w-48 bg-gradient-to-l from-[#E91E63] via-[#E91E63]/60 to-transparent z-10" />

          <button
            onClick={() => scrollByCard("left")}
            aria-label="Ver imagem anterior"
            className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#C5FF00] text-black rounded-full w-12 h-12 hover:scale-110 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onMouseLeave={() => {
              stopDrag();
              setIsPaused(false);
            }}
            onTouchStart={startDrag}
            onTouchMove={onDrag}
            onTouchEnd={stopDrag}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            role="region"
            aria-label="Galeria de transformações"
            tabIndex={0}
            className="flex gap-6 overflow-x-scroll overflow-y-hidden cursor-grab active:cursor-grabbing focus:outline-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {images.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] aspect-[9/16] rounded-[18px] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.25)] bg-[#E91E63] transition-transform duration-200 hover:scale-[1.02]"
              >
                <img
                  src={src}
                  alt={`Transformação ${(i % baseImages.length) + 1}`}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollByCard("right")}
            aria-label="Ver próxima imagem"
            className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#C5FF00] text-black rounded-full w-12 h-12 hover:scale-110 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-16 px-4">
        <Button
  variant="accent"
  size="lg"
  className="
    w-full sm:w-auto 
    max-w-[90%] sm:max-w-none 
    text-lg 
    py-11 sm:py-6 
    px-10 sm:px-12 
    mt-4 
    text-wrap 
    font-extrabold 
    text-white            
  "
  onClick={scrollToOffer}
>
  QUERO TAMBÉM TER ESSE TIPO DE TRANSFORMAÇÃO!
</Button>

        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
