import { useState } from 'react';

export default function RentedMachinesView({ onCollect }: { onCollect: (amount: string) => void }) {
    // Mock data for rented machines
    const [rentedMachines, setRentedMachines] = useState([
        { name: 'Alpha MZ1', status: 'Ativa', earning: '16.3 MZN', readyToCollect: true },
    ]);

    const handleCollect = (machine: typeof rentedMachines[0]) => {
        onCollect(machine.earning);
        alert("Rendimento coletado com sucesso!");
        setRentedMachines(rentedMachines.map(m => m.name === machine.name ? { ...m, readyToCollect: false } : m));
    };

    return (
        <div className="p-4 pb-20 space-y-6">
            <h2 className="text-xl font-bold">Máquinas Alugadas</h2>
            
            {rentedMachines.length > 0 ? (
                <div className="space-y-4">
                    {rentedMachines.map((m, index) => (
                        <div key={index} className="bg-card-background border border-accent-green p-4 rounded-xl space-y-3">
                            <h3 className="font-bold text-yellow-500">{m.name}</h3>
                            <p className="text-sm">Status: <span className="text-green-500 font-bold">{m.status}</span></p>
                            <p className="text-sm">Rendimento: <span className="text-gray-400">{m.earning}</span></p>
                            <button 
                                onClick={() => handleCollect(m)}
                                disabled={!m.readyToCollect}
                                className={`w-full py-2 rounded-lg font-bold ${m.readyToCollect ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300 cursor-not-allowed'}`}
                            >
                                {m.readyToCollect ? 'Coletar Rendimento' : 'Aguardando 23:59'}
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-400">Nenhuma máquina alugada.</p>
            )}
        </div>
    );
}
