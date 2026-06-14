import { useState } from 'react';

export default function LoginView({ onLogin }: { onLogin: () => void }) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
            <h1 className="text-2xl font-bold text-accent-green">{isRegistering ? 'Criar Conta no My Zuz' : 'Entrar no My Zuz'}</h1>
            <input 
                type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Número de Telefone"
                className="w-full max-w-sm bg-gray-700 text-white p-3 rounded-lg"
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Palavra-passe"
                className="w-full max-w-sm bg-gray-700 text-white p-3 rounded-lg"
            />
            <button 
                onClick={onLogin}
                className="w-full max-w-sm bg-accent-green text-white py-3 rounded-lg font-bold"
            >
                {isRegistering ? 'Registrar' : 'Entrar'}
            </button>
            <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-sm text-gray-400 hover:text-white"
            >
                {isRegistering ? 'Já tem conta? Entrar' : 'Não tem conta? Registrar'}
            </button>
        </div>
    );
}
