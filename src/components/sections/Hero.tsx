"use client";

import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { CardMarquee } from '../ui/CardMarquee';
import { AppPreview } from '../ui/AppPreview';
import { useWaitlist } from '@/context/WaitlistContext';

export const Hero: React.FC = () => {
    const { email, setEmail, status, joinWaitlist } = useWaitlist();

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
                        Break the ice without the cringe. Infriend uses 25+ interactive games to help you make real connections.
                    </p>
                    <div className={styles.ctaGroup}>
                        {status === 'success' ? (
                            <div className={styles.successMessage} style={{
                                padding: '1.5rem',
                                background: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid #22c55e',
                                borderRadius: '16px',
                                color: '#15803d',
                                fontWeight: 600
                            }}>
                                🎉 Thanks for joining! Keep an eye on your inbox.
                            </div>
                        ) : (
                            <form className={styles.waitlistForm} onSubmit={joinWaitlist}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={styles.emailInput}
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading'}
                                    suppressHydrationWarning
                                />
                                <Button
                                    size="md"
                                    type="submit"
                                    variant="primary"
                                    className={styles.submitButton}
                                    disabled={status === 'loading'}
                                    suppressHydrationWarning
                                >
                                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                                </Button>
                            </form>
                        )}
                        {status === 'error' && (
                            <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                Something went wrong. Please try again.
                            </p>
                        )}
                        {status !== 'success' && (
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                                *Joining is free and early birds get exclusive campus vibes.
                            </p>
                        )}
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
