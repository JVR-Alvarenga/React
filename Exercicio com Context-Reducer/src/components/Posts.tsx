"use client";

import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react";

export const Posts = () => {
    const postCtx = useContext(PostContext);
    const [inputTitle, setInputTitle] = useState<string>('');
    const [inputBody, setInputBody] = useState<string>('');


    const addPost = () => {
        if (inputTitle.trim() === '' || inputBody.trim() === '') return false;
        postCtx?.dispatch({
            type: 'add',
            payload: {
                title: inputTitle,
                body: inputBody
            }
        });
        setInputTitle('');
        setInputBody('');
    }

    const editTitle = (id: number) => {
        const post = postCtx?.posts.find(i => i.id === id);
        if (!post) return false;

        const newTitle = window.prompt('Editar Titulo', post.title);

        if (!newTitle || newTitle.trim() === '') return false;

        postCtx?.dispatch({
            type: 'editTitle',
            payload: { id, newTitle }
        });
    }

    const editBody = (id: number) => {
        const post = postCtx?.posts.find(i => i.id === id);
        if (!post) return false;
        
        const newBody = window.prompt('Editar Post', post.body);

        if(!newBody || newBody.trim() === '') return false;

        postCtx?.dispatch({
            type: 'editBody',
            payload: { id, newBody }
        });
    }

    const removePost = (id: number) => {
        if (!window.confirm('Tem certeza que deseja excluir este post ?')) return false;
        postCtx?.dispatch({
            type: 'remove',
            payload: { id }
        });
    }
    
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold my-6">Gerenciamento de Postes</h1>
            <div className="mb-7 flex flex-col gap-3 items-center">
                <input onChange={e => setInputTitle(e.target.value)} type="text" value={inputTitle} className="bg-white w-66 rounded-md p-1 text-2xl text-black" placeholder="Titulo" />
                <textarea onChange={e => setInputBody(e.target.value)} value={inputBody} className="bg-white w-66 rounded-md p-1 mx-3 text-2xl text-black" placeholder="Poste" />
                <button onClick={ addPost } className="bg-white rounded-md text-2xl text-black p-2 transition-transform duration-500 ease-in-out hover:scale-110">Add Poste</button>
            </div>
            {postCtx?.posts.map(i => 
                <div key={i.id} className="flex flex-col gap-2 my-2 items-center">
                    <p className="text-2xl my-2"> { i.title } - { i.body }</p>
                    <div>
                        <button onClick={() => editTitle(i.id)} className="mx-2 bg-blue-800 p-1 rounded-md text-xl transition-transform duration-500 ease-in-out hover:scale-110 hover:cursor-pointer">[ editar titulo ]</button>
                        <button onClick={() => editBody(i.id)} className="mr-2 bg-orange-600 p-1 rounded-md text-xl transition-transform duration-500 ease-in-out hover:scale-110 hover:cursor-pointer">[ editar poste ]</button>
                        <button onClick={() => removePost(i.id)} className="bg-red-800 p-1 rounded-md text-xl transition-transform duration-500 ease-in-out hover:scale-110 hover:cursor-pointer">[ excluir ]</button>
                    </div>
                </div>
            )}
        </div>
    );
}