import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-400">WomenRise</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/courses" className="text-slate-300 hover:text-teal-400">Courses</Link></li>
            <li><Link to="/network" className="text-slate-300 hover:text-teal-400">Network</Link></li>
            <li><Link to="/resources" className="text-slate-300 hover:text-teal-400">Resources</Link></li>
            <li><Link to="/business-growth" className="text-slate-300 hover:text-teal-400">Business Growth</Link></li>
          </ul>
        </nav>
        <Button asChild variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
}

