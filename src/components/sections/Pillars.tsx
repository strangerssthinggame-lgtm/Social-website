import React from 'react';
import styles from './Pillars.module.css';

export const Pillars: React.FC = () => {
    const pillars = [
        {
            icon: "🎮",
            title: "Gamified Connection",
            text: "Forget awkward pickup lines. Connect naturally through 25+ interactive games designed to break the ice and spark laughter.",
            link: "See Games",
            href: "#games"
        },
        {
            icon: "🛡️",
            title: "Campus Verified Safety",
            text: "We require .edu email verification to ensure you're only matching with real students from your campus community.",
            link: "Safety First",
            href: "#safety"
        },
        {
            icon: "⚡",
            title: "Vibe Optimization",
            text: "Our algorithm matches you based on play style and energy, not just photos. Find people who truly match your vibe.",
            link: "How Matching Works",
            href: "#how-it-works"
        }
    ];

    return (
        <section className={styles.section} id="why-infriend">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <h2 className={styles.sectionHeadline}>Why <span className="highlight">Infriend</span> is Different</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>More than just another dating app. A new way to meet.</p>
                </div>

                <div className={styles.grid}>
                    {pillars.map((pillar, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {pillar.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{pillar.title}</h3>
                            <p className={styles.cardText}>{pillar.text}</p>
                            <a href={pillar.href} className={styles.learnMore}>
                                {pillar.link} <span>→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
