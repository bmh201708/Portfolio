import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Tag } from 'lucide-react';

const CarouselGallery = ({ images, projectTitle }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="mb-16">
            <div className="flex items-end justify-between mb-8 border-b border-stone-200 pb-4">
                <h2 className="text-3xl font-serif text-stone-900">Project Gallery</h2>
                <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                        <button
                            onClick={prevImage}
                            className="p-2 rounded-full border border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-all cursor-hover group"
                            aria-label="Previous Image"
                        >
                            <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="p-2 rounded-full border border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-all cursor-hover group"
                            aria-label="Next Image"
                        >
                            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
                        </button>
                    </div>
                    <span className="font-mono text-xs text-stone-400">
                        {images.length} IMAGES
                    </span>
                </div>
            </div>

            <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-transparent rounded-lg">
                {images.map((image, idx) => {
                    const len = images.length;
                    let dist = (idx - activeIndex + len) % len;
                    if (dist > len / 2) dist -= len;

                    const isActive = dist === 0;
                    const isPrev = dist === -1;
                    const isNext = dist === 1;
                    const isVisible = Math.abs(dist) <= 1;

                    let transformClass = '';
                    let zIndex = 0;
                    let opacity = 0;

                    if (isActive) {
                        transformClass = 'scale-100 translate-x-0';
                        zIndex = 30;
                        opacity = 1;
                    } else if (dist < 0) {
                        transformClass = 'scale-90 -translate-x-[60%] blur-[1px]';
                        zIndex = 20;
                        opacity = 0.6;
                    } else if (dist > 0) {
                        transformClass = 'scale-90 translate-x-[60%] blur-[1px]';
                        zIndex = 20;
                        opacity = 0.6;
                    }

                    if (!isVisible) return null;

                    return (
                        <div
                            key={idx}
                            className={`absolute transition-all duration-700 ease-in-out origin-center flex items-center justify-center ${transformClass}`}
                            style={{
                                zIndex,
                                opacity,
                                width: '70%', // Fixed width slot for consistent movement
                                height: '100%',
                                pointerEvents: isActive ? 'auto' : 'none', // Only active is fully interactive
                            }}
                            onClick={() => {
                                if (isNext) nextImage();
                                if (isPrev) prevImage();
                            }}
                        >
                            {/* Inner Card - Fits Image Exactly */}
                            <div className={`relative inline-block transition-all duration-500 bg-white ${isActive ? 'shadow-[0_20px_50px_rgba(0,0,0,0.2)]' : 'shadow-none'}`}>
                                <img
                                    src={image}
                                    alt={`${projectTitle} ${idx + 1}`}
                                    className="block object-contain"
                                    style={{
                                        maxHeight: '60vh', // Limit height to keep it within view
                                        maxWidth: '100%',
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                />
                                {/* Numbering overlay */}
                                <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs transition-colors duration-300 ${isActive ? 'text-stone-900' : 'text-stone-300'}`}>
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Minimal Indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-stone-800 w-4' : 'bg-stone-300 hover:bg-stone-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

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
                        src={project.galleryImages?.[0] || project.image}
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
                                <p className="text-stone-900">{project.role || "Lead Designer & Developer"}</p>
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
                                    <span className="text-xs px-3 py-1 bg-stone-100 text-stone-600 rounded-full">Figma</span>
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
                                {project.overview || project.detailedDescription ||
                                    `This project represents a deep exploration of ${project.category.toLowerCase()}, 
                                where form meets function in the most elegant way possible. Through careful consideration 
                                of user needs and aesthetic principles, we created an experience that resonates with users 
                                on both practical and emotional levels.`}
                            </p>
                            {!project.overview && (
                                <p>
                                    The design process involved extensive research, prototyping, and iteration to ensure
                                    every detail contributes to the overall vision. Each element was carefully crafted
                                    to create a cohesive and meaningful user experience.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* 图片画廊 Carousel Implementation */}
                    {project.galleryImages && project.galleryImages.length > 0 && (
                        <CarouselGallery images={project.galleryImages} projectTitle={project.title} />
                    )}

                    <div>
                        <h2 className="text-3xl font-serif text-stone-900 mb-6">Design Process</h2>
                        <div className="space-y-6 text-stone-600 leading-relaxed">
                            {project.designProcess ? (
                                project.designProcess.map((process, index) => (
                                    <div key={index}>
                                        <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-2">{process.title}</h3>
                                        <p>{process.description}</p>
                                    </div>
                                ))
                            ) : (
                                <>
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
                                </>
                            )}
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
