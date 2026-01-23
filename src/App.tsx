import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock, Tag, Share2, Github, Twitter, Linkedin, Search, Menu, X, ArrowUpRight } from 'lucide-react';

const POSTS = [
    {
        id: 1,
        title: "The Death of Static Site Generators?",
        desc: "Exploring the shift from traditional SSGs to edge-first hybrid rendering patterns. Why Gatsby is evolving.",
        date: "Jan 24, 2024",
        readTime: "12 min",
        category: "Architecture",
        color: "bg-orange-500"
    },
    {
        id: 2,
        title: "Brutalist Web Design: Back to Basics",
        desc: "Why high-contrast, bold typography and raw layouts are winning back the internet in 2024.",
        date: "Jan 22, 2024",
        readTime: "8 min",
        category: "Design",
        color: "bg-blue-500"
    },
    {
        id: 3,
        title: "Optimizing Core Web Vitals at Scale",
        desc: "A technical guide to achieving perfect Lighthouse scores on enterprise-level React applications.",
        date: "Jan 18, 2024",
        readTime: "15 min",
        category: "Engineering",
        color: "bg-emerald-500"
    }
];

function App() {
    return (
        <div className="min-h-screen bg-white selection:bg-orange-500 selection:text-white">
            {/* Top Bar */}
            <div className="bg-slate-900 py-3 px-6 text-center">
                <p className="text-[10px] font-black text-white uppercase tracking-[0.5em]">System Status: All Nodes Operational • v4.81.0</p>
            </div>

            {/* Navigation */}
            <nav className="border-b-4 border-slate-900 sticky top-0 bg-white/90 backdrop-blur-md z-50">
                <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-orange-500 border-4 border-slate-900 flex items-center justify-center -rotate-6 group cursor-pointer hover:rotate-0 transition-transform">
                            <BookOpen className="w-8 h-8 text-slate-900" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none">THE_<span className="text-orange-600">INDUSTRIAL</span></h1>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Experimental Content Blog</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {['Articles', 'Protocols', 'Laboratory', 'Manifesto'].map(item => (
                            <a key={item} href="#" className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 hover:text-orange-600 transition-colors underline decoration-4 decoration-transparent hover:decoration-orange-600 underline-offset-8">
                                {item}
                            </a>
                        ))}
                        <button className="px-6 py-3 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-brutalist-orange-small">
                            Subscribe
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-20 pb-32">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border-l-8 border-orange-500 pl-12"
                    >
                        <h1 className="heading-xl mb-10">
                            Engineering <br /> <span className="text-slate-300">The Modern</span> <br /> Web Experience.
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed mb-12">
                            A brutalist exploration of modern software architecture, aesthetic frontend development, and the future of distributed content systems.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-brutalist-orange flex items-center gap-3">
                                Read Manifesto <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Categories Grid */}
                <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
                    {['Frontend', 'Scalability', 'Aesthetics', 'Strategy'].map((cat, idx) => (
                        <div key={cat} className="p-10 border-4 border-slate-900 text-center group cursor-pointer hover:bg-orange-500 transition-all">
                            <span className="text-sm font-black uppercase tracking-[0.3em] group-hover:text-white transition-colors">{cat}</span>
                        </div>
                    ))}
                </section>

                {/* Featured Content */}
                <section className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16 border-b-4 border-slate-900 pb-8">
                        <h2 className="text-4xl font-black uppercase tracking-tight">Recent <span className="text-slate-300 italic">Dispatches</span></h2>
                        <div className="flex gap-4">
                            <button className="p-4 bg-slate-100 border-2 border-slate-900 hover:bg-white transition-colors"><Search className="w-5 h-5" /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {POSTS.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="blog-card"
                            >
                                <div className="flex justify-between items-start mb-10">
                                    <div className={`px-4 py-2 ${post.color} border-2 border-slate-900 text-[10px] font-black uppercase tracking-widest text-white`}>
                                        {post.category}
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black leading-tight mb-6 hover:text-orange-600 transition-colors uppercase italic tracking-tight">
                                    {post.title}
                                </h3>

                                <p className="text-slate-500 font-medium mb-10 line-clamp-3 leading-relaxed">
                                    {post.desc}
                                </p>

                                <div className="flex justify-between items-center pt-8 border-t-2 border-slate-100">
                                    <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        <Clock className="w-3 h-3" /> {post.readTime}
                                    </span>
                                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-orange-600 transition-colors">
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>
            </main>

            {/* Industrial Footer */}
            <footer className="bg-slate-900 text-white py-24 border-t-[12px] border-orange-500">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-orange-500 border-2 border-white flex items-center justify-center rotate-3">
                                <BookOpen className="w-6 h-6 text-slate-900" />
                            </div>
                            <h1 className="text-3xl font-black uppercase tracking-tighter">THE_<span className="text-orange-500">INDUSTRIAL</span></h1>
                        </div>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-md mb-12">
                            Analyzing the digital landscape through the lens of industrial design and extreme software engineering.
                        </p>
                        <div className="flex gap-6">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <button key={i} className="p-4 bg-white/5 border border-white/10 hover:bg-orange-500 hover:text-white transition-all rounded-xl">
                                    <Icon className="w-6 h-6" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-orange-500">Core Protocols</h4>
                        <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
                            {['Archive', 'Laboratory', 'Manifesto', 'Glossary'].map(l => (
                                <li key={l}><a href="#" className="hover:text-orange-500 transition-colors">{l}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-orange-500">Support</h4>
                        <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
                            {['Transmission', 'Security', 'Privacy', 'Nodes'].map(l => (
                                <li key={l}><a href="#" className="hover:text-orange-500 transition-colors">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-24 mt-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">© 2026 THE_INDUSTRIAL // DISPATCH_OS • 18/30 DISPATCHED</p>
                    <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
                        Uptime: 99.999%
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
