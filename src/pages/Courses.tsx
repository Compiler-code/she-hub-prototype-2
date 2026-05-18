import { motion, AnimatePresence } from 'motion/react';
import { Search, Clock, BookOpen, User, CheckCircle, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'The Confident Teen',
    desc: 'Master the art of self-assurance, public speaking, and internal confidence building.',
    cat: 'Empowerment',
    duration: '6 Weeks',
    instructor: 'Jane Doe',
    mode: 'Online',
    img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&auto=format&fit=crop&q=80',
    price: '$49'
  },
  {
    id: 2,
    title: 'Modern Leadership Foundations',
    desc: 'Learn how to lead teams, projects, and movements in the 21st century.',
    cat: 'Leadership',
    duration: '8 Weeks',
    instructor: 'Alex Smith',
    mode: 'Hybrid',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80',
    price: '$79'
  },
  {
    id: 3,
    title: 'Career Launchpad: 101',
    desc: 'The ultimate guide for students transitioning from school to professional life.',
    cat: 'Career',
    duration: '4 Weeks',
    instructor: 'Michael Brown',
    mode: 'Online',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=80',
    price: '$99'
  },
  {
    id: 4,
    title: 'Effective Communication',
    desc: 'Transform how you interact with others, from writing to public speaking.',
    cat: 'Skills',
    duration: '6 Weeks',
    instructor: 'Sarah Jenkins',
    mode: 'Online',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
    price: '$39'
  },
  {
    id: 5,
    title: 'Entrepreneurship for Genes',
    desc: 'Turn your ideas into a business. Learn basics of finance, marketing and sales.',
    cat: 'Business',
    duration: '10 Weeks',
    instructor: 'David Lee',
    mode: 'Hybrid',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
    price: '$129'
  },
  {
    id: 6,
    title: 'Emotional Intelligence',
    desc: 'Understand and manage your emotions while building empathy for others.',
    cat: 'Personal Growth',
    duration: '5 Weeks',
    instructor: 'Dr. Emily White',
    mode: 'Online',
    img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&auto=format&fit=crop&q=80',
    price: '$59'
  }
];

export default function Courses() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(courses.map(c => c.cat))];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(c => {
    const matchesCat = filter === 'All' || c.cat === filter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-surface">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">Elite Courses & Academy</h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Education designed for the future. Our courses combine rigorous theory with real-world application to ensure total transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-y border-outline-variant/10 sticky top-16 md:top-20 z-30">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="mobile-scroll-x !p-0 !-mx-0 !gap-2 !overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-surface hover:bg-surface-dim text-on-surface-variant border border-outline-variant/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80 group">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
             <input
               type="text"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="Search courses..."
               className="w-full bg-surface py-3.5 pl-12 pr-4 rounded-2xl text-sm border border-outline-variant/10 focus:outline-none focus:border-primary transition-all shadow-sm"
             />
             {searchQuery && (
               <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
               >
                 <X size={14} />
               </button>
             )}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container-custom">
           <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course, i) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all group"
                >
                 <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 py-1 px-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">
                       {course.cat}
                    </div>
                 </div>
                 <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed line-clamp-2">
                       {course.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                       <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <Clock size={14} className="text-primary" />
                          <span>{course.duration}</span>
                       </div>
                       <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <BookOpen size={14} className="text-primary" />
                          <span>{course.mode}</span>
                       </div>
                       <div className="flex items-center gap-2 text-xs text-on-surface-variant col-span-2">
                          <User size={14} className="text-primary" />
                          <span>Instructor: {course.instructor}</span>
                       </div>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                       <span className="text-2xl font-display font-bold text-primary">{course.price}</span>
                       <Link to={`/contact?course=${course.title}`} className="btn-primary py-2 px-6 text-sm flex items-center justify-center">Enroll Now</Link>
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Flagship Section */}
      <section className="section-padding bg-on-surface text-white">
         <div className="container-custom">
            <div className="bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl p-8 md:p-16 border border-white/10 flex flex-col lg:flex-row items-center gap-12">
               <div className="lg:w-1/2 space-y-8">
                  <span className="text-secondary-container text-sm font-bold tracking-widest uppercase">Flagship Program</span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold">The S.H.E Masterclass</h2>
                  <p className="text-surface-dim text-lg leading-relaxed">
                    Our most comprehensive 12-week program designed for young women looking to build careers, confidence, and community impact simultaneously. Includes lifetime mentoring.
                  </p>
                  <div className="space-y-4">
                     {['12 Intensive Workshops', 'Private Mentor Network', 'Certified Leadership Badge', 'Exclusive Networking Events'].map((feat, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <CheckCircle size={20} className="text-secondary-container" />
                          <span>{feat}</span>
                       </div>
                     ))}
                  </div>
                  <Link to="/contact?course=SHE Masterclass" className="px-10 py-4 bg-white text-on-surface font-bold rounded-lg hover:bg-surface-dim transition-colors inline-block text-center">
                     View Masterclass Details
                  </Link>
               </div>
               <div className="lg:w-1/2 rounded-2xl overflow-hidden aspect-video shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80"
                    alt="Masterclass session"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
