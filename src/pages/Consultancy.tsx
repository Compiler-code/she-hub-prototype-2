import { motion } from 'motion/react';
import { Video, Users, Home, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Consultancy() {
  return (
    <div className="pt-24 bg-surface transition-colors duration-300">
      {/* Intro Banner */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">Specialized Consultancy Services</h1>
            <p className="text-primary-fixed-dim text-lg md:text-xl leading-relaxed mb-10 opacity-90">
              Personalized guidance designed to unlock potential, clarify career paths, and build unstoppable confidence in the next generation leaders.
            </p>
            <Link to="/contact" className="px-10 py-5 bg-white text-primary font-bold rounded-xl hover:bg-surface-dim transition-all shadow-2xl inline-block transform hover:-translate-y-1 active:translate-y-0">
              Book a Strategy Session
              <ArrowRight size={18} className="inline ml-2" />
            </Link>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div 
            className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-[100px]"
          ></div>
          <div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-container rounded-full blur-[100px]"
          ></div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div>
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 ring-4 ring-primary/5">
                <Video size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Online Consultancy</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                High-impact virtual coaching tailored to your schedule. Our online consultancy brings the S.H.E Hub expertise directly to you, no matter where you are in the world.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  '1-on-1 Zoom Coaching',
                  'Flexible Scheduling',
                  'Digital Progress Tracking',
                  'Virtual Career Assessments',
                  'Global Mentor Access',
                  'E-Resource Packages'
                ].map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-on-surface font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary py-4 px-10 text-lg">
                Schedule a Virtual session
              </Link>
            </div>
            <div 
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative order-first lg:order-last"
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=80"
                alt="Online consulting session"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div 
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80"
                alt="In-person workshop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/10"></div>
            </div>
            <div>
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8 ring-4 ring-secondary/5">
                <Home size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">In-Person Consultancy</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Tangible impact through face-to-face engagement. We visit schools, organizations, and private spaces to deliver immersive workshops and coaching experiences.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'School-Wide Workshops',
                  'Corporate Talent Coaching',
                  'Physical Career Fairs',
                  'Local Engagement Tours',
                  'In-Person Group Mentorship',
                  'Hands-on Skills Training'
                ].map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-secondary shrink-0" />
                    <span className="text-on-surface font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-secondary border-secondary text-secondary py-4 px-10 hover:bg-secondary/5 text-lg">
                Inquire about Physical Sessions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">How Your Journey Begins</h2>
            <p className="text-on-surface-variant">Three simple steps to unlock a lifetime of transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 hidden md:block -z-0"></div>

            {[
              { num: '01', title: 'Free Initial Inquiry', desc: 'Reach out through our contact form and let us know your specific needs and goals.', icon: Users },
              { num: '02', title: 'Consultation Match', desc: 'We assign you the best mentor based on your profile and schedule your first session.', icon: GraduationCap },
              { num: '03', title: 'Transformation Begins', desc: 'Begin your tailored coaching path with measurable milestones and expert support.', icon: TrendingUp },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-xl mb-8 shadow-lg border-4 border-surface">
                  <step.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Consultation FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'How long is a typical consultancy session?', a: 'Standard sessions range from 45 to 60 minutes depending on the program.' },
              { q: 'Can I choose my mentor?', a: 'While we recommend mentors based on expertise, we prioritize matches that fit the student\'s personality and goals.' },
              { q: 'Are sessions recorded for later review?', a: 'Online sessions can be recorded upon request and shared securely with the client.' },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-surface rounded-xl border border-outline-variant/10">
                <h4 className="font-display font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
