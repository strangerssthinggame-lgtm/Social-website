"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleJoinWaitlist = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const heroSection = document.querySelector('.hero');
        const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;

        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Focus the email input after scrolling
            setTimeout(() => {
                if (emailInput) {
                    emailInput.focus();
                }
            }, 800);
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Realer
                </Link>

                <nav className={styles.nav}>
                    <Link href="#how-it-works" className={styles.navLink}>How It Works</Link>
                    <Link href="#games" className={styles.navLink}>Games</Link>
                    <Link href="#safety" className={styles.navLink}>Safety</Link>
                </nav>

                <div className={styles.ctaContainer}>
                    <Button size="sm" onClick={handleJoinWaitlist} variant={isScrolled ? "primary" : "primary"}>
                        Join Waitlist
                    </Button>
                    <button className={styles.mobileMenuBtn} aria-label="Menu">
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};
