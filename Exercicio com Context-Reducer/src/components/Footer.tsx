"use client"

import { usePosts } from "@/contexts/PostContext";

export const Footer = () => {
    const postCtx = usePosts();

    return (
        <footer className="my-4 text-2xl w-4/5 border-t-2 border-white">
            Total de Posts: {postCtx?.posts.length}
        </footer>
    );
}