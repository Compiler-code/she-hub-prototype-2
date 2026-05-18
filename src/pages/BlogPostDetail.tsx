import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 Tips to Help Your Teen Build Unstoppable Confidence',
    slug: '5-tips-teen-confidence',
    cat: 'Parenting',
    date: 'May 12, 2024',
    author: 'Dr. Jane Smith',
    img: 'https://images.unsplash.com/photo-1529333166437-77054a6dd5a70?w=1200&auto=format&fit=crop&q=80',
    content: `
      <p>Confidence is a skill that can be nurtured. Learn the key psychological triggers that help teenagers thrive.</p>
      <p>Building confidence in teenagers is one of the most rewarding aspects of mentorship. It starts with creating a safe space for them to express themselves without judgment.</p>
      <h2>Understand the Teen Mind</h2>
      <p>Adolescence is a time of rapid brain development. Teenagers are navigating complex social structures and forming their identities. Providing them with tools to handle failure is just as important as celebrating their wins.</p>
      <blockquote>"Confidence doesn't come from being right, but from not fearing to be wrong."</blockquote>
      <h2>Practical Steps</h2>
      <p>1. Encourage positive self-talk.<br/>2. Set achievable milestones.<br/>3. Practice healthy communication.</p>
    `
  },
  {
    id: 2,
    title: 'Navigating Career Choices in the Age of AI',
    slug: 'career-choices-ai-age',
    cat: 'Career',
    date: 'Apr 28, 2024',
    author: 'Alex Johnson',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80',
    content: `
      <p>The job market is changing rapidly. Discover the skills that will remain relevant in an automated world.</p>
      <p>Artificial Intelligence is no longer a future concept—it's here, and it's transforming how we work. For young adults entering the workforce, the key is "human-centric" skills.</p>
      <h2>The Rise of Human Skills</h2>
      <p>While machines excel at data processing, they lack the emotional intelligence and creative critical thinking that humans possess. We focus our mentorship on developing these durable skills.</p>
      <h2>What to Focus On</h2>
      <ul>
        <li>Critical Thinking</li>
        <li>Emotional Intelligence (EQ)</li>
        <li>Adaptive Learning</li>
      </ul>
    `
  },
  {
    id: 3,
    title: 'Why Soft Skills are the New Hard Currency',
    slug: 'soft-skills-hard-currency',
    cat: 'Leadership',
    date: 'Apr 15, 2024',
    author: 'Sarah Lee',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80',
    content: `
      <p>Communication, empathy, and leadership aren't just "soft" anymore—they are essential for professional success.</p>
      <p>In the modern workspace, technical skills might get you the interview, but soft skills get you the job—and the promotion.</p>
      <h2>Redefining "Soft"</h2>
      <p>We prefer to call them "Core Power Skills." They include the ability to communicate vision, resolve conflict, and lead with empathy.</p>
    `
  }
];

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center container-custom">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-surface">
      <article className="bg-white pb-20">
        {/* Banner */}
        <div className="h-[40vh] md:h-[60vh] relative overflow-hidden">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="container-custom pb-12">
              <Link to="/blog" className="inline-flex items-center gap-3 text-white/80 hover:text-white mb-6 transition-all font-medium group">
                <div
                  className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20"
                >
                  <ArrowLeft size={18} />
                </div>
                <span>Back to all articles</span>
              </Link>
              <div className="flex items-center gap-3 text-xs text-secondary-container font-bold uppercase tracking-widest mb-4">
                <Tag size={12} />
                {post.cat}
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant border-b border-outline-variant/10 pb-8 mb-8">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {post.date}</span>
                <span className="flex items-center gap-2"><User size={16} className="text-primary" /> Written by {post.author}</span>
                <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
                  <Share2 size={16} /> Share
                </button>
              </div>

              <div 
                className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-p:leading-relaxed prose-blockquote:border-primary prose-blockquote:bg-surface prose-blockquote:p-6 prose-blockquote:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-16 pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-surface-dim rounded-full flex items-center justify-center font-bold text-primary">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{post.author}</h4>
                    <p className="text-on-surface-variant text-sm">Lead Content Specialist at S.H.E Hub Academy</p>
                  </div>
                </div>
                <button className="btn-secondary">Follow author</button>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-12">
               <div className="bg-surface p-8 rounded-2xl border border-outline-variant/10">
                  <h3 className="font-display font-bold text-xl mb-6">Recent Articles</h3>
                  <div className="space-y-6">
                    {blogPosts.filter(p => p.id !== post.id).map(p => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="group block">
                        <p className="text-xs text-primary font-bold uppercase mb-1">{p.cat}</p>
                        <h4 className="font-display font-bold leading-tight group-hover:text-primary transition-colors">{p.title}</h4>
                      </Link>
                    ))}
                  </div>
               </div>

               <div className="bg-primary-container p-8 rounded-2xl text-white">
                  <h3 className="text-xl font-display font-bold mb-4">Start your journey</h3>
                  <p className="text-on-primary-container text-sm mb-6">Want personalized guidance? Book a discovery session with our lead consultants today.</p>
                  <Link to="/contact" className="block w-full py-3 bg-white text-primary text-center font-bold rounded-lg hover:bg-surface-dim transition-colors">
                     Book Now
                  </Link>
               </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
