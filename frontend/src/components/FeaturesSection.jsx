import { Link } from 'react-router-dom';
import { Book, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const features = [
  {
    icon: Book,
    title: 'Skill Development',
    description: 'Access a wide range of courses tailored for women entrepreneurs, covering business, technology, and leadership skills.',
    link: '/courses'
  },
  {
    icon: Users,
    title: 'Networking Opportunities',
    description: 'Connect with other women entrepreneurs, mentors, and industry experts to expand your professional network.',
    link: '/network'
  },
  {
    icon: Briefcase,
    title: 'Business Resources',
    description: 'Get access to tools, templates, and guides to help you start, manage, and grow your business effectively.',
    link: '/resources'
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Leverage tailored resources, mentorship, and strategies designed to empower women entrepreneurs and accelerate business growth.',
    link: '/business-growth'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-800" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">Our Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-700">
              <CardHeader>
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                <CardTitle className="text-center text-xl font-semibold text-slate-100">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-300">{feature.description}</CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild className="bg-teal-500 text-slate-900 hover:bg-teal-400">
                  <Link to={feature.link}>Explore {feature.title}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

