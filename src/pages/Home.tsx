import { motion } from 'motion/react';
import { ArrowRight, Star, Users, GraduationCap, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-surface to-surface-dim/30">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
            <div>
              <span 
                className="inline-block py-2 px-5 bg-on-primary-container text-primary text-[10px] md:text-xs font-black rounded-full mb-8 tracking-[0.2em] uppercase border border-primary/10 shadow-sm"
              >
                Empowering Future Leaders
              </span>
              <h1 className="text-[2.75rem] md:text-7xl lg:text-8xl font-display font-bold text-on-surface leading-[0.95] mb-8 tracking-[-0.04em]">
                Shaping the <span className="text-primary italic relative">Ambitions<span className="absolute bottom-1 left-0 h-3 bg-primary/10 -z-10 w-full" /></span> <br className="hidden md:block" /> of Every Young Mind.
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
                S.H.E Hub Academy provides elite consultancy, mentorship, and transformational courses designed to empower teenagers and young adults for global impact.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/courses" className="btn-primary w-full sm:w-auto h-16 text-lg px-12 rounded-2xl group">
                  Explore Courses
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="btn-secondary w-full sm:w-auto h-16 text-lg bg-transparent px-12 rounded-2xl font-bold">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full overflow-hidden pointer-events-none hidden lg:block">
           <div className="w-[600px] h-[600px] bg-primary/10 rounded-full absolute -right-20 top-0 blur-3xl opacity-30"></div>
           <div className="w-[400px] h-[400px] bg-secondary/20 rounded-full absolute -right-40 bottom-0 blur-2xl opacity-20"></div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container rounded-3xl overflow-hidden relative z-10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
                  alt="Young leaders collaborating"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 aspect-square bg-primary-container rounded-3xl -z-0 opacity-10"></div>
              <div className="absolute -top-6 -left-6 p-8 bg-white rounded-2xl z-20 hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="text-primary fill-primary" size={20} />
                  <span className="font-display font-bold text-lg">Top Rated Academy</span>
                </div>
                <p className="text-sm text-on-surface-variant">Recognized for excellence in youth empowerment.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-on-surface leading-tight">
                  More Than Just an Academy; We Are a Movement.
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mt-6">
                  S.H.E Hub Academy was founded on the belief that every young individual carries untapped potential. We bridge the gap between education and real-world leadership through tailored mentorship and modern consultancy.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    'Personalized Mentorship for Teenagers',
                    'Modern Leadership & Soft Skills Training',
                    'Community-Driven Outreach Programs',
                    'Professional Career Guidance'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <ArrowRight size={14} />
                      </div>
                      <span className="font-medium text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold group">
                    Learn our full story
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Tailored Excellence</h2>
            <p className="text-on-surface-variant">Our services are crafted to meet the unique needs of individuals, students, and institutions.</p>
          </div>

          <div className="mobile-scroll-x">
            {[
              {
                title: 'Online Consultancy',
                desc: 'Access world-class expertise from anywhere in the world through virtual sessions.',
                icon: Globe,
                path: '/consultancy'
              },
              {
                title: 'In-Person Coaching',
                desc: 'Intensive physical workshops and school-based programs for hands-on learning.',
                icon: Users,
                path: '/consultancy'
              },
              {
                title: 'Youth Development',
                desc: 'Specialized programs focusing on self-discovery, confidence, and leadership.',
                icon: Star,
                path: '/consultancy'
              },
              {
                title: 'Mentorship',
                desc: 'One-on-one sessions with industry leaders to guide your career path.',
                icon: GraduationCap,
                path: '/consultancy'
              }
            ].map((service, i) => (
              <div
                key={i}
                className="snap-card card-hover p-8 rounded-3xl"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 ring-4 ring-primary/5 transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-on-surface-variant text-base mb-8 leading-relaxed line-clamp-3">{service.desc}</p>
                <Link to={service.path} className="text-primary font-bold flex items-center gap-2 group/btn">
                  Explore <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: 'Teens Reached', value: '5K+' },
              { label: 'Programs', value: '120+' },
              { label: 'Success Stories', value: '450+' },
              { label: 'Global Communities', value: '15+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-display font-bold mb-1">{stat.value}</div>
                <div className="text-primary-fixed-dim font-medium text-[10px] md:text-sm uppercase tracking-widest opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Transform Your Future</h2>
              <p className="text-on-surface-variant">Enroll in our most popular programs and start your journey today.</p>
            </div>
            <Link to="/courses" className="btn-secondary whitespace-nowrap mb-1">
              View All Courses
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="mobile-scroll-x">
            {[
              {
                title: 'The Confident Teen',
                cat: 'Personal Growth',
                price: '$49',
                img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&auto=format&fit=crop&q=80'
              },
              {
                title: 'Modern Leadership',
                cat: 'Leadership',
                price: '$79',
                img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80'
              },
              {
                title: 'Career Launchpad',
                cat: 'Professional',
                price: '$99',
                img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=80'
              }
            ].map((course, i) => (
              <div
                key={i}
                className="snap-card group overflow-hidden rounded-[2rem] bg-white border border-outline-variant/10 shadow-sm md:hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 py-1.5 px-4 bg-white/95 backdrop-blur-sm text-primary text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-sm">
                    {course.cat}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-3 md:group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-on-surface-variant text-base mb-8 leading-relaxed line-clamp-2">Master the essential skills needed for success in the 21st century.</p>
                  <div className="flex items-center justify-between pt-6 border-t border-outline-variant/5">
                    <span className="text-3xl font-display font-bold text-primary">{course.price}</span>
                    <Link to={`/contact?course=${course.title}`} className="btn-primary py-2.5 px-8 text-sm">
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface-dim/30">
        <div className="container-custom">
          <div 
            className="bg-primary-container rounded-3xl p-10 md:p-20 text-white relative overflow-hidden text-center md:text-left shadow-2xl shadow-primary/20 transition-transform duration-500"
          >
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Ready to start your transformation?</h2>
              <p className="text-on-primary-container text-xl mb-12 leading-relaxed opacity-90">
                Join thousands of students and parents who have experienced the life-changing impact of S.H.E Hub Academy programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="px-10 py-5 bg-white text-primary font-bold rounded-xl hover:bg-surface-dim transition-all text-center shadow-2xl shadow-black/20 transform hover:-translate-y-1 active:translate-y-0">
                  Get Started Today
                </Link>
                <Link to="/outreach" className="px-10 py-5 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-xl transition-all text-center backdrop-blur-sm transform hover:-translate-y-1 active:translate-y-0">
                  Learn About Our Impact
                </Link>
              </div>
            </div>
            {/* Abstract circles */}
            <div className="absolute top-0 right-0 w-1/2 h-full -rotate-12 translate-x-1/4 pointer-events-none opacity-20">
               <div 
                className="w-[500px] h-[500px] border-[60px] border-white rounded-full absolute -top-40 -right-40"
               ></div>
               <div 
                className="w-[400px] h-[400px] border-[40px] border-white rounded-full absolute bottom-10 right-10"
               ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
