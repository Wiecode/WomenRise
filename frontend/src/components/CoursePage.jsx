import { useParams, Link } from 'react-router-dom';
import { Button } from "./ui/button";

// Mock data for courses (same as in the courses page)
const courses = [
  {
    id: 1,
    title: "Business Plan Essentials",
    description: "Learn how to create a comprehensive business plan for your startup.",
    mentor: "Sarah Johnson",
    duration: "4 weeks",
    fullDescription: "This course will guide you through the process of creating a robust business plan. You'll learn how to conduct market research, define your target audience, outline your business model, and create financial projections. By the end of this course, you'll have a professional business plan ready to present to potential investors or partners.",
  },
  {
    id: 2,
    title: "Digital Marketing Strategies",
    description: "Master the art of digital marketing to grow your business online.",
    mentor: "Emily Chen",
    duration: "6 weeks",
    fullDescription: "In this comprehensive course, you'll learn the fundamentals of digital marketing and how to apply them to grow your business. Topics covered include search engine optimization (SEO), social media marketing, content marketing, email marketing, and paid advertising. You'll develop a digital marketing strategy tailored to your business goals.",
  },
  {
    id: 3,
    title: "Financial Management for Entrepreneurs",
    description: "Understand key financial concepts to manage your business effectively.",
    mentor: "Maria Rodriguez",
    duration: "5 weeks",
    fullDescription: "This course is designed to help entrepreneurs understand and manage their business finances. You'll learn about financial statements, budgeting, cash flow management, pricing strategies, and funding options. By the end of the course, you'll have the skills to make informed financial decisions for your business.",
  },
];

export default function CoursePage() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white">{course.title}</h1>
      <p className="text-xl mb-2">Mentor: {course.mentor}</p>
      <p className="text-lg mb-4">Duration: {course.duration}</p>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">Course Description</h2>
        <p className="text-gray-700">{course.fullDescription}</p>
      </div>
      <div className="flex space-x-4">
        <Button size="lg" className="bg-black text-white hover:bg-gray-800">Enroll Now</Button>
        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue hover:text-white">
          <Link to="/courses">Back to Courses</Link>
        </Button>
      </div>
    </div>
  );
}

