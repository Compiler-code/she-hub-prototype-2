import { motion } from 'motion/react';
import { Heart, Users, MapPin, Calendar, ArrowRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const outreachEvents = [
  {
    title: 'Future Leaders Summit 2024',
    location: 'Lagos City Hall',
    date: 'Dec 12, 2024',
    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80',
    stat: '1,200+ Teens'
  },
  {
    title: 'Rural Education Initiative',
    location: 'Ogun State Community',
    date: 'Oct 05, 2024',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
    stat: '300 Students'
  },
  {
    title: 'Career Day in Slums',
    location: 'Makoko Waterfront',
    date: 'Aug 20, 2024',
    img: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=800&auto=format&fit=crop&q=80',
    stat: '500 Families'
  }
];

export default function Outreach() {
  return (
    <div className="pt-24 bg-surface">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart size={32} className="fill-primary/20" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">Our Community Impact</h1>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Beyond the classroom, we are on the frontlines of youth empowerment. Our outreach programs focus on reaching the underserved and providing them with hope, tools, and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-primary text-white">
         <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
               <div>
                  <div className="text-4xl font-display font-bold">20,000+</div>
                  <p className="text-primary-fixed-dim text-sm">Lives Touched</p>
               </div>
               <div>
                  <div className="text-4xl font-display font-bold">50+</div>
                  <p className="text-primary-fixed-dim text-sm">Schools Covered</p>
               </div>
               <div>
                  <div className="text-4xl font-display font-bold">100+</div>
                  <p className="text-primary-fixed-dim text-sm">Active Volunteers</p>
               </div>
               <div>
                  <div className="text-4xl font-display font-bold">8</div>
                  <p className="text-primary-fixed-dim text-sm">States in Nigeria</p>
               </div>
            </div>
         </div>
      </section>

      {/* Gallery / Events Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-display font-bold">Past Initiatives</h2>
             <span className="text-primary font-bold hidden md:block">Scroll through our journey</span>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {outreachEvents.map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-video relative group overflow-hidden">
                   <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                    referrerPolicy="no-referrer"
                  />
                   <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-primary transition-colors">
                      <Share2 size={16} />
                   </div>
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 text-primary font-bold text-xs mb-3 uppercase tracking-wider">
                      <MapPin size={14} />
                      {event.location}
                   </div>
                   <h3 className="text-xl font-display font-bold mb-4">{event.title}</h3>
                   <div className="flex items-center justify-between py-4 border-t border-outline-variant/10">
                      <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
                         <Calendar size={16} />
                         {event.date}
                      </div>
                      <div className="py-1 px-3 bg-surface text-primary text-xs font-bold rounded-lg border border-primary/10">
                         {event.stat}
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="section-padding bg-white">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-last lg:order-first">
                  <div className="grid grid-cols-2 gap-4">
                     <img
                       src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop&q=80"
                       className="rounded-2xl shadow-lg"
                       alt="Volunteer 1"
                     />
                     <img
                       src="https://images.unsplash.com/photo-1559023485-6663102ca14d?w=400&auto=format&fit=crop&q=80"
                       className="rounded-2xl shadow-lg mt-8"
                       alt="Volunteer 2"
                     />
                  </div>
               </div>
               <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-on-surface">Join the Movement as a Volunteer</h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    Our impact is fueled by dedicated individuals like you. Whether you are a professional looking to mentor or a student wanting to give back, there is a place for you in our hub.
                  </p>
                  <div className="space-y-4">
                     {[
                       'Gain mentoring experience',
                       'Impact lives across Nigeria',
                       'Exclusive volunteer training sessions',
                       'Certificate of Service and Impact'
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white">
                             <ArrowRight size={10} />
                          </div>
                          <span className="font-semibold text-on-surface">{item}</span>
                       </div>
                     ))}
                  </div>
                  <Link to="/contact?interest=Volunteer" className="btn-primary py-4 px-12 text-lg shadow-xl shadow-primary/20 inline-block text-center">
                     Apply to Volunteer
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
