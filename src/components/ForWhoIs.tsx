"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useCallback } from "react";

const ForWhoIs = () => {
  const benefits = [
    "Quer emagrecer de forma eficaz e reduzir medidas, especialmente na região abdominal, mas não tolera ou não quer os efeitos colaterais da cafeína (agitação, ansiedade, insônia).",
    "Busca uma solução prática, rápida e saborosa para incluir na rotina corrida e acelerar o metabolismo diariamente.",
    "Busca inibir o apetite por doces e lanches.",
    "Deseja ter mais energia e disposição para as tarefas do dia, mas de forma estável e sem nervosismo, seja para estudar ou trabalhar.",
    "Quem quer ter um cuidado completo com a sua autoestima, cuidando do seu emagrecimento e da sua pele, cabelo e unhas — de uma vez só!",
  ];

  const scrollToPricing = useCallback(() => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const herbsText =
    "BOLDO • CAMOMILA • AMORA • CARQUEJA • CHÁ BRANCO • CHÁ PRETO • CHÁ VERDE • JASMIM • CHÁ MATE • ERVA-DOCE • ERVA-CIDREIRA • FUNCHO • HORTELÃ • LARANJA • MARACUJÁ • PITANGA • GROSELHA • HIBISCO • ESTÉVIA COM ANIS ESTRELADO E ENDRO • ";

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#E91E63] to-[#C2185B] relative overflow-hidden">
      {/* Navbar animada infinita */}
      <div className="absolute top-0 left-0 right-0 bg-[#8BC53F] py-3 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: [0, -6000] }}
          transition={{
            repeat: Infinity,
            duration: 120,
            ease: "linear",
          }}
        >
          <span className="text-white font-black text-sm md:text-base tracking-wide px-8">
            {herbsText.repeat(15)}
          </span>
          <span className="text-white font-black text-sm md:text-base tracking-wide px-8">
            {herbsText.repeat(15)}
          </span>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl mt-16">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Imagem */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="public/images/IMG_1485.png"
              alt="Leanova na mão"
              className="w-full max-w-[600px] lg:max-w-[700px] mx-auto relative z-10"
              loading="lazy"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight text-center lg:text-left">
              PRA QUEM É O<br />
              <span className="text-[#8BC53F]">LEANOVA 21 ERVAS?</span>
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-4 flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8BC53F] rounded-full flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white font-bold" />
                  </div>
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Box */}
            <motion.div
              className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg border-4 border-white rounded-3xl p-8 text-center space-y-6 mt-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-xl md:text-2xl font-black leading-tight drop-shadow-lg">
                Se você se identifica com ao menos 1 desses pontos, o Leanova 21 Ervas é perfeito para você!
              </p>

              <div className="flex justify-center">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={scrollToPricing}
                  className="inline-flex items-center justify-center px-10 py-16 sm:px-12 sm:py-7 rounded-full text-base md:text-lg font-extrabold text-[#E91E63] whitespace-normal leading-snug tracking-tight w-full sm:w-auto max-w-[90%] sm:max-w-none shadow-[0_6px_0_#B5CC00] bg-[#CCFF00] hover:bg-[#B8E600] transition-transform hover:scale-105 text-wrap"
                >
                  QUERO GARANTIR MEU LEANOVA 21 ERVAS!
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoIs;
