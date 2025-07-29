"use client"

import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const Footer = () => {
    const postCtx = useContext(PostContext);

    return (
        <footer className="my-4 text-2xl w-4/5 border-t-2 border-white">
            Total de Posts: {postCtx?.posts.length}
        </footer>
    );
}