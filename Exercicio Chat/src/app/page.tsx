"use client"

import { ContainerChat } from "@/components/ContainerChat";
import { ChatProvider } from "@/contexts/ChatContext";

const Page = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <ChatProvider>
        <ContainerChat />
      </ChatProvider>
    </section>
  );
}

export default Page;