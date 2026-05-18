import { motion, AnimatePresence } from 'motion/react';
import { Search, Tag, Calendar, User, ArrowRight, TrendingUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: '5 Tips to Help Your Teen Build Unstoppable Confidence',
    slug: '5-tips-teen-confidence',
    cat: 'Parenting',
    date: 'May 12, 2024',
    author: 'Dr. Jane Smith',
    img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&auto=format&fit=crop&q=80',
    excerpt: 'Confidence is a skill that can be nurtured. Learn the key psychological triggers that help teenagers thrive.'
  },
  {
    id: 2,
    title: 'Navigating Career Choices in the Age of AI',
    slug: 'career-choices-ai-age',
    cat: 'Career',
    date: 'Apr 28, 2024',
    author: 'Alex Johnson',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80',
    excerpt: 'The job market is changing rapidly. Discover the skills that will remain relevant in an automated world.'
  },
  {
    id: 3,
    title: 'Why Soft Skills are the New Hard Currency',
    slug: 'soft-skills-hard-currency',
    cat: 'Leadership',
    date: 'Apr 15, 2024',
    author: 'Sarah Lee',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
    excerpt: 'Communication, empathy, and leadership aren\'t just "soft" anymore—they are essential for professional success.'
  }
];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !selectedTag || post.cat === selectedTag;
    return matchesSearch && matchesTag;
  });

  const popularTopics = ['Parenting', 'Career', 'Leadership'];
  return (
    <div className="pt-24 bg-surface min-h-screen">
      {/* Blog Hero */}
      <section className="py-20 bg-white">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">Insights & Resources</h1>
              <p className="text-on-surface-variant text-lg">Expert advice, event recaps, and practical tips for personal and professional growth.</p>
           </div>
           <div className="w-full md:w-96 flex flex-col gap-4">
              <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
                 <input
                   type="text"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   placeholder="Search articles..."
                   className="w-full bg-surface py-3 pl-10 pr-4 rounded-xl text-sm border border-outline-variant/10 focus:outline-none focus:border-primary transition-colors"
                 />
                 {search && (
                   <button 
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
                   >
                     <X size={14} />
                   </button>
                 )}
              </div>
           </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Blog Main Feed */}
              <div className="lg:col-span-2 space-y-12">
                 <div className="flex items-center justify-between mb-8 overflow-hidden">
                    <div 
                      className="flex items-center gap-4"
                    >
                      <h2 className="text-2xl font-display font-bold text-nowrap">
                        {selectedTag ? `${selectedTag} Articles` : 'Latest Articles'}
                      </h2>
                      <div className="h-0.5 w-12 md:w-24 bg-outline-variant/20"></div>
                    </div>
                    {selectedTag && (
                      <button 
                        onClick={() => setSelectedTag(null)}
                        className="text-xs text-primary font-bold flex items-center gap-1 hover:underline"
                      >
                        Clear Filter <X size={12} />
                      </button>
                    )}
                 </div>

                 <div className="space-y-12">
                    {filteredPosts.length > 0 ? (
                      filteredPosts.map((post) => (
                        <article
                          key={post.id}
                          className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl card-hover transition-colors"
                        >
                           <div className="md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden group">
                              <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                              />
                           </div>
                           <div className="md:w-2/3 flex flex-col">
                              <div className="flex items-center gap-3 text-xs text-primary font-bold uppercase tracking-widest mb-3">
                                 <Tag size={12} />
                                 {post.cat}
                              </div>
                              <h3 className="text-2xl font-display font-bold mb-4 hover:text-primary transition-colors">
                                 {post.title}
                              </h3>
                              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed line-clamp-3">
                                 {post.excerpt}
                              </p>
                              <div className="mt-auto pt-4 flex items-center justify-between text-xs text-on-surface-variant border-t border-outline-variant/5">
                                 <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                 </div>
                                 <Link to={`/blog/${post.slug}`} className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                    Read More <ArrowRight size={14} />
                                 </Link>
                              </div>
                           </div>
                        </article>
                      ))
                    ) : (
                      <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-outline-variant">
                        <p className="text-on-surface-variant">No articles found matching your criteria.</p>
                        <button 
                          onClick={() => { setSearch(''); setSelectedTag(null); }}
                          className="mt-4 text-primary font-bold hover:underline"
                        >
                          Clear all filters
                        </button>
                      </div>
                    )}
                 </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-12">
                 {/* Popular Topics */}
                 <div className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm sticky top-24">
                    <h3 className="text-lg font-display font-bold mb-6 flex items-center gap-2">
                       <TrendingUp size={20} className="text-primary" />
                       Popular Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                       {popularTopics.map((tag) => (
                         <button 
                           key={tag} 
                           onClick={() => setSelectedTag(tag)}
                           className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                              selectedTag === tag 
                              ? 'bg-primary text-white border-primary' 
                              : 'bg-surface text-on-surface-variant border-outline-variant/10 hover:border-primary hover:text-primary'
                           }`}
                         >
                            {tag}
                         </button>
                       ))}
                    </div>
                 </div>

                 {/* Newsletter Signup Overlay */}
                 <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                       <h3 className="text-xl font-display font-bold mb-4">Never miss an update</h3>
                       <p className="text-primary-fixed-dim text-sm mb-6">Weekly insights on empowerment and growth delivered to your inbox.</p>
                       <form className="space-y-4">
                          <input
                            type="email"
                            placeholder="Your email"
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-white transition-colors"
                          />
                          <button className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-surface-dim transition-colors">
                             Subscribe
                          </button>
                       </form>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                 </div>
              </aside>
           </div>
        </div>
      </section>
    </div>
  );
}
