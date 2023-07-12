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
            <CardContent>
              <p>Mensagens</p>
            </CardContent>
            <CardFooter className='space-x-2'>
              <Input placeholder='How can I help you?'/>
              <Button type='submit'>Send</Button>
            </CardFooter>
        </Card>

    </div>
  )
}
