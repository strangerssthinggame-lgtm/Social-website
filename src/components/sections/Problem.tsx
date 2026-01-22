import React from 'react';
import styles from './Problem.module.css';

export const Problem: React.FC = () => {
    const painPoints = [
        {
            icon: "💬",
            title: "The 'Hey' Dead End",
            text: "You match. You say 'Hey'. They say 'Hey'. And that's where the conversation goes to die. No spark, just awkward small talk."
        },
        {
            icon: "👻",
            title: "Catfish & Ghosts",
            text: "Hours of texting only to be ghosted, or worse, meeting someone who looks nothing like their profile. It's exhausting."
        },
        {
            icon: "🎭",
            title: "Performance Anxiety",
            text: "Crafting the perfect bio, curating photos, and trying to be witty on demand. It feels like a job interview, not a connection."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.headline}>
                    Let&apos;s be real.<br />
                    Dating apps are <span className="highlight">broken.</span>
                </h2>

                <div className={styles.grid}>
                    {painPoints.map((point, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.icon}>{point.icon}</span>
                            <h3 className={styles.cardTitle}>{point.title}</h3>
                            <p className={styles.cardText}>{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
