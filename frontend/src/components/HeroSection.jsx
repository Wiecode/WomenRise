import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-400">Empowering Women Entrepreneurs</h1>
          <p className="text-xl mb-8 text-slate-300">Develop your skills, grow your business, and connect with a supportive community of like-minded women.</p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-teal-500 text-slate-900 hover:bg-teal-400">
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900">
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

