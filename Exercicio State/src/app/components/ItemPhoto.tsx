"use client";
import { useState } from 'react';

type Props = {
    imgUrl: string;
    closeImage: () => void;
}

export const ItemPhoto = ({ imgUrl, closeImage }: Props) => {
    return (
        <section className="w-full h-screen flex items-start justify-center">
            <img className="w-4/5 h-screen object-contain" src={imgUrl} />
            <div className="w-1/10 bold text-center h-screen text-3xl object-contain cursor-pointer" onClick={closeImage}> x </div>
        </section>
    );
}