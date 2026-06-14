import { useState } from 'react';

export default function AdminPanelView({ onApprove }: { onApprove: () => void }) {
    // Mock data for pending transactions
    const [transactions, setTransactions] = useState([
        { id: 1, type: 'Depósito', amount: '500 MZN', user: '861789012', status: 'Pendente' },
        { id: 2, type: 'Levantamento', amount: '200 MZN', user: '861998877', status: 'Pendente' },
    ]);

    const handleUpdateUser = (id: number, newUser: string) => {
        setTransactions(transactions.map(t => t.id === id ? { ...t, user: newUser } : t));
    };

    const handleAction = (id: number, action: 'Aprovar' | 'Rejeitar') => {
        setTransactions(transactions.map(t => t.id === id ? { ...t, status: action === 'Aprovar' ? 'Aprovado' : 'Rejeitado' } : t));
        if (action === 'Aprovar') {
            onApprove();
        }
        alert(`${action} executada com sucesso!`);
    };

    return (
        <div className="p-4 pb-20 space-y-6">
            <h2 className="text-xl font-bold">Painel Administrativo</h2>
            
            <div className="space-y-4">
                {transactions.map((t) => (
                    <div key={t.id} className="bg-card-background border border-accent-green p-4 rounded-xl space-y-2">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-yellow-500">{t.type}</h3>
                            <span className={`text-sm ${t.status === 'Pendente' ? 'text-yellow-400' : 'text-green-500'}`}>{t.status}</span>
                        </div>
                        <div className="text-sm flex items-center gap-2">
                            <span>Usuário:</span>
                            {t.status === 'Pendente' && t.type === 'Depósito' ? (
                                <input 
                                    className="bg-gray-700 text-white p-1 rounded"
                                    value={t.user} 
                                    onChange={(e) => handleUpdateUser(t.id, e.target.value)} 
                                />
                            ) : (
                                <span>{t.user}</span>
                            )}
                        </div>
                        <p className="text-sm">Valor: {t.amount}</p>
                        
                        {t.status === 'Pendente' && (
                            <div className="flex gap-2">
                                <button onClick={() => handleAction(t.id, 'Aprovar')} className="flex-1 bg-green-600 text-white py-2 rounded-lg font-bold">Aprovar</button>
                                <button onClick={() => handleAction(t.id, 'Rejeitar')} className="flex-1 bg-red-600 text-white py-2 rounded-lg font-bold">Rejeitar</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
