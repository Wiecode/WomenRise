import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Chatbot from './Chatbot';

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "Business Plan Essentials",
    description: "Learn how to create a comprehensive business plan for your startup.",
    mentor: "Sarah Johnson",
    duration: "4 weeks",
  },
  {
    id: 2,
    title: "Digital Marketing Strategies",
    description: "Master the art of digital marketing to grow your business online.",
    mentor: "Emily Chen",
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "Financial Management for Entrepreneurs",
    description: "Understand key financial concepts to manage your business effectively.",
    mentor: "Maria Rodriguez",
    duration: "5 weeks",
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Available Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>By {course.mentor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
              <p className="mt-2 text-sm text-gray-500">Duration: {course.duration}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-black text-white hover:bg-gray-800">
                <Link to={`/courses/${course.id}`}>Enroll Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Chatbot />
    </div>
  );
}

