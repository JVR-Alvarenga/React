import { ChatContextType } from "@/types/ChatContextType";
import { MessageType } from "@/types/MessageType";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const STORAGE_NAME = 'nameContextContent';
const  STORAGE_CHAT = 'chatContextContent';

export const ChatContext = createContext<ChatContextType | null>(null);

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }: {children: ReactNode}) => {
    const [messages, setMessages] = useState<MessageType[]>(
        JSON.parse(localStorage.getItem(STORAGE_CHAT) || '[]')
    );
    const [name, setName] = useState<string>(
        localStorage.getItem(STORAGE_NAME) || ''
    );


    useEffect(() => {
        localStorage.setItem(STORAGE_NAME, name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem(STORAGE_CHAT, JSON.stringify(messages));
    }, [messages]);


    const addMessage = (text: string, sender: 'person' | 'bot') => {
        const newMessage = { text, sender };
        setMessages((prevMessages) => [...prevMessages, newMessage])
    }

    return (
        <ChatContext.Provider value={{ name, setName, messages, addMessage }}>
            { children }
        </ChatContext.Provider>
    );
}