import { useChat } from "@/contexts/ChatContext";
import { useState } from "react";

export const ContainerName = () => {
    const chatInfo = useChat();
    const [name, setName] = useState<string>('');

    const addName = () => {
        if (name.trim() === '') return false;
        chatInfo?.setName(name);
    }

    return (
        <div className="flex flex-col items-center justify-start w-full">
            <h1 className="text-4xl mb-4">Qual seu nome ?</h1>
            <div className="flex">
                <input 
                    onChange={e => setName(e.target.value)} value={name} 
                    type="text" className="p-2 text-xl border-2 border-white rounded-md w-86" 
                />
                <button onClick={addName} className="p-2 mx-3 text-xl border-2 border-white rounded-md cursor-pointer">Iniciar Chat</button>
            </div>
        </div>
    );
}