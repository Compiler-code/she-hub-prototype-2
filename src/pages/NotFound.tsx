import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen bg-surface flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white p-12 rounded-3xl shadow-xl border border-outline-variant/10"
        >
          <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="font-display font-bold text-5xl">404</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-on-surface mb-4">Page Not Found</h1>
          <p className="text-on-surface-variant mb-10 leading-relaxed">
            Oops! The page you are looking for has been moved, removed, or never existed in the first place.
          </p>
          <div className="flex flex-col gap-4">
            <Link to="/" className="btn-primary">
              <Home size={18} />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
