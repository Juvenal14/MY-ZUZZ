export default function BonusView() {
    const values = ["Boa sorte", "5MT", "10MT", "20MT", "50MT"];
    return (
      <div className="p-4 pb-20 flex flex-col items-center space-y-4">
        <h2 className="text-xl font-bold">Roleta de Bónus</h2>
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {values.map((v) => (
                <div key={v} className="bg-card-background border border-accent-green p-4 rounded-xl text-center font-bold">
                    {v}
                </div>
            ))}
        </div>
        <p className="text-sm mt-4">1 jogo grátis por dia</p>
      </div>
    );
  }
  
