import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Chatbot from './Chatbot';

const networkMembers = [
  { id: 1, name: "Alice Johnson", role: "Tech Entrepreneur", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Emma Smith", role: "Marketing Consultant", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Olivia Brown", role: "Financial Advisor", avatar: "/placeholder.svg?height=40&width=40" },
];

export default function NetworkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Networking Opportunities</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {networkMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>Connect with {member.name} to expand your professional network and share insights.</p>
            </CardContent>
            <CardFooter>
              <Button className="bg-black text-white hover:bg-gray-800">Connect</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Chatbot />
    </div>
  );
}

