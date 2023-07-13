'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useChat } from 'ai/react'
import { ScrollArea } from '@/components/ui/scroll-area'


export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    })


    return (
        <Card className='w-[440px]'>
            <CardHeader>
                <CardTitle>
                    Chat AI
                </CardTitle>
                <CardDescription>
                    Usando Vercel SDK para criar um bot de bate-papo com AI.
                </CardDescription>
            </CardHeader>
            <CardContent>
               <ScrollArea  className='h-[600px] pr-4 w-full'>
               {messages.map(message => {
                    return (
                        <div key={message.id} className='flex gap-3 text-slate-600 text-sm mb-4'>
                            {message.role === 'user' && (
                                <Avatar >
                                    <AvatarFallback>TP</AvatarFallback>
                                    <AvatarImage src='https://github.com/thiagoxporfirio.png' />
                                </Avatar>
                            )}

                            {message.role === 'assistant' && (
                                <Avatar >
                                    <AvatarFallback>GPT</AvatarFallback>
                                    <AvatarImage src='https://github.com/chatgpt.png' />
                                </Avatar>
                            )}

                            <p className='leading-relaxed'>
                                <span className='block font-bold text-slate-800'>
                                    {message.role === 'user' ? 'User' : 'AI'}:
                                </span>
                                {message.content}
                                </p>
                        </div>
                    )
                })}
               </ScrollArea>
               

            </CardContent>
            <CardFooter>
                <form className='flex gap-2 w-full' onSubmit={handleSubmit}>
                    <Input placeholder='Como posso lhe ajudar?' value={input} onChange={handleInputChange} />
                    <Button type='submit'>Send</Button>
                </form>

            </CardFooter>
        </Card>
    )
}