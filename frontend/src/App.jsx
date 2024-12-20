import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import Chatbot from './components/Chatbot';
import './app.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;

