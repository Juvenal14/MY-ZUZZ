import { useState } from 'react';
import { BookOpen, X } from 'lucide-react';

export default function InvestmentGlossary() {
    const [isOpen, setIsOpen] = useState(false);
    const terms = [
        { term: 'ROI', definition: 'Retorno sobre o Investimento. Indica o lucro que você obtém sobre o valor investido.' },
        { term: 'GH/s', definition: 'Gigahashes por segundo. Medida da potência de mineração da máquina.' },
        { term: 'Depósito', definition: 'Adição de fundos na sua carteira para investir.' },
        { term: 'Levantamento', definition: 'Retirada de lucros da sua carteira para sua conta bancária/M-Pesa.' },
    ];

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-gray-800 text-white w-full py-3 rounded-lg font-bold justify-center"
            >
                <BookOpen size={20} />
                Glossário de Investimentos
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
                    <div className="bg-card-background border border-accent-green p-6 rounded-xl w-full max-w-sm space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Glossário</h3>
                            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                        </div>
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {terms.map((t, i) => (
                                <div key={i}>
                                    <p className="font-bold text-accent-green">{t.term}</p>
                                    <p className="text-sm text-gray-300">{t.definition}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
