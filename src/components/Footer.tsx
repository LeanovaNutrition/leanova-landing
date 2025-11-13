import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0D0C10] text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-start">
            <img 
              src="/images/logo.jpeg" 
              alt="Leanova 21 Ervas Logo" 
              className="h-16 w-16 mb-4 object-cover rounded-xl shadow-md"
            />
            <p className="opacity-80 leading-relaxed">
              O chá natural que transforma seu corpo sem deixar a pele flácida.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-black mb-4">Links Rápidos</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#pricing" className="hover:opacity-100 hover:underline transition-all">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 hover:underline transition-all">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 hover:underline transition-all">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 hover:underline transition-all">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-black mb-4">Contato</h3>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>leanovanutrition@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(51) 98913-2595</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Porto Alegre, RS - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-80">
          <p>&copy; {new Date().getFullYear()} Leanova 21 Ervas. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">CNPJ: 61.834.873/0001-94</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
