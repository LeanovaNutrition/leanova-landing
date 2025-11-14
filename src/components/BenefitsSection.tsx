"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const float = async () => {
      while (true) {
        await controls.start({
          y: -15,
          transition: { duration: 2, ease: "easeInOut" },
        });
        await controls.start({
          y: 0,
          transition: { duration: 2, ease: "easeInOut" },
        });
      }
    };
    float();
  }, [controls]);

  const left = [
    { text: "Queima de Gordura inteligente (sem o uso de cafeína);", color: "bg-[#e91e63]" },
    { text: "Cuida da sua pele, evitando flacidez durante o emagrecimento;", color: "bg-[#8bc53f]" },
    { text: "Sabor delicioso em um simples chá natural;", color: "bg-[#e91e63]" },
  ];

  const right = [
    { text: "Redução de medidas em poucas semanas (comprovado clinicamente);", color: "bg-[#8bc53f]" },
    { text: "Não gera nenhum tipo de arritmia ou ansiedade;", color: "bg-[#e91e63]" },
    { text: "Melhora no sono.", color: "bg-[#8bc53f]" },
  ];

  const BenefitCard = useCallback(({ text, color }: { text: string; color: string }) => (
    <motion.div
      className={`${color} relative text-white rounded-xl px-8 py-5 shadow-[0_8px_20px_rgba(0,0,0,0.15)]`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <p className="font-semibold leading-snug text-[15px] md:text-[16px]">{text}</p>
    </motion.div>
  ), []);

  const scrollToOffer = useCallback(() => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="py-20 bg-[#fff8fb]">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row items-start justify-center gap-10">
        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          {left.map((item, i) => (
            <BenefitCard key={i} {...item} />
          ))}
        </div>

        {/* Imagem Central */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center items-center bg-transparent"
          animate={controls}
        >
          <img
            src="/images/products.png"
            alt="Leanova 21 Ervas"
            className="w-full max-w-[420px] bg-transparent"
            loading="lazy"
            style={{
              filter: "none",
              boxShadow: "none",
              background: "transparent",
            }}
          />
        </motion.div>

        {/* Coluna Direita */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          {right.map((item, i) => (
            <BenefitCard key={i} {...item} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16 px-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Button
  variant="accent"
  size="lg"
  className="
    w-full sm:w-auto 
    max-w-[90%] sm:max-w-none 
    text-lg 
    py-7 sm:py-6 
    px-10 sm:px-12 
    mt-4 
    text-wrap 
    font-extrabold 
    text-white            
  "
  onClick={scrollToOffer}
>
  QUERO GARANTIR MEU CHÁ!
</Button>

      </motion.div>
    </section>
  );
};

export default BenefitsSection;
