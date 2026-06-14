export default function CollectionLogView({ logs }: { logs: { date: string, amount: string }[] }) {
    return (
        <div className="p-4 pb-20 space-y-6">
            <h2 className="text-xl font-bold">Histórico de Coletas</h2>
            
            {logs.length > 0 ? (
                <div className="space-y-4">
                    {logs.map((log, index) => (
                        <div key={index} className="bg-card-background border border-accent-green p-4 rounded-xl flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-400">{log.date}</p>
                            </div>
                            <p className="font-bold text-green-500">{log.amount}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-400">Nenhum rendimento coletado ainda.</p>
            )}
        </div>
    );
}
