import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const [selectedPack, setSelectedPack] = useState("pack1");

  const getCurrentDate = () => {
    const days = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ];
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const now = new Date();
    return `${days[now.getDay()]}, ${now.getDate()} de ${
      months[now.getMonth()]
    } de ${now.getFullYear()}`;
  };

  const pack1Options = useMemo(
    () => [
      {
        title: "1 Pacote - Leanova 21 Ervas",
        subtitle: "Duração de 30 dias",
        discount: "- R$88,00",
        oldPrice: "R$157,90",
        newPrice: "R$69,90",
        installments: "12x",
        installmentValue: "R$6,90",
        features: ["1 Pacote", "Duração de 30 dias"],
        checkoutUrl: "https://entrega.logzz.com.br/pay/1-pacote-leanova-21-ervas",
        image: "",
      },
    ],
    []
  );

  const pack2Options = useMemo(
    () => [
      {
        title: "2 Pacotes - Leanova 21 Ervas",
        subtitle: "Duração de 60 dias",
        discount: "- R$188,00",
        oldPrice: "R$287,90",
        newPrice: "R$99,90",
        installments: "12x",
        installmentValue: "R$9,99",
        features: ["2 Pacotes", "Duração de 60 dias"],
        badge: "MAIS VENDIDO",
        checkoutUrl: "https://entrega.logzz.com.br/pay/promocao-pague-1-leve-2",
        image: "",
      },
    ],
    []
  );

  const pack3Options = useMemo(
    () => [
      {
        title: "3 Pacotes + 1 Grátis - Leanova 21 Ervas",
        subtitle: "Duração de 120 dias",
        discount: "- R$178,00",
        oldPrice: "R$467,90",
        newPrice: "R$289,90",
        installments: "12x",
        installmentValue: "R$28,99",
        features: ["3 Pacotes", "1 Pacote grátis", "Duração de 120 dias"],
        checkoutUrl: "https://entrega.logzz.com.br/pay/4-pacotes-leanova-21-ervas-promocao",
        image: "",
      },
    ],
    []
  );

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-[#E91E63] text-white text-center py-6 px-4 mb-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            ADQUIRA AGORA O SEU KIT LEANOVA
            <br />
            NAS MELHORES CONDIÇÕES DISPONÍVEIS!
          </h2>
        </div>

        {/* Data */}
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl font-black text-[#E91E63] mb-2">
            Promoção Imperdível Até
          </p>
          <p className="text-xl md:text-2xl font-bold text-[#E91E63]">
            {getCurrentDate()}
          </p>
        </div>

        {/* Abas */}
        <Tabs
          value={selectedPack}
          onValueChange={setSelectedPack}
          className="w-full"
        >
          {/* Desktop mantém linha única, mobile empilha */}
          <TabsList
            className="
              grid grid-cols-1 sm:grid-cols-3
              w-full max-w-md mx-auto mb-12 h-auto p-1 gap-3
            "
          >
            <TabsTrigger
              value="pack1"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold py-4 text-lg md:text-xl rounded-lg text-center"
            >
              1 Pacote
            </TabsTrigger>
            <TabsTrigger
              value="pack2"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold py-4 text-lg md:text-xl rounded-lg text-center"
            >
              2 Pacotes
            </TabsTrigger>
            <TabsTrigger
              value="pack3"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold py-4 text-lg md:text-xl rounded-lg text-center"
            >
              3 Pacotes
            </TabsTrigger>
          </TabsList>

          {/* Conteúdos */}
          <TabsContent value="pack1">
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {pack1Options.map((option, index) => (
                <PricingCard key={index} {...option} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pack2">
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {pack2Options.map((option, index) => (
                <PricingCard key={index} {...option} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pack3">
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {pack3Options.map((option, index) => (
                <PricingCard key={index} {...option} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
