import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Download } from 'lucide-react';
import Chatbot from './Chatbot';

const resources = [
  { id: 1, title: "Business Plan Template", description: "A comprehensive template to help you create a solid business plan.", type: "Template" },
  { id: 2, title: "Marketing Strategy Guide", description: "Learn how to create an effective marketing strategy for your business.", type: "Guide" },
  { id: 3, title: "Financial Projections Spreadsheet", description: "An Excel spreadsheet to help you create financial projections for your business.", type: "Tool" },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Business Resources</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{resource.title}</span>
              </CardTitle>
              <CardDescription>{resource.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{resource.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Chatbot />
    </div>
  );
}

