import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import lowTierIcon from '../assets/images/low_tier_machine_1781473037998.jpg';
import midTierIcon from '../assets/images/mid_tier_machine_1781473052491.jpg';
import highTierIcon from '../assets/images/high_tier_machine_1781473066754.jpg';
import InvestmentGlossary from './InvestmentGlossary';

export default function HomeView() {
  const machines = [
    { name: 'Alpha MZ1', power: '140.0 GH/s', price: 200, profit: 16.3, icon: lowTierIcon },
    { name: 'Beta MZ2', power: '280.0 GH/s', price: 350, profit: 33.6, icon: lowTierIcon },
    { name: 'Cyber MZ3', power: '560.0 GH/s', price: 700, profit: 68.2, icon: midTierIcon },
    { name: 'Quantum MZ4', power: '1120.0 GH/s', price: 1400, profit: 138.5, icon: midTierIcon },
    { name: 'Titan MZ5', power: '2500.0 GH/s', price: 5000, profit: 550, icon: highTierIcon },
    { name: 'Summit MZ6', power: '3500.0 GH/s', price: 7000, profit: 750, icon: highTierIcon },
  ];

  const tips = [
    "Diversifique seus investimentos para reduzir riscos.",
    "Invista um pouco todos os dias para construir riqueza a longo prazo.",
    "Entenda o ROI antes de alugar qualquer máquina.",
    "Não invista dinheiro que você precisa para despesas emergenciais."
  ];
  const [tipIndex, setTipIndex] = useState(0);

  return (
    <div className="p-4 space-y-6">
      {/* Investment Tips Carousel */}
      <div className="bg-gradient-to-r from-accent-gold/20 to-accent-green/20 p-4 rounded-xl space-y-2 border border-accent-gold/20">
          <h3 className="font-bold">Dica do Dia</h3>
          <p className="italic text-sm">{tips[tipIndex]}</p>
          <div className="flex justify-between items-center text-xs text-gray-600">
            <button onClick={() => setTipIndex((prev) => (prev - 1 + tips.length) % tips.length)} className="flex items-center gap-1 font-bold">
              <ChevronLeft size={16} /> Anterior
            </button>
            <button onClick={() => setTipIndex((prev) => (prev + 1) % tips.length)} className="flex items-center gap-1 font-bold">
              Próximo <ChevronRight size={16} />
            </button>
          </div>
      </div>
      {/* Machines as Grid */}
      <div className="grid grid-cols-2 gap-4">
        {machines.map((m) => (
            <div key={m.name} className="bg-card-background border border-accent-green p-4 rounded-xl space-y-2">
                <img src={m.icon} alt={m.name} className="w-full h-24 object-contain mb-2" />
                <h3 className="font-bold text-yellow-500">{m.name}</h3>
                <p className="text-xs text-gray-400">Poder: {m.power}</p>
                <p className="text-sm">Custo: {m.price} MZN</p>
                <div className="text-blue-400 text-sm">Retorno: +{m.profit} MZN/dia</div>
                <button className="bg-accent-green text-white w-full py-2 rounded-lg mt-2 text-sm">Ativar plano</button>
            </div>
        ))}
      </div>
      
      {/* Premium Plans */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Premium Plans</h2>
        <div className="space-y-3">
          {[
            { name: 'Plano Básico', roi: '5%', price: '500 MZN' },
            { name: 'Plano Padrão', roi: '10%', price: '1000 MZN' },
            { name: 'Plano Premium', roi: '15%', price: '2000 MZN' },
          ].map((plan) => (
            <div key={plan.name} className="flex justify-between items-center bg-card-background border border-accent-gold p-4 rounded-xl">
              <div>
                <h3 className="font-bold text-accent-gold">{plan.name}</h3>
                <p className="text-sm text-gray-400">ROI: {plan.roi} | {plan.price}</p>
              </div>
              <button className="bg-accent-gold text-black px-4 py-2 rounded-lg text-sm font-bold">Subscrever</button>
            </div>
          ))}
        </div>
      </div>
      
      <InvestmentGlossary />

      {/* APK Download Suggestion */}
      <div className="bg-card-background border border-accent-white/20 p-4 rounded-xl text-center">
        <p className="mb-2">Baixe a aplicação nativa para maior eficiência</p>
        <button className="bg-blue-600 text-white w-full py-2 rounded-lg">Download APK Oficial</button>
      </div>
    </div>
  );
}
