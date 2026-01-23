"use client";

import React from 'react';
import styles from './FinalCTA.module.css';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
    return (
        <section className={styles.section} id="waitlist">
            <div className={styles.container}>
                <h2 className={styles.title}>Ready to Break the Ice?</h2>
                <p className={styles.description}>
                    Join students who are waiting to stop swiping and start playing. Be the first to know when Bondly launches.
                </p>

                <div className={styles.waitlistForm}>
                    <form className={styles.formRow} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.emailInput}
                            suppressHydrationWarning
                        />
                        <Button variant="white" size="lg" suppressHydrationWarning>
                            Join Waitlist
                        </Button>
                    </form>
                </div>

                <p className={styles.note}>
                    🔒 No spam. Just launch updates and early access.
                </p>
            </div>
        </section>
    );
};
