import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, PlayCircle, Users, GraduationCap, Heart } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Tobi Adebayo",
    role: "Student, University of Lagos",
    text: "The mentorship I received at S.H.E Hub Academy transformed my career outlook. I went from being confused about my major to leading a student organization with confidence.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Mrs. Ngozi Okoro",
    role: "Parent",
    text: "My teenage daughter was struggling with social anxiety. After the 'Confident Teen' course, she found her voice. The change was literally night and day.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Daniel Peters",
    role: "Aspiring Tech Founder",
    text: "The Entrepreneurship course wasn't just theory—it gave me the actual roadmap to launch my startup. The mentors are incredibly supportive and professional.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="pt-24 bg-surface">
      {/* Featured Video / Hero */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <div
            className="max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">Real Stories of Transformation</h1>
            <p className="text-on-surface-variant text-lg">See how S.H.E Hub Academy has empowered students and satisfied parents across the continent.</p>
          </div>

          <div className="max-w-5xl mx-auto aspect-video bg-on-surface rounded-3xl overflow-hidden relative shadow-2xl group cursor-pointer">
             <img
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80"
               alt="Success story video"
               className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <PlayCircle size={80} className="mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-display font-bold">Watch Our Impact Story</h3>
                <p className="opacity-80">A 2-minute journey through our transformation process.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Main Testimonial Slider */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
           <div className="relative bg-white rounded-3xl p-8 md:p-20 shadow-xl border border-outline-variant/10">
              <Quote className="absolute top-10 left-10 text-primary/10 w-24 h-24 md:w-40 md:h-40" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="order-last lg:order-first">
                    <div className="flex gap-1 mb-8">
                       {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                         <Star key={i} size={20} className="text-primary fill-primary" />
                       ))}
                    </div>
                    <p
                      className="text-2xl md:text-3xl font-display italic text-on-surface leading-snug mb-10"
                    >
                       "{testimonials[activeIdx].text}"
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                          <img src={testimonials[activeIdx].img} className="w-full h-full object-cover" alt={testimonials[activeIdx].name} />
                       </div>
                       <div>
                          <h4 className="font-display font-bold text-lg">{testimonials[activeIdx].name}</h4>
                          <p className="text-on-surface-variant text-sm">{testimonials[activeIdx].role}</p>
                       </div>
                    </div>
                 </div>

                 <div className="relative flex items-center justify-center">
                    <div className="aspect-square w-full max-w-sm bg-surface rounded-full flex items-center justify-center p-4">
                       <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative border-8 border-white">
                          <img src={testimonials[activeIdx].img} className="w-full h-full object-cover" alt="Student" />
                       </div>
                    </div>
                    {/* Controls */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
                       <button onClick={prev} className="w-12 h-12 bg-on-surface text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors shadow-lg">
                          <ChevronLeft size={24} />
                       </button>
                       <button onClick={next} className="w-12 h-12 bg-on-surface text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors shadow-lg">
                          <ChevronRight size={24} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { icon: Users, label: 'Happy Students', value: '5,000+' },
                { icon: GraduationCap, label: 'Sessions Completed', value: '12,000+' },
                { icon: Heart, label: 'Parent Satisfaction', value: '98%' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                      <stat.icon size={32} />
                   </div>
                   <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
                   <p className="text-primary-fixed-dim font-medium uppercase tracking-widest text-xs">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonial Wall Preview */}
      <section className="section-padding bg-white">
         <div className="container-custom">
            <h2 className="text-3xl font-display font-bold text-center mb-16">The Wall of Growth</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="p-8 bg-surface rounded-2xl border border-outline-variant/10 hover:shadow-lg transition-all text-sm leading-relaxed text-on-surface-variant flex flex-col">
                    <Quote className="text-primary/10 w-8 h-8 mb-4" />
                    <p className="mb-6">
                       "S.H.E Hub Academy gave me more than just skills. It gave me a network of mentors who truly care about my success. I wouldn't be where I am today without them."
                    </p>
                    <div className="mt-auto flex items-center gap-3">
                       <div className="w-8 h-8 bg-surface-dim rounded-full flex items-center justify-center font-bold text-primary text-[10px]">ST</div>
                       <span className="font-bold text-on-surface">Student {i}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
