"use client"

import { PostContextType } from "@/types/PostContextType";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { postReducer } from "@/reducers/postReducer";

const STORAGE_KEY = 'postContextContent';

export const PostContext = createContext<PostContextType | null>(null);

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }: {children: ReactNode}) => {
    const [posts, dispatch] = useReducer(postReducer, 
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }, [posts]);

    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            { children }
        </PostContext.Provider>
    );
}