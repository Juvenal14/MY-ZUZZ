import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WalletView() {
    const depositMethods = [
        { name: 'M-Kesh', number: '835122524' },
        { name: 'M-Pesa', number: '858475155' },
        { name: 'E-Mola', number: 'Não definido' },
    ];

    const data = Array.from({ length: 30 }, (_, i) => ({
        day: `Dia ${i + 1}`,
        earnings: Math.floor(Math.random() * 50) + (i * 20),
    }));

    return (
      <div className="p-4 pb-20 space-y-6">
        <h2 className="text-xl font-bold">Progresso de Investimento</h2>
        
        <div className="bg-card-background border border-accent-green p-4 rounded-xl h-64">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="day" hide />
                    <YAxis stroke="#aaa" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                    <Line type="monotone" dataKey="earnings" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>

        <h2 className="text-xl font-bold">Depósito</h2>
        <div className="space-y-4">
            {depositMethods.map(method => (
                <div key={method.name} className="flex justify-between items-center bg-card-background border border-accent-green p-4 rounded-xl">
                    <div>
                        <p className="font-bold">{method.name}</p>
                        <p className="text-sm text-gray-400">{method.number}</p>
                    </div>
                    <button className="bg-accent-green text-white px-4 py-2 rounded-lg text-sm">Copiar</button>
                </div>
            ))}
        </div>
        
        <div className="bg-card-background border border-accent-white/20 p-4 rounded-xl text-sm text-gray-300">
            <h3 className="font-bold text-accent-white mb-2">Regras de Levantamento</h3>
            <ul className="list-disc list-inside space-y-1">
                <li>Levantamento permitido apenas uma vez por dia.</li>
                <li>Tempo mínimo de 24 horas entre levantamentos.</li>
                <li>Levantamento mínimo: 200 MZN.</li>
            </ul>
        </div>
      </div>
    );
  }
  
