"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCallback, useMemo } from "react";

const HowItWorks = () => {
  const benefits = useMemo(() => [
    {
      number: "1",
      title:
        "Alta Queima De Gordura, Energia Para Todo o Seu Dia — Sem Arritmia ou Ansiedade!",
      description:
        "Você sempre tem dificuldades na hora de comprar um termogênico por que fica com receio de como a cafeína pode agir no seu corpo, causando arritmias, taquicardia ou ansiedade?",
      fullText: `Leanova 21 Ervas você não precisa se preocupar com NADA disso – graças à Tecnologia Cientificamente Comprovada do Green Select!

O Green Select é um ativo 100% natural do chá verde que possui o efeito termogênico tão forte e poderoso quanto o da cafeína para queimar gordura, reduzir medidas, acelerar o seu metabolismo – tudo isso sem causar agitação ou ansiedade. Simples assim!

Funciona como um “Mounjaro Natural”, aumentando drasticamente a velocidade do seu metabolismo, o gasto calórico e a redução de gordura, de forma 100% segura e altamente eficaz.`,
      image: "/images/carousel-1.jpg",
    },
    {
      number: "2",
      title: "Hibisco para Evitar que Sua Pele fique Flácida!",
      description:
        "Toda mulher sonha em conseguir emagrecer e perder a barriga rápido, não é?",
      fullText: `O problema é que... quando isso acontece, a sua pele fica flácida, perde firmeza, e te deixa com um aspecto que você não gosta – e muitas pessoas acham que o caminho para resolver isso é com cirurgias...

Mas esse está longe de ser o melhor caminho.

E foi por isso que fizemos QUESTÃO de adicionar o Hibisco, Erva-Cidreira e Hortelã na nossa fórmula!

O Hibisco é a principal proteína responsável por dar estrutura, elasticidade e firmeza para o nosso corpo. Pra você ter uma noção, estudos clínicos comprovaram que esse tipo de hibisco possui até 70% das proteínas que fortalecem a pele.

Tomando o Leanova 21 Ervas, você emagrecerá com velocidade – enquanto mantém a sua pele jovem, bonita, e sem flacidez à medida que você for perdendo peso!`,
      image: "/images/works2.jpg",
    },
    {
      number: "3",
      title: "Nosso Formato de Consumo Extremamente Prático, Gostoso e Eficiente.",
      description:
        "O Leanova 21 Ervas possui uma embalagem pequena e prática, para que você possa levar para qualquer lugar e consumir a qualquer momento.",
      fullText: `O formato efervescente permite uma maior absorção no seu corpo, garantindo que você aproveitará ao máximo da nossa fórmula para cuidar da sua autoestima por completo, te proporcionando o máximo de potência na queima de gordura, sem se preocupar com a flacidez – graças ao hibisco!

• Sabor extremamente delicioso (sem adição de açúcares!)`,
      image: "/images/tabela.png",
    },
  ], []);

  const scrollToPricing = useCallback(() => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 px-6 text-center leading-tight mb-8">
            CONHEÇA O PODER POR TRÁS DO{" "}
            <span className="text-[#E91E63]">LEANOVA!</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-semibold">
            Esses 3 Pilares é o que fazem o Leanova 21 Ervas ser tão poderoso
            para a sua queima de gordura — garantindo que você queime muita
            gordura diariamente — e não fique flácida ao emagrecer!
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className={`w-full ${
                    index === 2 ? "" : "rounded-2xl shadow-2xl"
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl md:text-4xl font-black text-[#E91E63] leading-tight">
                  {benefit.number}. {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-xl md:text-2xl font-semibold">
                  {benefit.description}
                </p>
                <div className="text-gray-600 leading-relaxed space-y-3 text-lg md:text-xl">
                  {benefit.fullText.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
  variant="accent"
  size="lg"
  onClick={scrollToPricing}
  className="
    inline-flex items-center justify-center
    px-6 py-7                              
    sm:px-32 sm:py-14                      
    rounded-md                             
    text-xs sm:text-3xl font-extrabold     
    text-[#E91E63]
    whitespace-normal leading-snug tracking-tight
    w-full sm:w-auto
    max-w-[340px] sm:max-w-[680px]         
    shadow-[0_8px_0_#B5CC00]               
    bg-[#CCFF00] hover:bg-[#B8E600]
    transition-transform hover:scale-105
  "
>
  <span className="block text-center">
    QUERO GARANTIR MEU <br /> LEANOVA 21 ERVAS NATURAL!
  </span>
</Button>


        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
