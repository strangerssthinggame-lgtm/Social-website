import React from 'react';
import styles from './Solution.module.css';
import { Button } from '../ui/Button';
import { VibePreview } from '../ui/VibePreview';
import { GamePreview } from '../ui/GamePreview';

export const Solution: React.FC = () => {
    return (
        <section className={styles.section} id="how-it-works">
            <div className={styles.container}>
                {/* Row 1: The Core Concept */}
                <div className={styles.row}>
                    <div className={styles.content}>
                        <span className={styles.label}>The Solution</span>
                        <h2 className={styles.headline}>Stop Assessing.<br />Start <span className="highlight">Playing.</span></h2>
                        <p className={styles.description}>
                            We replaced the resume-style bio with interactive games. Instead of judging a profile, you connect through shared gameplay moments. It&apos;s natural, fun, and completely cringe-free.
                        </p>
                        <Button variant="secondary" href="#games">
                            See How It Works
                        </Button>
                    </div>
                    <div className={styles.visual}>
                        <div className={styles.phoneFrame}>
                            <div className={styles.notch}></div>
                            <div className={styles.screen} style={{ padding: 0 }}>
                                <GamePreview />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Vibe Check */}
                <div className={`${styles.row} ${styles.reverse}`}>
                    <div className={styles.content}>
                        <span className={styles.label}>Vibe Optimization</span>
                        <h2 className={styles.headline}>Matches that actually pass the <span className="highlight">Vibe Check.</span></h2>
                        <p className={styles.description}>
                            Our Gamified Connection Engine analyzes your play style and humor to match you with people who get you. No more awkward first dates with zero chemistry.
                        </p>
                    </div>
                    <div className={styles.visual}>
                        <div className={styles.phoneFrame}>
                            <div className={styles.notch}></div>
                            <div className={styles.screen} style={{ padding: 0 }}>
                                <VibePreview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
