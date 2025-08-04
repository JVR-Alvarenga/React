type Props = {
    message: string;
}

export const BoxBot = ({ message }: Props) => {
    return (
        <div className="flex justify-start  w-full text-2xl p-3 my-4">
            <div className="flex flex-col border-2 border-white p-3 rounded-md text-start">
                <p className="font-bold">Bot</p>
                { message }
            </div>
        </div>
    );
}