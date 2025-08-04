import { useChat } from "@/contexts/ChatContext";

type Props = {
    message: string
}

export const BoxPerson = ({ message }: Props) => {
    const chatInfo = useChat();

    return (
        <div className="flex justify-end w-full text-2xl p-3 my-4">
            <div className="flex flex-col border-2 border-white p-3 rounded-md text-end">
                <div className="font-bold">
                    { chatInfo?.name }
                </div>
                <div>
                    { message }
                </div>
            </div>
        </div>
    );
}