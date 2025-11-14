"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [selectedPack, setSelectedPack] = useState("pack2");

  const getCurrentDate = () => {
    const days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const now = new Date();
    return `${days[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;
  };

  const packs = [
    {
      id: "pack1",
      title: "1 Pote – Leanova 21 Ervas",
      duration: "Duração de 30 dias",
      discount: "- R$88,00 OFF",
      oldPrice: "R$157,90",
      newPrice: "R$69,90",
      installments: "12x de R$6,90",
      features: ["1 Pote", "Duração de 30 dias"],
      checkoutUrl: "https://entrega.logzz.com.br/pay/1-pacote-leanova-21-ervas",
      badge: null
    },
    {
      id: "pack2",
      title: "2 Potes – Leanova 21 Ervas",
      duration: "Duração de 60 dias",
      discount: "- R$188,00 OFF",
      oldPrice: "R$287,90",
      newPrice: "R$99,90",
      installments: "12x de R$9,99",
      features: ["2 Potes", "Duração de 60 dias"],
      checkoutUrl: "https://entrega.logzz.com.br/pay/promocao-pague-1-leve-2",
      badge: "MAIS VENDIDO"
    },
    {
      id: "pack3",
      title: "3 Potes + 1 Grátis – Leanova 21 Ervas",
      duration: "Duração de 120 dias",
      discount: "- R$178,00 OFF",
      oldPrice: "R$467,90",
      newPrice: "R$289,90",
      installments: "12x de R$28,99",
      features: ["3 Potes", "1 Pote Grátis", "Duração de 120 dias"],
      checkoutUrl: "https://entrega.logzz.com.br/pay/4-pacotes-leanova-21-ervas-promocao",
      badge: null
    }
  ];

  const selectedPackData = packs.find(p => p.id === selectedPack) || packs[1];

  return (
    <section id="pricing" className="py-14 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="bg-[#E91E63] text-white text-center py-6 px-4 mb-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight">
            ADQUIRA AGORA O SEU KIT LEANOVA
            <br className="hidden sm:block" />
            NAS MELHORES CONDIÇÕES DISPONÍVEIS!
          </h2>
        </div>

        {/* DATA */}
        <div className="text-center mb-10">
          <p className="text-xl sm:text-2xl lg:text-3xl font-black text-[#E91E63] mb-2">
            Promoção Imperdível Até
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#E91E63]">
            {getCurrentDate()}
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">

          
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/produto.PNG"
              alt="Leanova 21 Ervas"
              className="w-[90%] sm:w-[70%] lg:w-[95%] object-contain"
              loading="lazy"
            />
          </div>

          {/* CARD */}
          <div className="w-full lg:w-1/2">

            {/* SELETOR */}
            <div className="bg-pink-100 rounded-2xl p-4 mb-6">
              <p className="text-center text-sm font-bold text-[#E91E63] mb-3">
                Selecione a quantidade de potes Leanova!
              </p>

              <div className="grid grid-cols-3 gap-2">
                {packs.map((pack) => (
                  <button
                    key={pack.id}
                    onClick={() => setSelectedPack(pack.id)}
                    className={`py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      selectedPack === pack.id
                        ? "bg-[#E91E63] text-white shadow-lg scale-105"
                        : "bg-white text-[#E91E63] border-2 border-[#E91E63]/30"
                    }`}
                  >
                    {pack.id === "pack1" && "1 Pote"}
                    {pack.id === "pack2" && "2 Potes"}
                    {pack.id === "pack3" && "3 Potes"}
                  </button>
                ))}
              </div>
            </div>

            {/* CARD */}
            <div className="bg-white border-4 border-[#E91E63] rounded-3xl p-6 shadow-2xl relative">

              {selectedPackData.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8BC53F] text-white px-6 py-1 rounded-full font-black text-sm shadow-lg">
                  {selectedPackData.badge}
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-black text-[#E91E63] text-center mt-4">
                {selectedPackData.title}
              </h3>

              <p className="text-center text-gray-600 mb-4">{selectedPackData.duration}</p>

              <div className="bg-[#E91E63] text-white text-center py-2 px-4 rounded-full font-black text-lg mb-4">
                {selectedPackData.discount}
              </div>

              <div className="text-center mb-4">
                <p className="text-gray-400 line-through text-xl">{selectedPackData.oldPrice}</p>
                <p className="text-5xl sm:text-6xl font-black text-[#E91E63]">{selectedPackData.newPrice}</p>
              </div>

              <div className="bg-pink-50 rounded-xl p-4 mb-5">
                <p className="text-center text-lg font-bold text-[#E91E63]">
                  {selectedPackData.installments}
                </p>
                <p className="text-center text-sm text-gray-600">
                  Ou <span className="font-bold text-black">{selectedPackData.newPrice}</span> à vista!
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {selectedPackData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#8BC53F]" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-[#8BC53F] hover:bg-[#7AB82F] text-white text-lg font-black py-6 rounded-full shadow-xl transition-all hover:scale-105"
                onClick={() => window.open(selectedPackData.checkoutUrl, "_blank")}
              >
                COMPRAR AGORA
              </Button>

            
              <div className="flex justify-center mt-6 mb-2">
                <p className="text-sm font-semibold text-gray-700">
                  ⭐⭐⭐⭐⭐ 4.8 DE <strong>1.325</strong> AVALIAÇÕES.
                </p>
              </div>

              {/* SELOS */}
              <div className="flex justify-center gap-6 mt-2 opacity-90">
                <img src="/images/selos-compras.svg" className="h-7" alt="" />
              
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
