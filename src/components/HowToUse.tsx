"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

const HowToUse = () => {
  const steps = useMemo(
    () => [
      {
        number: 1,
        title: "Passo 1",
        description: "Ferva 1 litro de água até começar a borbulhar.",
        icon: "/images/steps/step1.png",
      },
      {
        number: 2,
        title: "Passo 2",
        description: "Adicione uma colher de sopa (7g) do Leanova.",
        icon: "/images/steps/step2.png",
      },
      {
        number: 3,
        title: "Passo 3",
        description: "Deixe em infusão e coe. Agora é só beber!",
        icon: "/images/steps/step3.png",
      },
    ],
    []
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Lado Esquerdo - Steps */}
          <motion.div
            className="space-y-8 flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-4xl md:text-5xl font-black text-[#E91E63] leading-tight">
                COMO USAR O<br />
                LEANOVA 21 ERVAS?
              </h3>
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-center gap-6 min-h-[120px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Ícone circular */}
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-[#E91E63] p-2">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lado Direito - Imagem principal sem moldura, com bordas arredondadas */}
          <motion.div
            className="relative flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/IMG_1477.PNG"
              alt="Leanova 21 Ervas - Como usar"
              className="w-full h-auto object-contain rounded-[3rem] shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
