"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './MobileHeroCarousel.module.css';

interface Slide {
    id: number;
    image: string;
    tag: string;
    tagColor: string;
    title: string;
    highlight: string;
    description: string;
}

const slides: Slide[] = [
    {
        id: 0,
        image: '/images/welcome/connections.png',
        tag: '💛  CONNECTIONS',
        tagColor: '#FACC15',
        title: 'BUILD REAL\nMEANINGFUL',
        highlight: 'BONDS.',
        description: 'Connect with people with clear relationship tags like Gym Buddy, Dating, Best Friend. Know your connection.',
    },
    {
        id: 1,
        image: '/images/welcome/vibe.png',
        tag: '✨  VIBE MATCH',
        tagColor: '#FACC15',
        title: 'FIND YOUR\nREAL',
        highlight: 'VIBE.',
        description: 'Compatibility of your connection. See how both of you match via mini vibe check game and profile compatibility. See your vibe match score while you connect.',
    },
    {
        id: 2,
        image: '/images/welcome/timeline.png',
        tag: '🔥  COLLAB',
        tagColor: '#FACC15',
        title: 'STREAKS,\nSTORIES &',
        highlight: 'COLLABS.',
        description: 'Build your memories together and share a meaningful journey. Post moments from the day you connect in a special collab profile, tell your connection story, mark milestones, and set your status publicly or privately.',
    },
    {
        id: 3,
        image: '/images/welcome/games.png',
        tag: '🎮  MINI GAMES',
        tagColor: '#FACC15',
        title: 'BEYOND\nAWKWARD',
        highlight: 'SMALL TALK.',
        description: 'Play 25+ interactive mini-games to connect deeper, have fun, and go wild. It is a great way to know each other better and increase your compatibility score over time.',
    },
    {
        id: 4,
        image: '/images/welcome/glimpse.png',
        tag: '⏳  GLIMPSE',
        tagColor: '#FACC15',
        title: 'CAPTURE\nYOUR',
        highlight: 'MOMENTS.',
        description: 'Lock memories in digital time capsules. Relive your best moments together whenever you want.',
    },
];

export const MobileHeroCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth;
        const index = Math.round(scrollPosition / cardWidth);
        if (index !== activeIndex && index >= 0 && index < slides.length) {
            setActiveIndex(index);
        }
    };

    const scrollToSlide = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            container.scrollTo({
                left: index * container.offsetWidth,
                behavior: 'smooth'
            });
        }
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveIndex(prev => {
                const next = (prev + 1) % slides.length;
                if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    container.scrollTo({
                        left: next * container.offsetWidth,
                        behavior: 'smooth'
                    });
                }
                return next;
            });
        }, 4000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const handleJoinClick = () => {
        window.open('https://play.google.com/store/apps/details?id=com.ling.social&pcampaignid=web_share', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styles.mobileCarouselWrapper}>
            <div 
                className={styles.carouselContainer} 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                onTouchStart={() => { if(timerRef.current) clearInterval(timerRef.current); }}
                onTouchEnd={resetTimer}
            >
                {slides.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority={item.id === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.bottomContent}>
                <div className={styles.textBlockContainer}>
                    {slides.map((slide, i) => (
                        <div 
                            key={slide.id} 
                            className={`${styles.textBlock} ${i === activeIndex ? styles.active : ''}`}
                        >
                            <div className={styles.tagPill}>
                                <span className={styles.tagText}>{slide.tag}</span>
                            </div>

                            <h2 className={styles.title}>
                                {slide.title.split('\n').map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line}
                                        {idx === 0 && <br />}
                                    </React.Fragment>
                                ))}
                                <br/>
                                <span className={styles.titleHighlight}>{slide.highlight}</span>
                            </h2>

                            <p className={styles.description}>{slide.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.paginationRow}>
                    {slides.map((_, i) => (
                        <button 
                            key={i} 
                            className={`${styles.dotTouch} ${i === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => scrollToSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        >
                            <div className={styles.dot} />
                        </button>
                    ))}
                </div>

                <div className={styles.buttonRow}>
                    <button onClick={handleJoinClick} className={styles.mainBtn}>
                        <div className={styles.mainBtnGradient}>
                            <span className={styles.mainBtnText}>GET STARTED</span>
                            <div className={styles.mainBtnIcon}>
                                <ArrowRight size={18} color="#FACC15" strokeWidth={3} />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
