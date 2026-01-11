import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Instagram, Twitter, Github, Menu, X, ArrowUpRight, ArrowDown, ExternalLink } from 'lucide-react';
import ProjectDetail from './ProjectDetail.jsx';

// --- 静态数据和子组件移至外部，防止重复定义 ---

const navItems = [
    { id: 'home', label: '首页' },
    { id: 'work', label: '作品' },
    { id: 'research', label: '研究' }, // 新增 Research 导航
    { id: 'about', label: '关于' },
    { id: 'contact', label: '联系' },
];

const projects = [
    {
        id: 1,
        title: "MoArt Essence",
        category: "UI/UX Design",
        year: "2025",
        description: "艺术与传统文化的融合",
        image: "/portfolio/MoArt Essence/cover.jpg",
        galleryImages: [
            "/portfolio/MoArt Essence/Group 6.jpg",
            "/portfolio/MoArt Essence/cover.jpg",
            "/portfolio/MoArt Essence/Page2.jpg",
            "/portfolio/MoArt Essence/Page3.jpg",
            "/portfolio/MoArt Essence/Page4.jpg"
        ],
        className: "col-span-1"
    },
    {
        id: 2,
        title: "The Unbound Journey",
        category: "Interactive Design",
        year: "2026",
        description: "探索无界旅程，创造沉浸式的用户体验和叙事设计。",
        image: "/portfolio/The Unbound Journey/main.jpg",
        galleryImages: [
            "/portfolio/The Unbound Journey/main.jpg"
        ],
        className: "col-span-1 md:mt-32"
    },
    {
        id: 3,
        title: "Braille Bloom",
        category: "Accessibility Design",
        year: "2024",
        description: "为视障人士设计的盲文学习系统，让无障碍设计绽放光彩。",
        image: "/portfolio/Braille Bloom/cover.png",
        galleryImages: [
            "/portfolio/Braille Bloom/cover.png",
            "/portfolio/Braille Bloom/page2.jpg"
        ],
        className: "col-span-1"
    },
    {
        id: 4,
        title: "Methodmate",
        category: "Research & Development",
        year: "2025",
        description: "研究方法论的数字化工具，助力学术研究的系统化管理。",
        image: "/portfolio/Methodmate/cover.png",
        galleryImages: [
            "/portfolio/Methodmate/cover.png"
        ],
        className: "col-span-1 md:mt-32"
    }
];

// 模拟的研究数据
const publications = [
    {
        id: 1,
        title: "MethodMate: Supporting Novice HCI Researchers in Designing Quantitative Research Proposals with LLMs",
        conference: "Under Review",
        year: "2025",
        link: "#",
        tags: ["HCI", "LLMs"],
        Author: "Qi, Liu, Yike Jin , et al."
    },
    {
        id: 2,
        title: "Evolving Personalized GUI Agent with Privacy-preserving GUI Hub",
        conference: "Writing",
        year: "2026",
        link: "#",
        tags: ["ML", "LLMs", "Agent"]
    }
];

const researchInterests = [
    "Human-Computer Interaction (HCI)",
    "Machine Learning",
    "Large Language Models(LLMs)",
    "Agent Self-evolution"
];

// 项目经验数据
const projectExperiences = [
    {
        id: 1,
        title: "Intern in International Design Institute of Zhejiang University",
        role: "Intern",
        period: "2025.5 - 2025.12",
        description: "Developed an intelligent system to assist novice HCI researchers in designing quantitative research proposals using Large Language Models.",
        tags: ["React", "Python", "LLMs", "HCI"]
    },
    {
        id: 2,
        title: "Research on Agent Self-evolution and Loras",
        role: "Intern",
        period: "2025.12 - Present",
        description: "Related to Agent self-evolution",
        tags: ["Agent", "ML", "Privacy", "GUI"]
    },
    {
        id: 3,
        title: "SRTP Project: Research on Multimodal Data-Driven Models for Music Emotion Recognition and Generation ",
        role: "Project Leader",
        period: "2025.3 - 2025.12",
        description: "Using LLMs to generate music based on the emotion of the music.",
        tags: ["LLMs", "Music", "Emotion Recognition", "Transformer"]
    },
    {
        id: 4,
        title: "Internship in Hangzhou NetEase Leihuo Technology Co., Ltd.",
        role: "UX Designer",
        period: "2025.7 - 2025.9",
        description: "Design and Developing a game",
        tags: ["UX", "Game", "Design", "Developing"]
    }
];

