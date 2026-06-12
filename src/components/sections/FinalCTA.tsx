"use client";

import React from 'react';
import styles from './FinalCTA.module.css';
import { Button } from '../ui/Button';
import { PlayStoreBadge } from '../ui/PlayStoreBadge';

export const FinalCTA: React.FC = () => {
    const handleJoinClick = () => {
        window.open('https://play.google.com/store/apps/details?id=com.ling.social', '_blank', 'noopener,noreferrer');
    };

    return (
        <section className={styles.section} id="waitlist">
            <div className={styles.container}>
                <h2 className={styles.title}>Ready to Break the Ice?</h2>
                <p className={styles.description}>
                    Download Ling today to stop swiping and start connecting through fun, interactive games.
                </p>

                <div className={styles.waitlistForm}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
                        <Button
                            variant="white"
                            size="lg"
                            onClick={handleJoinClick}
                            style={{ height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            Download for Android
                        </Button>
                        <PlayStoreBadge />
                    </div>
                </div>

                <p className={styles.note}>
                    ⚡ Available now on the Google Play Store.
                </p>
            </div>
        </section>
    );
};
