import React from 'react';
import styles from './Safety.module.css';

export const Safety: React.FC = () => {
    const safetyFeatures = [
        {
            title: ".edu Verification",
            text: "Every user must verify their account with an active university email to ensure our community is 100% students."
        },
        {
            title: "Reporting & Blocking",
            text: "Zero-tolerance policy for harassment. One-tap reporting and instant blocking features are built into every screen."
        },
        {
            title: "Private Gameplay",
            text: "You control who sees your game results. We never share your personal data with third-party advertisers."
        }
    ];

    return (
        <section className={styles.section} id="safety">
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <span className={styles.label}>Safety First</span>
                        <h2 className={styles.title}>Your <span className="highlight">Safety</span> is Our Top Priority</h2>
                        <p className={styles.description}>
                            We&apos;ve built Bondly from the ground up to be the safest place for college students to meet. No bots, no bad actors, just real students.
                        </p>

                        <div className={styles.safetyList}>
                            {safetyFeatures.map((f, i) => (
                                <div key={i} className={styles.safetyItem}>
                                    <div className={styles.checkIcon}>✓</div>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.visual}>
                        <div className={styles.shieldIcon}>🛡️</div>
                        <h3>Verified <span className="highlight">Campus Community</span></h3>

                        <div className={styles.badgeWall}>
                            <div className={styles.badge}>.EDU VERIFIED</div>
                            <div className={styles.badge}>ENCRYPTED</div>
                            <div className={styles.badge}>GDPR</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
