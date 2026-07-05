"use client";

import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { CardMarquee } from '../ui/CardMarquee';
import { AppPreview } from '../ui/AppPreview';
import { PlayStoreBadge } from '../ui/PlayStoreBadge';

import { MobileHeroCarousel } from '../ui/MobileHeroCarousel';

export const Hero: React.FC = () => {
    const handleJoinClick = () => {
        window.open('https://play.google.com/store/apps/details?id=com.ling.social&pcampaignid=web_share', '_blank', 'noopener,noreferrer');
    };

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.desktopHeroContent}>
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
                            Break the ice without the cringe. Flame uses 25+ interactive games to help you make real connections.
                        </p>
                        <div className={styles.ctaGroup}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
                                <Button
                                    size="lg"
                                    variant="primary"
                                    onClick={handleJoinClick}
                                    className={styles.submitButton}
                                >
                                    Join Now
                                </Button>
                                <PlayStoreBadge />
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 600, marginTop: '0.5rem' }}>
                                *Play Store download is live. Click to join the fun today!
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
            </div>

            <div className={styles.mobileHeroContent}>
                <MobileHeroCarousel />
            </div>
        </section>
    );
};
