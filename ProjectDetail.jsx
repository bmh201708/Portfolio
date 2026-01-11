import React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectDetail = ({ project, onBack }) => {
    if (!project) return null;

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 md:px-16 animate-fade-in-up relative z-50">
            {/* 返回按钮 */}
            <button
                onClick={onBack}
                className="cursor-hover group flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors mb-12"
            >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="font-mono text-xs uppercase tracking-widest">Back to Works</span>
            </button>

            {/* 作品头部信息 */}
            <div className="mb-16 pb-8 border-b border-stone-200">
                <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                    <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight">
                        {project.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm font-mono text-stone-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            <span>{project.category}</span>
                        </div>
                    </div>
                </div>
                <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-3xl">
                    {project.description}
                </p>
            </div>

            {/* 作品主图 */}
            <div className="mb-16">
                <div className="w-full relative shadow-2xl shadow-stone-200/50">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="eager"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* 作品详细内容区域 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-6xl mx-auto">
                {/* 侧边栏信息 */}
                <div className="md:col-span-4 space-y-8">
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-4 border-b border-stone-200 pb-2">
                            Project Info
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-stone-400 font-mono uppercase tracking-wider text-xs mb-1">Category</p>
                                <p className="text-stone-900">{project.category}</p>
                            </div>
                            <div>
                                <p className="text-stone-400 font-mono uppercase tracking-wider text-xs mb-1">Year</p>
                                <p className="text-stone-900">{project.year}</p>
                            </div>
                            <div>
                                <p className="text-stone-400 font-mono uppercase tracking-wider text-xs mb-1">Role</p>
                                <p className="text-stone-900">Lead Designer & Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* 工具和技术栈 */}
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-4 border-b border-stone-200 pb-2">
                            Tools & Tech
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tools?.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs px-3 py-1 bg-stone-100 text-stone-600 rounded-full"
                                >
                                    {tool}
                                </span>
                            )) || (
                                    <>
                                        <span className="text-xs px-3 py-1 bg-stone-100 text-stone-600 rounded-full">Figma</span>
                                        <span className="text-xs px-3 py-1 bg-stone-100 text-stone-600 rounded-full">React</span>
                                        <span className="text-xs px-3 py-1 bg-stone-100 text-stone-600 rounded-full">Tailwind</span>
                                    </>
                                )}
                        </div>
                    </div>

                    {/* 外部链接 */}
                    {project.link && (
                        <div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-hover group inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-1"
                            >
                                <span className="font-mono uppercase tracking-wider">View Live</span>
                                <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    )}
                </div>

                {/* 主要内容区 */}
                <div className="md:col-span-8 space-y-12">
                    <div>
                        <h2 className="text-3xl font-serif text-stone-900 mb-6">Project Overview</h2>
                        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
                            <p>
                                {project.detailedDescription ||
                                    `This project represents a deep exploration of ${project.category.toLowerCase()}, 
                                where form meets function in the most elegant way possible. Through careful consideration 
                                of user needs and aesthetic principles, we created an experience that resonates with users 
                                on both practical and emotional levels.`}
                            </p>
                            <p>
                                The design process involved extensive research, prototyping, and iteration to ensure
                                every detail contributes to the overall vision. Each element was carefully crafted
                                to create a cohesive and meaningful user experience.
                            </p>
                        </div>
                    </div>

                    {/* 图片画廊 - 显示所有作品图片 */}
                    {project.galleryImages && project.galleryImages.length > 1 && (
                        <div>
                            <div className="flex items-end justify-between mb-8 border-b border-stone-200 pb-4">
                                <h2 className="text-3xl font-serif text-stone-900">Project Gallery</h2>
                                <div className="flex items-center gap-6">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                const container = document.getElementById('gallery-container');
                                                container.scrollBy({ left: -window.innerWidth * 0.6, behavior: 'smooth' });
                                            }}
                                            className="p-2 rounded-full border border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-all cursor-hover group"
                                            aria-label="Scroll Left"
                                        >
                                            <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                const container = document.getElementById('gallery-container');
                                                container.scrollBy({ left: window.innerWidth * 0.6, behavior: 'smooth' });
                                            }}
                                            className="p-2 rounded-full border border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-all cursor-hover group"
                                            aria-label="Scroll Right"
                                        >
                                            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
                                        </button>
                                    </div>
                                    <span className="font-mono text-xs text-stone-400">
                                        {project.galleryImages.length - 1} IMAGES
                                    </span>
                                </div>
                            </div>

                            <div id="gallery-container" className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
                                {project.galleryImages.slice(1).map((imagePath, idx) => (
                                    <div key={idx} className="relative group cursor-pointer flex-shrink-0 h-[60vh] snap-center">
                                        {/* Image Container */}
                                        <div className="h-full relative overflow-hidden bg-stone-100 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                                            <img
                                                src={imagePath}
                                                alt={`${project.title} - ${idx + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-auto h-full object-contain mix-blend-multiply opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                                            />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-500 group-hover:bg-stone-900/5"></div>
                                        </div>

                                        {/* Number Indicator */}
                                        <div className="absolute -bottom-6 left-0 font-mono text-[10px] text-stone-300 transition-colors duration-300 group-hover:text-stone-900">
                                            {(idx + 1).toString().padStart(2, '0')}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <h2 className="text-3xl font-serif text-stone-900 mb-6">Design Process</h2>
                        <div className="space-y-6 text-stone-600 leading-relaxed">
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-2">01. Research & Discovery</h3>
                                <p>Understanding user needs and defining the core problems to solve.</p>
                            </div>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-2">02. Ideation & Prototyping</h3>
                                <p>Exploring various design directions and creating interactive prototypes.</p>
                            </div>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-2">03. Design & Development</h3>
                                <p>Refining the visual design and implementing the solution with clean code.</p>
                            </div>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-2">04. Testing & Iteration</h3>
                                <p>Gathering feedback and continuously improving the experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 返回按钮 (底部) */}
            <div className="mt-24 pt-12 border-t border-stone-200 text-center">
                <button
                    onClick={onBack}
                    className="cursor-hover group inline-flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    <span className="font-mono text-sm uppercase tracking-widest">Back to All Works</span>
                </button>
            </div>
        </div>
    );
};

export default ProjectDetail;
