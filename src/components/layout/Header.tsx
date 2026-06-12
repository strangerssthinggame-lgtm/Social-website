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

    const handleJoinClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const waitlistSection = document.getElementById('waitlist');

        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                    Ling
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <Link href="#how-it-works" className={styles.navLink}>How It Works</Link>
                    <Link href="#games" className={styles.navLink}>Games</Link>
                    <Link href="#safety" className={styles.navLink}>Safety</Link>
                </nav>

                <div className={styles.ctaContainer}>
                    <Button size="sm" onClick={handleJoinClick} variant={isScrolled ? "primary" : "primary"} className={styles.waitlistBtn}>
                        Join Now
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
