import React, { useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
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

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans overflow-x-hidden transition-colors duration-700 cursor-none">
            {/* Custom Cursor */}
            <div
                ref={cursorRingRef}
                className="fixed w-8 h-8 border border-stone-800 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference transition-all duration-300 ease-out origin-center top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            ></div>
            <div
                ref={cursorDotRef}
                className="fixed w-1 h-1 bg-stone-800 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            ></div>

            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <Outlet />
        </div>
    );
};

export default Layout;
