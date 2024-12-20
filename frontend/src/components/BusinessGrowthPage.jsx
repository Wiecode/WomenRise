import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BarChart, Users, TrendingUp, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot';

const growthResources = [
  {
    title: "Financial Planning Workshop",
    description: "Learn how to create a solid financial plan for your business growth.",
    icon: BarChart,
    link: "/workshops/financial-planning"
  },
  {
    title: "Mentorship Program",
    description: "Connect with experienced entrepreneurs for personalized guidance.",
    icon: Users,
    link: "/mentorship"
  },
  {
    title: "Growth Strategies Webinar",
    description: "Discover proven strategies to scale your business effectively.",
    icon: TrendingUp,
    link: "/webinars/growth-strategies"
  },
  {
    title: "Networking Events",
    description: "Expand your professional network with like-minded women entrepreneurs.",
    icon: Calendar,
    link: "/events"
  }
];

export default function BusinessGrowthPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Business Growth for Women Entrepreneurs</h1>
      <p className="text-xl mb-8 text-gray-600">Empower your journey with resources tailored for women-led businesses.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {growthResources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <resource.icon className="w-6 h-6 text-black" />
                <span>{resource.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                <Link to={resource.link}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-black">Success Stories</h2>
        <Card>
          <CardHeader>
            <CardTitle>Emily's Tech Startup Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Emily launched her tech startup with the help of our mentorship program and financial planning workshops. Within a year, she secured major funding and expanded her team to 20 employees.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              Read Full Story
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Chatbot />
    </div>
  );
}

