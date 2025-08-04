import { MessageType } from "./MessageType";

export type ChatContextType = {
    name: string;
    setName: (n: string) => void;
    messages: MessageType[];
    addMessage: (text: string, sender: 'person' | 'bot') => void;
}