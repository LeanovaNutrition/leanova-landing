"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    { question: "O Leanova 21 Ervas é seguro?", answer: "Sim! O Leanova 21 Ervas é 100% seguro, formulado com ingredientes naturais e clinicamente testados. É livre de cafeína e não causa efeitos colaterais como nervosismo ou insônia." },
    { question: "Contém açúcar ou glúten?", answer: "Não! O Leanova 21 Ervas é livre de açúcar e glúten, sendo seguro para pessoas com restrições alimentares." },
    { question: "Como ele queima gordura sem usar cafeína?", answer: "Através do Green Select, um ativo 100% natural do chá verde que possui efeito termogênico tão potente quanto a cafeína, mas sem causar agitação ou ansiedade." },
    { question: "Posso ter efeitos colaterais como ansiedade ou insônia?", answer: "Não! Por ser livre de cafeína, o Leanova 21 Ervas não causa ansiedade, insônia ou nervosismo. Você pode tomar a qualquer hora do dia." },
    { question: "Quem não deve usar o Leanova 21 Ervas?", answer: "Gestantes e menores de 18 anos devem consultar um médico antes de usar. Pessoas com condições médicas específicas também devem buscar orientação profissional." },
    { question: "Em quanto tempo verei resultados?", answer: "Os resultados variam de pessoa para pessoa, mas a maioria das clientes relata mudanças visíveis já nas primeiras 2-3 semanas de uso contínuo." },
    { question: "Qual o prazo de entrega?", answer: "A entrega é realizada em até 7 dias úteis após a confirmação do pagamento, com frete GRÁTIS para todo o Brasil!" },
    { question: "Serei cobrada novamente após a compra?", answer: "Não! É uma compra única, sem mensalidades ou cobranças recorrentes. Você paga apenas uma vez." },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#4A1A2C] to-[#2D0F1C]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Perguntas Frequentes...
          </h2>
        </motion.div>

        {/* FAQ Grid corrigida */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-[#5A2040]/40 border-2 border-[#E91E63]/30 rounded-2xl px-6 hover:border-[#E91E63] transition-colors backdrop-blur-sm w-full flex-1"
                >
                  <AccordionTrigger className="text-left font-bold text-base md:text-lg text-white hover:text-[#E91E63] py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 leading-relaxed text-base pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Support Box */}
        <motion.div
          className="bg-gradient-to-br from-[#E91E63] to-[#C2185B] rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Dúvidas? Fale com o suporte
          </h3>
          <p className="text-white text-lg md:text-xl mb-6 opacity-90">
            Ainda tem alguma dúvida? Entre em contato com<br />
            a nossa equipe no WhatsApp pelo botão abaixo!
          </p>
          <a
            href="https://wa.me/5551989132595"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1FB855] text-white text-xl font-black py-5 px-10 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com o suporte
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
