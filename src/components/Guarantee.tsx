"use client";
import { motion } from "framer-motion";

const Guarantee = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#E91E63] to-[#C2185B] text-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Lado Esquerdo - Imagem */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/IMG_1483.png"
              alt="Garantia de 30 Dias"
              className="w-full max-w-lg mx-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Lado Direito - Conteúdo */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Garantia de 30 Dias!
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p>
                Não queremos você preocupada com a eficácia do <span className="font-bold">Leanova 21 Ervas</span>: é por isso que te damos uma garantia de 30 dias onde você pode pedir o nosso Chá Natural 21 Ervas e, caso você ache que eles não está te entregando os resultados desejados, você pode nos enviar um e-mail e pedir 100% do seu dinheiro de volta, sem pegadinhas ou letras miúdas.
              </p>
              
              <p>
                Confiamos tanto no nosso produto que queremos que você se sinta 100% segura em garantir o seu para sentir na pele e viver a transformação que ele causará na sua autoestima.
              </p>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;