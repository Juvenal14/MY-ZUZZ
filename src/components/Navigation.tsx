import { Home, Wallet, Gift, Users, User, Box, History } from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab, userPhoneNumber }: { activeTab: string, setActiveTab: (tab: string) => void, userPhoneNumber: string }) {
  const allTabs = [
    { id: 'inicio', name: 'Início', icon: Home },
    { id: 'alugadas', name: 'Máquinas', icon: Box },
    { id: 'historico', name: 'Histórico', icon: History },
    { id: 'admin', name: 'Admin', icon: User },
    { id: 'carteira', name: 'Carteira', icon: Wallet },
    { id: 'bonus', name: 'Bónus', icon: Gift },
    { id: 'convidar', name: 'Convidar', icon: Users },
    { id: 'conta', name: 'Conta', icon: User },
  ];

  const tabs = allTabs.filter(tab => tab.id !== 'admin' || userPhoneNumber === '861227871');

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#f5eed7] border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-[#2d6a4f]' : 'text-gray-500'}`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{tab.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
