"use client";

import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { CardMarquee } from '../ui/CardMarquee';
import { AppPreview } from '../ui/AppPreview';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <CardMarquee />

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.tagline}>
                        <span className={styles.circle}></span>
                        <span>Now with Campus Mode</span>
                    </div>
                    <h1 className={styles.headline}>
                        Stop <span className="strike">Swiping.</span><br />
                        Start <span className="highlight">Connecting.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Break the ice without the cringe. Bondly uses 25+ interactive games to help you make real connections.
                    </p>
                    <div className={styles.ctaGroup}>
                        <form className={styles.waitlistForm} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.emailInput}
                                required
                                suppressHydrationWarning
                            />
                            <Button
                                size="md"
                                type="submit"
                                variant="primary"
                                className={styles.submitButton}
                                suppressHydrationWarning
                            >
                                Join Waitlist
                            </Button>
                        </form>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                            *Joining is free and early birds get exclusive campus vibes.
                        </p>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.phoneFrame}>
                        <div className={styles.notch}></div>
                        <div className={styles.screen} style={{ padding: 0 }}>
                            <AppPreview />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
