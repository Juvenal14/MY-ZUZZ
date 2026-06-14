import { useState } from 'react';
import { Zap, Bitcoin, Shield, Award, User as UserIcon, X, Send, Sun, Moon, Star } from 'lucide-react';

function SupportModal({ onClose }: { onClose: () => void }) {
    const [message, setMessage] = useState('');
    const [step, setStep] = useState<'form' | 'rating'>('form');
    const [rating, setRating] = useState(0);
    const faqs = [
        { q: 'Como faço um depósito?', a: 'Entre em contato com o suporte ou utilize o painel de carteira.' },
        { q: 'Quanto tempo demora o levantamento?', a: 'Geralmente em 24h úteis.' },
    ];

    if (step === 'rating') {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-card-background border border-accent-green p-6 rounded-xl w-full max-w-sm space-y-4 text-center">
                    <h3 className="font-bold text-lg">Avalie nosso suporte</h3>
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} onClick={() => setRating(star)}>
                                <Star size={30} className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} />
                            </button>
                        ))}
                    </div>
                    <button onClick={onClose} className="w-full bg-accent-green text-white py-2 rounded-lg font-bold">
                        Enviar Avaliação
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-card-background border border-accent-green p-6 rounded-xl w-full max-w-sm space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Central de Ajuda</h3>
                    <button onClick={onClose}><X size={20} /></button>
                </div>
                <div className="space-y-2">
                    {faqs.map((f, i) => (
                        <div key={i} className="text-sm">
                            <p className="font-bold">{f.q}</p>
                            <p className="text-gray-400">{f.a}</p>
                        </div>
                    ))}
                </div>
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Envie uma mensagem para o administrador"
                    className="w-full bg-gray-700 p-2 rounded-lg text-white"
                />
                <button onClick={() => { setStep('rating'); }} className="w-full bg-accent-green text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2">
                    <Send size={16} /> Enviar
                </button>
                <div className="space-y-2 pt-4 border-t border-gray-700">
                    <a href="https://chat.whatsapp.com/DyAyHKttC3M7tDzktIgTd7?s=cl&p=a&mlu=0" target="_blank" rel="noopener noreferrer" className="block bg-green-600 text-white w-full py-2 rounded-lg text-center font-bold text-sm">
                        Grupo de WhatsApp
                    </a>
                    <a href="https://wa.me/message/PXLBDZ3PIJ74C1" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 text-white w-full py-2 rounded-lg text-center font-bold text-sm">
                        Apoio do Gestor
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function AccountView({ isDarkMode, toggleTheme, onLogout }: { isDarkMode: boolean, toggleTheme: () => void, onLogout: () => void }) {
    const phoneNumber = "861227871";
    const avatars = [UserIcon, Zap, Bitcoin, Shield, Award];
    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);
    const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
    const SelectedAvatar = avatars[selectedAvatarIndex];

    return (
      <div className="p-4 pb-20 space-y-4">
        <div className="flex items-center space-x-4 bg-card-background border border-accent-green p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-accent-green flex items-center justify-center font-bold text-white">
                <SelectedAvatar size={24} />
            </div>
            <div>
                <h2 className="font-bold">JUVENAL FERNANDO SITOE</h2>
                <p className="text-sm text-gray-400">{phoneNumber}</p>
            </div>
        </div>
        
        <div className="bg-card-background border border-accent-green p-4 rounded-xl">
            <p className="text-sm text-gray-500 mb-2">Escolha seu avatar</p>
            <div className="flex gap-2">
                {avatars.map((Avatar, index) => (
                    <button 
                        key={index} 
                        onClick={() => setSelectedAvatarIndex(index)}
                        className={`p-2 rounded-full ${selectedAvatarIndex === index ? 'bg-accent-green text-white' : 'bg-gray-700 text-gray-300'}`}
                    >
                        <Avatar size={20} />
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="bg-card-background border border-accent-green p-4 rounded-xl">
                <p className="text-sm text-gray-500">Saldo</p>
                <p className="font-bold text-lg">0,00 MZN</p>
            </div>
        </div>

        {phoneNumber === "861227871" && (
            <div className="bg-card-background border border-yellow-600 p-4 rounded-xl mt-4">
                <h3 className="font-bold text-yellow-500">Painel de Administrador</h3>
                <button className="bg-yellow-600 text-white w-full py-2 rounded-lg mt-2 font-bold">Controlar Depósitos/Levantamentos</button>
            </div>
        )}

        <button onClick={() => setIsSupportModalOpen(true)} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
            Suporte
        </button>

        <button onClick={onLogout} className="w-full bg-red-600 text-white py-3 rounded-lg font-bold">
            Terminar Sessão
        </button>
        
        <button onClick={toggleTheme} className="w-full bg-gray-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>

        {isSupportModalOpen && <SupportModal onClose={() => setIsSupportModalOpen(false)} />}
      </div>
    );
  }
  
