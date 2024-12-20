import { useState } from 'react';
import { useChat } from 'ai/react';
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { MessageCircle, X } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-teal-500 text-slate-900 hover:bg-teal-400"
        >
          <MessageCircle />
        </Button>
      )}
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center">
            <CardTitle className="flex-grow text-teal-400">WomenRise Assistant</CardTitle>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              className="p-2 text-slate-300 hover:text-teal-400"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-60 w-full pr-4">
              {messages.map(m => (
                <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-teal-500 text-slate-900' : 'bg-slate-700 text-slate-100'}`}>
                    {m.content}
                  </span>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="bg-slate-700 text-slate-100 border-slate-600"
              />
              <Button type="submit" className="bg-teal-500 text-slate-900 hover:bg-teal-400">Send</Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

