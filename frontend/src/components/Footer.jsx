import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">WomenRise</h3>
            <p className="text-sm">Empowering women entrepreneurs through education, networking, and resources.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:text-teal-400">About Us</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">Courses</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">Events</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Support</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:text-teal-400">FAQs</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">Contact Us</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Connect With Us</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:text-teal-400">Facebook</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">Twitter</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">LinkedIn</Link></li>
              <li><Link to="#" className="text-sm hover:text-teal-400">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm">&copy; 2023 WomenRise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

