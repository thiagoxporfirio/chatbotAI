import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex min-h-screen bg-slate-200 items-center justify-center'>
      <Card className='w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
        <CardHeader>
          <CardTitle>
            Chat AI
          </CardTitle>
          <CardDescription>
            Usando Vercel SDK para criar um bot de bate-papo com AI.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className='flex gap-3 text-slate-600 text-sm'>
            <Avatar >
              <AvatarFallback>TP</AvatarFallback>
              <AvatarImage src='https://github.com/thiagoxporfirio.png' />
            </Avatar>
            <p className='leading-relaxed'>
                <span className='block font-bold text-slate-800'>Humano:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus, harum sed molestias,
               error non cum provident ullam saepe, magni doloremque. Quaerat earum dolorem ullam culpa minima voluptates, assumenda enim.</p>
          </div>

          <div className='flex gap-3 text-slate-600 text-sm'>
            <Avatar >
              <AvatarFallback>IA</AvatarFallback>
              <AvatarImage src='https://github.com/chatgpt.png' />
            </Avatar>
            <p className='leading-relaxed'>
                <span className='block font-bold text-slate-800'>IA:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus, harum sed molestias, error non cum provident ullam saepe,
               magni doloremque. Quaerat earum dolorem ullam culpa minima voluptates, assumenda enim.</p>
            
          </div>
        </CardContent>
        <CardFooter className='space-x-2'>
          <Input placeholder='Como posso lhe ajudar?' />
          <Button type='submit'>Send</Button>
        </CardFooter>
      </Card>

    </div>
  )
}
