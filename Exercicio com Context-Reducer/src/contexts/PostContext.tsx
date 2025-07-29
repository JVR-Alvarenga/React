"use client"

import { PostContextType } from "@/types/PostContextType";
import { createContext, ReactNode, useReducer } from "react";
import { postReducer } from "@/reducers/postReducer";

export const PostContext = createContext<PostContextType | null>(null);


export const PostProvider = ({ children }: {children: ReactNode}) => {
    const [posts, dispatch] = useReducer(postReducer, []);

    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            { children }
        </PostContext.Provider>
    );
}