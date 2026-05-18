import { motion } from 'motion/react';
import { Target, Heart, Shield, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-8 leading-tight">
                Our Mission is to <span className="text-primary italic">Empower</span> Every Story.
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Founded with a deep-seated passion for youth transformation, S.H.E Hub Academy started as a vision to create a space where teenagers and young adults could find clarity, confidence, and direction.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Today, we have grown into a multi-faceted hub that serves as a bridge for students and institutions, providing the tools and mentorship needed to navigate the complexities of the modern world.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544531585-9837bd664d42?w=800&auto=format&fit=crop&q=80"
                  alt="Founder of S.H.E Hub Academy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 bg-primary text-white rounded-xl shadow-xl max-w-xs">
                <p className="font-display font-bold text-lg mb-1">Our Inspiration</p>
                <p className="text-sm opacity-90 italic">"Empowerment is not just a gift, it's a seed we plant for a brighter future."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Card */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white p-12 rounded-2xl shadow-sm border border-outline-variant/20"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4 text-on-surface">Our Mission</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg italic">
                "To equip the youth with essential life skills, personalized mentorship, and professional guidance that foster leadership, confidence, and sustainable impact across global communities."
              </p>
            </div>
            <div
              className="bg-primary p-12 rounded-2xl shadow-xl text-white"
            >
              <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-8">
                <Lightbulb size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
              <p className="text-primary-fixed-dim leading-relaxed text-lg italic">
                "To be the premier global academy for youth empowerment, where every student discovers their voice and every leader leaves an indelible mark on society."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Core Values</h2>
            <p className="text-on-surface-variant">These principles guide everything we do, from our one-on-one sessions to our large-scale outreaches.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', desc: 'We build trust through honesty, transparency, and ethical practices in all our interactions.', icon: Shield },
              { title: 'Confidence', desc: 'We nurture inner strength and self-belief in every young mind we touch.', icon: TrendingUp },
              { title: 'Community', desc: 'We believe in the power of collective growth and supportive environments.', icon: Users },
              { title: 'Excellence', desc: 'We maintain the highest standards in education, consultancy, and personal development.', icon: Heart },
              { title: 'Innovation', desc: 'We adapt to the changing world with creative solutions and forward-thinking strategies.', icon: Lightbulb },
              { title: 'Leadership', desc: 'We inspire students to lead with empathy, vision, and a commitment to positive change.', icon: Target },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-surface-container mx-auto rounded-full flex items-center justify-center text-primary mb-6 transition-transform hover:scale-110">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Leadership & Vision</h2>
            <p className="text-on-surface-variant">The passionate minds behind S.H.E Hub Academy's transformation mission.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-surface-container-highest rounded-2xl overflow-hidden mb-6 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                   <img
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1500648767791-00dcc994a43e' : i === 2 ? '1573496359142-b8d87734a5a2' : i === 3 ? '1560250097-0b93528c311a' : '1508214751196-bcfd4ca60f91'}?w=400&auto=format&fit=crop&q=80`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-display font-bold mb-1">Jane Doe</h3>
                <p className="text-primary text-sm font-semibold mb-2">Lead Mentor</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer shadow-sm">
                      <Linkedin size={14} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Linkedin(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
