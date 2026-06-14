/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import Navigation from './components/Navigation';
import HomeView from './components/HomeView';
import WalletView from './components/WalletView';
import BonusView from './components/BonusView';
import AccountView from './components/AccountView';
import LoginView from './components/LoginView';
import ConvidarView from './components/ConvidarView';
import RentedMachinesView from './components/RentedMachinesView';
import CollectionLogView from './components/CollectionLogView';
import AdminPanelView from './components/AdminPanelView';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [liveMessage, setLiveMessage] = useState("AO VIVO: 86*****42 acabou de depositar 175 MZN");
  const [collectionLogs, setCollectionLogs] = useState<{ date: string, amount: string }[]>([]);
  const userPhoneNumber = '861227871';

  const addLog = (amount: string) => {
    const now = new Date();
    setCollectionLogs([...collectionLogs, { 
        date: now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
        amount: amount 
    }]);
  };

  useEffect(() => {
    const names = ["Juvenal", "Maria", "João", "Ana", "Carlos", "Helena", "Pedro", "Fátima"];
    const provinces = ["Maputo", "Beira", "Nampula", "Tete", "Quelimane", "Inhambane", "Pemba"];

    const interval = setInterval(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomProv = provinces[Math.floor(Math.random() * provinces.length)];
        const randomAmount = (Math.floor(Math.random() * 48) + 2) * 100;
        setLiveMessage(`AO VIVO: ${randomName} de ${randomProv} acabou de levantar ${randomAmount} MZN`);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isLoggedIn) {
      return <div className="min-h-screen bg-background-primary text-accent-white bg-realism"><LoginView onLogin={() => setIsLoggedIn(true)} /></div>;
  }

  return (
    <div className={`min-h-screen bg-background-primary text-accent-white bg-realism ${isDarkMode ? '' : 'theme-light'}`}>
      <header className="bg-card-background p-4 flex justify-between items-center border-b border-accent-green">
        <h1 className="font-bold text-accent-green text-xl flex items-center gap-2">
            <span className="text-yellow-500">⚙️</span> MY ZUZ
        </h1>
        <div className="flex items-center gap-4">
            <div className="relative">
                <Bell className="text-accent-white" size={24} />
                {notificationCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {notificationCount}
                    </span>
                )}
            </div>
            <span className="text-xs bg-card-background border border-accent-white/20 text-accent-white px-2 py-1 rounded">PREMIUM</span>
        </div>
      </header>
      
      <div className="fixed top-16 left-0 right-0 bg-red-950 text-white text-xs p-1 text-center animate-pulse z-10">
        {liveMessage}
      </div>

      <main className="pt-24 pb-20">
        {activeTab === 'inicio' && <HomeView />}
        {activeTab === 'carteira' && <WalletView />}
        {activeTab === 'bonus' && <BonusView />}
        {activeTab === 'conta' && <AccountView isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} onLogout={() => setIsLoggedIn(false)} />}
        {activeTab === 'convidar' && <ConvidarView />}
        {activeTab === 'alugadas' && <RentedMachinesView onCollect={addLog} />}
        {activeTab === 'historico' && <CollectionLogView logs={collectionLogs} />}
        {activeTab === 'admin' && <AdminPanelView onApprove={() => setNotificationCount(prev => prev + 1)} />}
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} userPhoneNumber={userPhoneNumber} />
    </div>
  );
}
