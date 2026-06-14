import { useState } from 'react';

export default function ConvidarView() {
    const [inviteCode, setInviteCode] = useState('');

    const generateLink = () => {
        const code = Math.random().toString(36).substring(7).toUpperCase();
        setInviteCode(code);
    };

    return (
        <div className="p-4 pb-20 space-y-6">
            <h2 className="text-xl font-bold">Painel de Afiliação</h2>
            
            <div className="bg-card-background border border-accent-green p-6 rounded-xl text-center space-y-4">
                <p className="text-sm">Convide amigos e ganhe <span className="font-bold text-yellow-500">10% de comissão</span> por cada pessoa que um membro convidar.</p>
                
                {inviteCode ? (
                    <div className="bg-accent-green text-white p-3 rounded-lg font-mono text-lg font-bold">
                        MYZUZ-{inviteCode}
                    </div>
                ) : (
                    <button onClick={generateLink} className="bg-accent-green text-white w-full py-3 rounded-lg font-bold">
                        Gerar Código de Convite
                    </button>
                )}
                
                {inviteCode && (
                    <button className="bg-white text-accent-green w-full py-2 rounded-lg font-bold">
                        Copiar Link
                    </button>
                )}
            </div>
            
            <div className="bg-card-background border border-accent-white/20 p-4 rounded-xl">
              <h3 className="font-bold mb-2">Seus Convidados</h3>
              <ul className="space-y-1">
                  <li className="text-gray-400">863456789</li>
                  <li className="text-gray-400">869876543</li>
              </ul>
              <p className="text-gray-400 mt-2">Total Convidados: 2</p>
              <p className="text-gray-400">Comissões Acumuladas: 240 MZN</p>
            </div>
        </div>
    );
}
