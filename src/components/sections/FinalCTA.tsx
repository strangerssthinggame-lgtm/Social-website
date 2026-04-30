"use client";

import React from 'react';
import styles from './FinalCTA.module.css';
import { Button } from '../ui/Button';
import { useWaitlist } from '@/context/WaitlistContext';

export const FinalCTA: React.FC = () => {
    const { email, setEmail, status, joinWaitlist } = useWaitlist();

    return (
        <section className={styles.section} id="waitlist">
            <div className={styles.container}>
                <h2 className={styles.title}>Ready to Break the Ice?</h2>
                <p className={styles.description}>
                    Join students who are waiting to stop swiping and start playing. Be the first to know when Infriend launches.
                </p>

                <div className={styles.waitlistForm}>
                    {status === 'success' ? (
                        <div style={{
                            padding: '1.5rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '16px',
                            color: 'white',
                            fontWeight: 600,
                            textAlign: 'center',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            🎉 Thanks for joining! Keep an eye on your inbox.
                        </div>
                    ) : (
                        <form className={styles.formRow} onSubmit={joinWaitlist}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.emailInput}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading'}
                                suppressHydrationWarning
                                required
                                aria-label="Email address"
                            />
                            <Button
                                variant="white"
                                size="lg"
                                type="submit"
                                disabled={status === 'loading'}
                                suppressHydrationWarning
                            >
                                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                            </Button>
                        </form>
                    )}
                    {status === 'error' && (
                        <p style={{ color: '#fca5a5', textAlign: 'center', marginTop: '1rem' }}>
                            Something went wrong. Please try again.
                        </p>
                    )}
                </div>

                <p className={styles.note}>
                    🔒 No spam. Just launch updates and early access.
                </p>
            </div>
        </section>
    );
};