// 页面切换动画容器
const PageTransition = ({ children, className = "" }) => (
    <div className={`animate-fade-in-up ${className}`}>
        {children}
    </div>
);

// --- 独立的视图组件 ---

const HomeView = ({ onNavigate }) => {
    // 提取标题块组件，便于复用以实现双色叠加效果
    const TitleBlock = ({ className = "", colorClass, style = {} }) => (
        <div className={`flex flex-col justify-center ${className}`} style={style}>
            <div className="overflow-hidden">
                <h1 className={`text-[13vw] md:text-[10vw] font-serif font-light tracking-tighter leading-[0.85] ${colorClass} animate-reveal-up origin-bottom`}>
                    DESIGN
                </h1>
            </div>
            <div className="overflow-hidden pl-[4vw] md:pl-[8vw]">
                <h1 className={`text-[13vw] md:text-[10vw] font-serif italic font-light tracking-tighter leading-[0.85] ${colorClass} animate-reveal-up origin-bottom`} style={{ animationDelay: '0.15s' }}>
                    IS
                </h1>
            </div>
            <div className="overflow-hidden">
                <h1 className={`text-[13vw] md:text-[10vw] font-serif font-medium tracking-tighter leading-[0.85] ${colorClass} animate-reveal-up origin-bottom`} style={{ animationDelay: '0.3s' }}>
                    SILENCE
                </h1>
            </div>
        </div>
    );

    return (
        <PageTransition className="w-full">
            {/* 1. Hero Section (首屏) */}
            <div className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
                <div className="w-full max-w-[90vw] grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">

                    {/* 左侧：艺术排版标题 - 隐形分割线双色效果 */}
                    <div className="md:col-span-8 relative select-none">

                        {/* 占位符：用于撑开父容器高度，不可见 */}
                        <TitleBlock className="opacity-0 pointer-events-none" colorClass="text-stone-900" />

                        {/* 左半部分：深色 (只显示 0% 到 38% 的区域) */}
                        <div className="absolute inset-0 z-10" style={{ clipPath: 'polygon(0 0, 38% 0, 38% 100%, 0 100%)' }}>
                            <TitleBlock colorClass="text-stone-900" />
                        </div>

                        {/* 右半部分：浅色 (只显示 38% 到 100% 的区域) */}
                        {/* 修改颜色为 text-stone-300 以增强对比度 */}
                        <div className="absolute inset-0 z-10" style={{ clipPath: 'polygon(38% 0, 100% 0, 100% 100%, 38% 100%)' }}>
                            <TitleBlock colorClass="text-stone-300" />
                        </div>
                    </div>

                    {/* 右侧：简介与导航 */}
                    <div className="md:col-span-4 flex flex-col justify-end h-full md:pl-0 md:-ml-6 relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
                        <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-stone-300 to-transparent"></div>

                        <div className="space-y-8 backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl md:rounded-none">
                            <p className="font-serif italic text-2xl md:text-3xl text-stone-400">
                                "Less is more."
                            </p>

                            <div className="space-y-6">
                                <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed text-justify max-w-sm">
                                    你好，我是 <strong className="text-stone-900 font-serif text-lg mx-1">Yike Jin</strong>。
                                    <br className="mb-2" />
                                    一名游走于代码与艺术之间的数字工匠。<br />
                                    致力于剥离繁杂，创造具有情感共鸣的 <span className="italic font-serif text-stone-800 border-b border-stone-300">极简数字体验</span>。
                                </p>

                                <button
                                    onClick={() => onNavigate('work')}
                                    className="group cursor-hover flex items-center gap-4 text-xs font-mono uppercase tracking-[0.25em] text-stone-900 pt-4"
                                >
                                    <span className="w-8 h-[1px] bg-stone-900 transition-all duration-500 ease-out group-hover:w-24"></span>
                                    Explore Works
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 滚动提示 */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce-slow mix-blend-multiply">
                    <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-stone-900"></div>
                </div>

                {/* 背景装饰 */}
                <div className="absolute top-0 right-0 w-full md:w-[40vw] h-full bg-[#f2f0e9] -z-10 transform skew-x-12 translate-x-32 opacity-60"></div>
                <div className="fixed top-1/2 left-1/4 w-[50vw] h-[50vw] bg-gradient-to-tr from-white to-transparent rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
            </div>

            {/* 2. Philosophy Section - 布局优化：交错式布局，填充左侧 */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-200">

                {/* Row 1: 左侧标题，右侧内容 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
                    <div className="md:sticky md:top-32">
                        <h2 className="text-4xl md:text-6xl font-serif leading-tight text-stone-900">
                            The art of <br />
                            <span className="italic text-stone-400">subtraction</span>.
                        </h2>
                        <div className="mt-8 w-16 h-16 rounded-full border border-stone-300 flex items-center justify-center animate-spin-slow opacity-50">
                            <ArrowDown className="w-6 h-6 text-stone-400" />
                        </div>
                    </div>

                    <div className="space-y-12 group cursor-hover pt-4">
                        <p className="text-xl md:text-2xl font-light text-stone-600 leading-relaxed">
                            在嘈杂的数字时代，沉默是一种奢侈。我们不仅是在设计界面，更是在设计“留白”。
                        </p>
                        <p className="text-stone-500 leading-relaxed">
                            每一个像素的省略，都是为了让核心信息更清晰地呼吸。我不追求繁复的装饰，而是追求结构本身的韵律感。
                        </p>
                        <div className="w-full aspect-[16/9] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 ease-out mt-8">
                            <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" alt="Minimalism" />
                        </div>
                    </div>
                </div>

                {/* Row 2: 布局反转 - 左侧文字，右侧视觉元素 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 group cursor-hover order-2 md:order-1">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-4 border-l-2 border-stone-900 pl-4">The Process</h3>
                        <p className="text-3xl md:text-4xl font-serif text-stone-800 leading-tight">
                            构建情感的容器
                        </p>
                        <p className="text-stone-500 leading-relaxed text-lg font-light">
                            真实的连接发生在我们放下装饰、直面本质的时刻。通过代码与设计的共生，我们构建的不仅仅是工具。
                        </p>
                        <p className="text-stone-500 leading-relaxed">
                            从交互的微反馈到字体的微调，每一处细节都在讲述故事。设计不仅仅是所见，更是所感。
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
                        <div className="aspect-[3/4] bg-stone-200 overflow-hidden transform translate-y-8">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" loading="lazy" decoding="async" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Texture 1" />
                        </div>
                        <div className="aspect-[3/4] bg-stone-300 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1507643179173-442f01fc12a9?auto=format&fit=crop&q=80&w=600" loading="lazy" decoding="async" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Texture 2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Marquee Section (流动文字) */}
            <section className="py-24 border-t border-stone-200 overflow-hidden bg-stone-100/50">
                <div className="whitespace-nowrap flex gap-8 animate-marquee select-none pointer-events-none">
                    {Array(8).fill("MINIMALISM • STRUCTURE • EMOTION • ").map((text, i) => (
                        <span key={i} className="text-6xl md:text-9xl font-serif text-transparent stroke-text">{text}</span>
                    ))}
                </div>
            </section>
        </PageTransition>
    );
};

const WorkView = ({ onProjectClick }) => (
    <PageTransition className="pt-32 pb-20">
        <div className="mb-24 flex items-end justify-between border-b border-stone-200 pb-6">
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900">Works</h2>
            <span className="text-xs font-mono text-stone-400 mb-2">/ 01 — 04</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-40">
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    onClick={() => onProjectClick(project)}
                    className={`group cursor-pointer cursor-hover ${project.className}`}
                >
                    <div className="overflow-hidden relative mb-6 shadow-xl shadow-stone-200/50 aspect-[3/4]">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 group-hover:grayscale-0 grayscale"
                        />

                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>

                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 bg-white p-4 rounded-full shadow-lg">
                            <ArrowUpRight className="w-5 h-5 text-black" />
                        </div>
                    </div>

                    <div className="space-y-3 px-2">
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-3xl font-serif group-hover:text-stone-600 transition-colors duration-300">{project.title}</h3>
                            <span className="text-xs font-mono text-stone-400 border border-stone-200 px-2 py-1 rounded-full">{project.year}</span>
                        </div>
                        <div className="flex justify-between items-start pt-2 border-t border-stone-100">
                            <p className="text-xs font-mono uppercase tracking-widest text-stone-400">{project.category}</p>
                        </div>
                        <p className="text-sm text-stone-600 leading-relaxed max-w-md pt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </PageTransition>
);

// --- 新增：研究页面组件 ---
const ResearchView = () => (
    <PageTransition className="pt-32 pb-20 max-w-5xl mx-auto">
        <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">Research</h2>
            <p className="text-xl md:text-2xl font-light text-stone-500 max-w-2xl leading-relaxed">
                游走于科技与艺术的边缘，我的研究涵盖计算机科学、人机交互与极简美学。
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* 侧边栏：研究方向 */}
            <div className="md:col-span-4 space-y-12">
                <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-6 border-b border-stone-200 pb-2">
                        Research Interests
                    </h3>
                    <ul className="space-y-4">
                        {researchInterests.map((interest, idx) => (
                            <li key={idx} className="text-stone-600 font-light flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-stone-300 rounded-full"></span>
                                {interest}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-stone-100 p-6 rounded-lg">
                    <p className="text-sm text-stone-500 font-serif italic">
                        "Research is seeing what everybody else has seen and thinking what nobody else has thought."
                    </p>
                </div>
            </div>

            {/* 主内容：论文列表 */}
            <div className="md:col-span-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-8 border-b border-stone-200 pb-2">
                    Selected Publications
                </h3>

                <div className="space-y-12">
                    {publications.map((pub) => (
                        <div key={pub.id} className="group cursor-hover">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-mono text-xs text-stone-400 pt-1">{pub.year}</span>
                                <a href={pub.link} className="p-2 bg-transparent group-hover:bg-stone-100 rounded-full transition-colors">
                                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-stone-900" />
                                </a>
                            </div>

                            <h4 className="text-2xl font-serif text-stone-800 leading-tight mb-3 group-hover:text-stone-500 transition-colors">
                                {pub.title}
                            </h4>

                            <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                                <span className="font-semibold text-stone-700">{pub.conference}</span>
                                <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                                <span>Author: {pub.Author}.</span>
                            </div>

                            <div className="flex gap-2">
                                {pub.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider border border-stone-200 px-2 py-1 rounded text-stone-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 项目经验 */}
                <div className="mt-24">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-8 border-b border-stone-200 pb-2">
                        Project Experience
                    </h3>

                    <div className="space-y-12">
                        {projectExperiences.map((project) => (
                            <div key={project.id} className="group cursor-hover">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-mono text-xs text-stone-400 pt-1">{project.period}</span>
                                </div>

                                <h4 className="text-2xl font-serif text-stone-800 leading-tight mb-3 group-hover:text-stone-500 transition-colors">
                                    {project.title}
                                </h4>

                                <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                                    <span className="font-semibold text-stone-700">{project.role}</span>
                                </div>

                                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider border border-stone-200 px-2 py-1 rounded text-stone-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </PageTransition>
);

const AboutView = () => (
    <PageTransition className="pt-32 pb-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5 relative">
                <div className="w-full aspect-[3/4] overflow-hidden relative z-10">
                    <img
                        src="/image/me.jpg"
                        alt="Portrait"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-6 -left-6 w-full h-full border border-stone-300 -z-0"></div>

                <div className="mt-8 space-y-6 font-mono text-xs uppercase tracking-widest text-stone-500">
                    <div className="flex justify-between border-b border-stone-200 pb-2">
                        <span className="text-stone-900">Location</span>
                        <span>Hangzhou, ZJ, CN</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-200 pb-2">
                        <span className="text-stone-900">Education</span>
                        <span>Zhejiang University</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-200 pb-2">
                        <span className="text-stone-900">Focus</span>
                        <span>Design & Computer Science</span>
                    </div>
                </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-serif leading-tight text-stone-900">
                    我不只是在写代码，<br />
                    我在构建 <span className="italic text-stone-400 font-light">数字景观</span>。
                </h2>

                <div className="space-y-8 text-stone-600 leading-loose text-lg font-light">
                    <p>
                        作为一名创意开发者与设计师，我相信技术的终极目标是隐形的。好的设计不应该被感知为“设计”，而应该被感知为一种自然的流动。
                    </p>
                    <p>
                        深受包豪斯极简主义和日本侘寂美学（Wabi-sabi）的影响，我的作品倾向于剥离多余的装饰，保留事物的核心本质。我喜欢在完美的像素网格中寻找有机的秩序。
                    </p>
                </div>

                <div className="pt-12">
                    <h3 className="font-serif text-2xl italic mb-6 text-stone-900">Skills</h3>
                    <ul className="space-y-4 text-stone-600 font-light">
                        {['Interactive Design', 'UI/UX Design', 'Development & Programming', 'Deep Learning & LLMs'].map(skill => (
                            <li key={skill} className="flex items-center gap-4 group cursor-hover">
                                <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-stone-900 transition-colors"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </PageTransition>
);

const ContactView = () => (
    <PageTransition className="min-h-[80vh] flex flex-col justify-center pt-20">
        <div className="relative">
            <h1 className="text-[13vw] font-serif leading-none text-stone-200 tracking-tighter absolute -top-24 left-0 -z-10 select-none opacity-50">
                Connect
            </h1>

            <div className="relative z-10 max-w-5xl ml-auto mr-auto text-center">
                <p className="text-xl md:text-2xl font-light text-stone-500 mb-16">
                    有一个有趣的想法？或者只是想聊聊？
                </p>

                <a
                    href="mailto:jin-yike@zju.edu.cn"
                    className="cursor-hover group relative inline-block"
                >
                    <span className="text-6xl md:text-8xl font-serif text-stone-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-stone-800 group-hover:to-stone-500 transition-all duration-500">
                        jin-yike@zju.edu.cn
                    </span>
                    <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </a>

                <div className="mt-32 flex justify-center gap-12 md:gap-24">
                    {[
                        { icon: Instagram, label: "Instagram", link: "#" },
                        { icon: Twitter, label: "Twitter", link: "#" },
                        { icon: Github, label: "Github", link: "https://github.com/bmh201708" },
                        { icon: Mail, label: "Email", link: "mailto:jin-yike@zju.edu.cn" },
                    ].map((item, idx) => (
                        <a key={idx} href={item.link} className="cursor-hover flex flex-col items-center gap-3 group">
                            <div className="p-4 rounded-full border border-stone-200 group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-300">
                                <item.icon className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </PageTransition>
);

// --- 主组件 ---

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const cursorDotRef = useRef(null);
    const cursorRingRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
        };

        const handleHoverCheck = (e) => {
            if (!cursorRingRef.current) return;
            const isHover = e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('.cursor-hover');
            if (isHover) {
                cursorRingRef.current.classList.add('cursor-active');
            } else {
                cursorRingRef.current.classList.remove('cursor-active');
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', handleHoverCheck);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleHoverCheck);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans overflow-x-hidden transition-colors duration-700 cursor-none">

            {/* 自定义光标 */}
            <div
                ref={cursorRingRef}
                className="fixed w-8 h-8 border border-stone-800 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference transition-all duration-300 ease-out origin-center top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            ></div>
            <div
                ref={cursorDotRef}
                className="fixed w-1 h-1 bg-stone-800 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            ></div>

            {/* 噪点纹理叠加 */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* 顶部导航 */}
            <header className={`fixed top-0 left-0 right-0 z-40 px-6 py-8 md:px-16 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-sm py-4 border-b border-stone-100' : ''}`}>
                <div
                    className="cursor-hover text-2xl font-serif font-bold tracking-tighter cursor-pointer relative z-50 mix-blend-difference text-stone-900"
                    onClick={() => setActiveTab('home')}
                >
                    Y.K.
                </div>

                {/* 桌面端菜单 */}
                <nav className="hidden md:flex gap-12 mix-blend-multiply">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`cursor-hover relative text-xs uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === item.id ? 'text-stone-900 font-bold' : 'text-stone-400 hover:text-stone-600'}`}
                        >
                            {item.label}
                            {activeTab === item.id && (
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-stone-900 rounded-full"></span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* 移动端菜单按钮 */}
                <button
                    className="md:hidden z-50 text-stone-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </header>

            {/* 移动端全屏菜单 */}
            <div className={`fixed inset-0 bg-[#FDFBF7] z-40 flex flex-col justify-center items-center gap-10 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            setActiveTab(item.id);
                            setIsMenuOpen(false);
                        }}
                        className="text-5xl font-serif hover:italic transition-all text-stone-900"
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* 主要内容区域 */}
            <main className="px-6 md:px-16 md:ml-24 md:mr-24 min-h-screen relative">
                <div className="max-w-7xl mx-auto">
                    {selectedProject ? (
                        <ProjectDetail
                            project={selectedProject}
                            onBack={() => setSelectedProject(null)}
                        />
                    ) : (
                        <>
                            {activeTab === 'home' && <HomeView onNavigate={setActiveTab} />}
                            {activeTab === 'work' && <WorkView onProjectClick={setSelectedProject} />}
                            {activeTab === 'research' && <ResearchView />}
                            {activeTab === 'about' && <AboutView />}
                            {activeTab === 'contact' && <ContactView />}
                        </>
                    )}
                </div>
            </main>

            {/* 固定页脚 */}
            <footer className="fixed bottom-8 left-8 md:left-16 text-[10px] font-mono text-stone-400 uppercase tracking-widest hidden md:block mix-blend-multiply">
                © 2025 Jin Yike Portfolio.
            </footer>

            {/* 社交链接 */}
            <div className="fixed bottom-8 right-8 md:right-16 hidden md:flex gap-6 mix-blend-multiply">
                <a href="#" className="cursor-hover text-stone-400 hover:text-stone-900 transition-colors"><Twitter size={16} /></a>
                <a href="#" className="cursor-hover text-stone-400 hover:text-stone-900 transition-colors"><Instagram size={16} /></a>
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&family=Space+Mono&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .font-mono {
          font-family: 'Space Mono', monospace;
        }
        
        .cursor-active {
          width: 80px !important;
          height: 80px !important;
          background-color: rgba(255, 255, 255, 0.1);
          border-color: transparent;
        }
        
        .stroke-text {
          -webkit-text-stroke: 1px #d6d3d1;
          color: transparent;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        .animate-reveal-up {
          animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(100%);
        }

        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce-slow {
           animation: bounce 3s infinite;
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Portfolio;