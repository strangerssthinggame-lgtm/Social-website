"use client";

import React, { useState, useEffect } from 'react';
import styles from './AppPreview.module.css';
import {
    Gamepad2,
    MapPin,
    Sparkles,
    ArrowRight,
    ArrowLeft,
    MessageCircle,
    Flame,
    ArrowLeftRight,
    CircleHelp,
    Zap,
    MessageSquare,
    Flag,
    Heart,
    LayoutGrid,
    Smile,
    MousePointer2,
    Hand,
    Layers,
    Search
} from 'lucide-react';

const slides = [
    {
        id: 0,
        icon: <Gamepad2 size={32} />,
        iconBg: "black",
        title: <>BEYOND<br />AWKWARD<br /><span style={{ color: 'var(--color-primary)' }}>SMALL TALK.</span></>,
        description: "Skip the boring 'hey' messages. Play interactive mini-games like Two Truths & Would-U to break the ice instantly."
    },
    {
        id: 1,
        icon: <Sparkles size={32} />,
        iconBg: 'var(--color-primary)',
        title: <>FIND YOUR<br />REAL<br /><span style={{ color: 'var(--color-primary)' }}>VIBE.</span></>,
        description: "Take vibe checks and match profiles based on interests, lifestyle, and shared compatibilities. Find who aligns with you."
    },
    {
        id: 2,
        icon: <Flame size={32} />,
        iconBg: "black",
        title: <>STREAKS,<br />TIMELINES &<br /><span style={{ color: 'var(--color-primary)' }}>COLLABS.</span></>,
        description: "Define your connection with relationship tags, build shared collab profiles, share memories on your timeline, and maintain daily streaks."
    }
];

const row1 = [
    { label: 'TruthShot', icon: <MessageCircle size={14} /> },
    { label: 'DareLite', icon: <Flame size={14} /> },
    { label: 'This/That', icon: <ArrowLeftRight size={14} /> },
    { label: 'WouldU', icon: <CircleHelp size={14} /> },
    { label: 'VibeCheck', icon: <Sparkles size={14} /> },
];

export const AppPreview: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className={styles.appContainer}>
            {/* Background Marquee (Ported from RN styles) */}
            <div className={styles.bgAnimationLayer}>
                {[...Array(5)].map((_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={styles.cardRow}
                        style={{
                            top: `${5 + rowIndex * 10}%`,
                            transform: `rotate(${rowIndex % 2 === 0 ? -6 : 5}deg)`,
                            opacity: 0.3 + (rowIndex * 0.1)
                        }}
                    >
                        <div className={`${styles.marqueeInner} ${rowIndex % 2 === 0 ? styles.scrollLeft : styles.scrollRight}`}>
                            {[...row1, ...row1, ...row1].map((game, i) => (
                                <div key={i} className={`${styles.miniCard} ${rowIndex === 2 ? styles.yellow : ''}`}>
                                    {game.icon}
                                    <span>{game.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.overlayGradient}>
                <div className={styles.logoRow}>
                    <span className={styles.appLogo}>Flame</span>
                </div>

                <div className={styles.slidesContainer}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                        >
                            <div
                                className={styles.iconBox}
                                style={{
                                    backgroundColor: slide.iconBg,
                                    color: slide.iconBg === 'black' ? 'white' : 'black'
                                }}
                            >
                                {slide.icon}
                            </div>
                            <h2 className={styles.slideTitle}>{slide.title}</h2>
                            <p className={styles.slideDescription}>{slide.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <div className={styles.dots}>
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`${styles.dot} ${i === currentSlide ? styles.activeDot : ''}`}
                            />
                        ))}
                    </div>

                    <div className={styles.controls}>
                        {currentSlide > 0 && (
                            <button onClick={prevSlide} className={styles.backBtn} suppressHydrationWarning>
                                <ArrowLeft size={18} />
                            </button>
                        )}
                        <button onClick={nextSlide} className={styles.mainBtn} suppressHydrationWarning>
                            <span>{currentSlide === slides.length - 1 ? 'GET STARTED' : 'CONTINUE'}</span>
                            <div className={styles.btnIcon}>
                                <ArrowRight size={16} strokeWidth={3} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
