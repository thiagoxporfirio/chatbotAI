"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useChat } from "ai/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  const [githubUsername, setGithubUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleGithubUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGithubUsername(event.target.value);
  };

  const handleModalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <>
      <Dialog.Root open={isModalOpen}>
        <Dialog.Trigger asChild />
        <Dialog.Overlay
          className="fixed inset-0 bg-black/30"
          aria-hidden="true"
        />
        <Dialog.Content className="fixed w-[340px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg">
          <CardDescription className="mb-4">Github Username:</CardDescription>
          <form onSubmit={handleModalSubmit} className="space-y-4">
            <Input
              className="w-full"
              placeholder="Digite seu nome de usuário do GitHub"
              value={githubUsername}
              onChange={handleGithubUsernameChange}
            />
            <Button type="submit" className="w-full">
              Salvar
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Root>

      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Usando Vercel SDK para criar um bot de bate-papo com AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4 w-full">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className="flex gap-3 text-slate-600 text-sm mb-4"
                >
                  {message.role === "user" && (
                    <Avatar>
                      <AvatarFallback>TP</AvatarFallback>
                      <AvatarImage
                        src={`https://github.com/${
                          githubUsername || "default"
                        }.png`}
                      />
                    </Avatar>
                  )}

                  {message.role === "assistant" && (
                    <Avatar>
                      <AvatarFallback>GPT</AvatarFallback>
                      <AvatarImage src="https://github.com/chatgpt.png" />
                    </Avatar>
                  )}

                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-800">
                      {message.role === "user" ? githubUsername : "AI"}:
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
            <Input
              placeholder="Como posso lhe ajudar?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
