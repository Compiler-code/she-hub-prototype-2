import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Heart } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [interest, setInterest] = useState('Online Consultancy');
  const [message, setMessage] = useState('');
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [isVolunteer, setIsVolunteer] = useState(false);

  useEffect(() => {
    const interestParam = searchParams.get('interest');
    const courseParam = searchParams.get('course');
    
    if (interestParam) {
      if (interestParam === 'Volunteer') {
        setInterest('Volunteer Application');
        setIsVolunteer(true);
      }
      if (interestParam === 'Partnership') setInterest('Outreach Partnership');
    }
    
    if (courseParam) {
      setInterest('Course Enrollment');
      setActiveCourse(courseParam);
      setMessage(`I am interested in enrolling in the "${courseParam}" course. Please provide more details.`);
    }
  }, [searchParams]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 bg-surface min-h-screen">
      {/* Header */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="container-custom text-center max-w-3xl relative z-10">
          <div>
            {activeCourse && (
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold mb-6">
                 <Globe size={14} /> Course Registration
               </div>
            )}
            {isVolunteer && (
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-bold mb-6">
                 <Heart size={14} className="fill-secondary" /> Joining the Mission
               </div>
            )}
            <h1 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">
              {activeCourse ? `Enrolling in ${activeCourse}` : isVolunteer ? "Join Our Volunteer Team" : "Get in Touch"}
            </h1>
            <p className="text-on-surface-variant text-lg">
              {activeCourse 
                ? "You're just one step away from transforming your future. Fill out the details below to start your enrollment process."
                : isVolunteer
                ? "Impact lives, build communities, and grow your leadership skills. Tell us a bit about yourself and why you'd like to join us."
                : "We are here to answer your questions and guide you toward the best mentorship or course for your journey."}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div 
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/10"
            >
               <h2 className="text-2xl font-display font-bold mb-8">Send us a Message</h2>
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-on-surface-variant ml-1">Full Name</label>
                     <input
                       type="text"
                       placeholder="John Doe"
                       className="w-full bg-surface border border-outline-variant/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-on-surface-variant ml-1">Email Address</label>
                     <input
                       type="email"
                       placeholder="john@example.com"
                       className="w-full bg-surface border border-outline-variant/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-on-surface-variant ml-1">Phone Number</label>
                     <input
                       type="tel"
                       placeholder="+234..."
                       className="w-full bg-surface border border-outline-variant/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-on-surface-variant ml-1">Service Interest</label>
                     <select 
                       value={interest}
                       onChange={(e) => setInterest(e.target.value)}
                       className="w-full bg-surface border border-outline-variant/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50 appearance-none"
                     >
                        <option>Online Consultancy</option>
                        <option>In-Person Coaching</option>
                        <option>Course Enrollment</option>
                        <option>Outreach Partnership</option>
                        <option>Volunteer Application</option>
                     </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                     <label className="text-sm font-bold text-on-surface-variant ml-1">Your Message</label>
                     <textarea
                       rows={5}
                       value={message}
                       onChange={(e) => setMessage(e.target.value)}
                       placeholder="How can we help you?"
                       className="w-full bg-surface border border-outline-variant/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50 resize-none"
                     ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                     <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary w-full py-4 text-lg shadow-xl shadow-primary/20"
                     >
                        Send Message
                        <Send size={18} />
                     </motion.button>
                  </div>
               </form>
            </div>

            <div className="lg:col-span-5 space-y-12">
               {/* Contact Icons */}
               <div 
                 className="space-y-8"
               >
                  <div className="flex gap-6 group">
                     <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary group-hover:text-white"
                     >
                        <Mail size={24} />
                     </motion.div>
                     <div>
                        <h3 className="font-display font-bold text-xl mb-1">Email Us</h3>
                        <p className="text-on-surface-variant text-sm mb-1">Send us an email anytime</p>
                        <a href="mailto:info@shehubacademy.com" className="text-primary font-bold">info@shehubacademy.com</a>
                     </div>
                  </div>
                  <div className="flex gap-6 group">
                     <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-secondary group-hover:text-white"
                     >
                        <Phone size={24} />
                     </motion.div>
                     <div>
                        <h3 className="font-display font-bold text-xl mb-1">Call Us</h3>
                        <p className="text-on-surface-variant text-sm mb-1">Mon - Fri • 9am - 5pm</p>
                        <a href="tel:+234800SHEHUB" className="text-on-surface font-bold">+234 800 SHE HUB</a>
                     </div>
                  </div>
                  <div className="flex gap-6 group">
                     <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-14 h-14 bg-outline-variant/10 text-outline rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-on-surface group-hover:text-white"
                     >
                        <MapPin size={24} />
                     </motion.div>
                     <div>
                        <h3 className="font-display font-bold text-xl mb-1">Visit Us</h3>
                        <p className="text-on-surface-variant text-sm">123 Innovation Way, Suite 100, Lagos, Nigeria</p>
                     </div>
                  </div>
               </div>

               {/* Office Timing */}
               <div 
                 className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm space-y-6"
               >
                  <h3 className="font-display font-bold text-xl flex items-center gap-2">
                     <Clock className="text-primary" size={24} />
                     Operating Hours
                  </h3>
                  <div className="space-y-3 text-sm">
                     <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                        <span className="text-on-surface-variant">Monday - Friday</span>
                        <span className="font-bold">9:00 AM - 5:00 PM</span>
                     </div>
                     <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                        <span className="text-on-surface-variant">Saturday</span>
                        <span className="font-bold">10:00 AM - 2:00 PM</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-on-surface-variant">Sunday</span>
                        <span className="font-bold text-red-500">Closed</span>
                     </div>
                  </div>
               </div>

               {/* Social Card */}
               <div className="bg-primary p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                  <Globe className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5" />
                  <div className="relative z-10">
                     <h3 className="font-display font-bold text-xl mb-4">Global Reach</h3>
                     <p className="text-primary-fixed-dim text-sm mb-6 leading-relaxed">
                        Follow us on social media for daily tips, inspirational stories, and real-time updates from our outreaches.
                     </p>
                     <div className="flex gap-4">
                        {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((p) => (
                           <div key={p} className="p-3 bg-white/20 rounded-xl hover:bg-white/40 transition-colors cursor-pointer text-xs font-bold uppercase tracking-wider">
                              {p}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Integration Placeholder */}
      <section className="section-padding bg-white">
         <div className="container-custom">
            <div className="bg-surface rounded-3xl p-12 text-center max-w-4xl mx-auto border border-outline-variant/10 shadow-inner">
               <MessageSquare size={48} className="text-primary mx-auto mb-6" />
               <h2 className="text-3xl font-display font-bold mb-6">Book a 15-Min Discovery Call</h2>
               <p className="text-on-surface-variant text-lg mb-8">Not sure which program is right for you? Speak directly with one of our lead consultants for free.</p>
               <button className="btn-secondary px-10 py-4 h-14 bg-white">
                  Open Booking Calendar (Calendly)
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
