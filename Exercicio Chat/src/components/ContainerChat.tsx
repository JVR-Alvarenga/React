import { useChat } from "@/contexts/ChatContext";
import { BoxBot } from "./BoxBot";
import { BoxPerson } from "./BoxPerson";
import { useState } from "react";
import { ContainerName } from "./ContainerName";


export const ContainerChat = () => {
    const chats = useChat();
    const [inputPerson, setInputPerson] = useState<string>('');
    const [inputBot, setInputBot] = useState<string>('');
    

    const handlePersonRequest = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputPerson.trim() != '') {
            chats?.addMessage( inputPerson, 'person' );
            setInputPerson('');
        };
    }
    const handleBotRequest = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputBot.trim() != '') {
            chats?.addMessage( inputBot, 'bot');
            setInputBot('');
        };
    }


    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            {chats?.name === '' && 
                <ContainerName />
            }

            {chats?.name !== '' &&
                <div className="flex flex-col justify-between w-4/5 min-h-1/2 border-2 border-white rounded-md">
                    <div className="h-auto">
                        { chats?.messages.map(i => 
                            <div>
                                { i.sender === 'person' 
                                    ? <BoxPerson message={i.text} /> 
                                    : <BoxBot message={i.text} /> 
                                }
                            </div>
                        ) }
                    </div>
                    
                    <div>
                        <input 
                            onKeyDown={handlePersonRequest} onChange={(e) => setInputPerson(e.target.value)} value={ inputPerson } 
                            className="border-t-2 border-white w-full p-2 text-xl focus:outline-none" type="text" placeholder={`${chats?.name} Responda apertando 'Enter' para enviar `}
                        />
                        <input 
                            onKeyDown={handleBotRequest} onChange={(e) => setInputBot(e.target.value)} value={ inputBot } 
                            className="border-t-2 border-white w-full p-2 text-xl focus:outline-none" type="text" placeholder="Bot Responda Apertando 'Enter' para enviar" 
                        />
                    </div>
                </div>
            }

        </div>
    );
}