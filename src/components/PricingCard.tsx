import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, ShieldCheck } from "lucide-react";
import { useCallback } from "react";

interface PricingCardProps {
  title: string;
  subtitle: string;
  discount: string;
  oldPrice: string;
  newPrice: string;
  installments: string;
  installmentValue: string;
  features: string[];
  badge?: string;
  checkoutUrl: string;
  image: string;
}

const PricingCard = ({
  title,
  subtitle,
  discount,
  oldPrice,
  newPrice,
  installments,
  installmentValue,
  features,
  badge,
  checkoutUrl,
}: PricingCardProps) => {
  const handleCheckout = useCallback(() => {
    window.open(checkoutUrl, "_blank");
  }, [checkoutUrl]);

  return (
    <Card
      className={`relative overflow-hidden transition-all hover:scale-105 hover:shadow-2xl ${
        badge ? "border-4 border-accent" : "border-2"
      }`}
    >
      {/* Selo "Mais Vendido" */}
      {badge && (
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-6 py-2 font-black text-base rounded-bl-2xl z-10">
          {badge}
        </div>
      )}

      {/* Cabeçalho */}
      <CardHeader className="text-center space-y-3 pt-12">
        <h3 className="text-3xl md:text-4xl font-black text-primary">{title}</h3>
        <p className="text-lg md:text-xl text-muted-foreground font-semibold">
          {subtitle}
        </p>

        <div className="bg-primary text-primary-foreground inline-block px-6 py-3 rounded-lg font-extrabold text-2xl mx-auto shadow-md">
          {discount} OFF
        </div>
      </CardHeader>

      {/* Conteúdo */}
      <CardContent className="space-y-6 px-6">
        {/* Preços */}
        <div className="text-center space-y-1">
          <p className="text-muted-foreground line-through text-2xl md:text-3xl">
            {oldPrice}
          </p>
          <p className="text-5xl md:text-6xl font-black text-primary drop-shadow-sm">
            {newPrice}
          </p>
        </div>

        {/* Parcelamento */}
        <div className="bg-secondary rounded-xl p-5 space-y-3 shadow-inner">
          <p className="text-center text-xl font-bold text-primary">
            {installments} de {installmentValue}
          </p>
          <p className="text-center text-sm md:text-base text-muted-foreground">
            Ou{" "}
            <span className="font-bold text-foreground">{newPrice}</span> à
            vista!
          </p>
        </div>

        {/* Benefícios */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <span className="text-lg md:text-xl font-medium leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Rodapé */}
      <CardFooter className="flex flex-col gap-4 items-center">
        {/* Botão principal */}
        <Button
          variant="accent"
          size="lg"
          className="w-full text-xl font-extrabold py-6 rounded-xl shadow-md"
          onClick={handleCheckout}
        >
          COMPRAR AGORA
        </Button>


        {/* Selos de segurança */}
        <div className="flex justify-center mt-1">
          <img
            src="/images/selos-compras.svg"
            alt="Selos de segurança"
            className="h-7 md:h-8 object-contain opacity-90"
            loading="lazy"
          />
        </div>

        {/* Avaliação */}
        <div className="flex justify-center">
          <img
            src="/images/avalicao-3.0-novo-2.svg"
            alt="Avaliações"
            className="h-5 md:h-6 object-contain opacity-95"
            loading="lazy"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
