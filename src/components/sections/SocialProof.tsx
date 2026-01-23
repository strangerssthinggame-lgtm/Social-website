import React from 'react';
import styles from './SocialProof.module.css';

export const SocialProof: React.FC = () => {
    const testimonials = [
        {
            name: "Alex Johnson",
            school: "Stanford University",
            quote: "Finally a dating app that doesn't feel like a chore. Playing TruthShot with my match was actually fun and we've been dating for 6 months now!",
            initials: "AJ"
        },
        {
            name: "Sarah Chen",
            school: "UC Berkeley",
            quote: "I love that I only match with students from my campus. The .edu verification makes me feel so much safer than other apps.",
            initials: "SC"
        },
        {
            name: "Marcus Miller",
            school: "UT Austin",
            quote: "The games are a great icebreaker. Usually I don't know what to say after 'Hey', but Bondly fixes that completely.",
            initials: "MM"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>What Students are Saying</h2>
                    <p className={styles.subtitle}>Join thousands of students who have found real connections.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.initials}</div>
                                <div className={styles.authorInfo}>
                                    <h4>{t.name}</h4>
                                    <p>{t.school}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>50k+</span>
                        <span className={styles.statLabel}>Students</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
