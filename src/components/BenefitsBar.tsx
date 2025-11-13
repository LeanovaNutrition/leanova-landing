import { Flame, Coffee, Salad, Smile } from "lucide-react";

const BenefitsBar = () => {
  const benefits = [
    { icon: Coffee, text: "Sem Cafeína" },
    { icon: Flame, text: "Queima & Firma" },
    { icon: Salad, text: "Inibe o Apetite" },
    { icon: Smile, text: "Pele Firme" },
  ];

  // Repete várias vezes para garantir fluxo contínuo
  const repeated = Array(6).fill(benefits).flat();

  return (
    <div className="relative bg-white py-4 overflow-hidden border-t border-[#ffd5e6]">
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
        {repeated.map((b, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0 px-4">
            <b.icon className="w-5 h-5 text-[#E91E63]" />
            <span className="font-bold text-[#E91E63] text-[15px] uppercase tracking-wide">
              {b.text}
            </span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
            display: inline-flex;
            width: max-content;
          }
        `
      }} />
    </div>
  );
};

export default BenefitsBar;