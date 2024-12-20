import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function CtaSection() {
  return (
    <section className="bg-slate-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-teal-400">Ready to Take Your Business to the Next Level?</h2>
        <p className="text-xl mb-8 text-slate-300">Join our community of successful women entrepreneurs today.</p>
        <Button asChild size="lg" className="bg-teal-500 text-slate-900 hover:bg-teal-400">
          <Link to="/signup">Get Started Now</Link>
        </Button>
      </div>
    </section>
  );
}

