"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Button } from '../ui/Button';
import { throttle } from '@/utils/throttle';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = throttle(() => {
            setIsScrolled(window.scrollY > 20);
        }, 100);

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

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close menu when clicking a link
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Infriend
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <Link href="#how-it-works" className={styles.navLink}>How It Works</Link>
                    <Link href="#games" className={styles.navLink}>Games</Link>
                    <Link href="#safety" className={styles.navLink}>Safety</Link>
                </nav>

                <div className={styles.ctaContainer}>
                    <Button size="sm" onClick={handleJoinWaitlist} variant={isScrolled ? "primary" : "primary"} className={styles.waitlistBtn}>
                        Join Waitlist
                    </Button>
                    <button
                        className={styles.mobileMenuBtn}
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMenu}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <Link href="#how-it-works" className={styles.mobileNavLink} onClick={closeMenu}>How It Works</Link>
                <Link href="#games" className={styles.mobileNavLink} onClick={closeMenu}>Games</Link>
                <Link href="#safety" className={styles.mobileNavLink} onClick={closeMenu}>Safety</Link>
            </div>
        </header>
    );
};
