import React from 'react';
import styles from './Science.module.css';
import { Zap, Brain, MessageCircle } from 'lucide-react';

const SCIENCE_POINTS = [
    {
        icon: <Zap size={24} />,
        title: "Dopamine-Driven Loops",
        description: "Every shared laugh and perfectly timed move lights up your brain's reward center. These micro-moments create genuine chemistry.",
        color: "#facc15"
    },
    {
        icon: <Brain size={24} />,
        title: "Cognitive Vibe Sync",
        description: "How someone plays reveals their real personality in minutes. Competitive or collaborative? You're seeing who they actually are.",
        color: "#60a5fa"
    },
    {
        icon: <MessageCircle size={24} />,
        title: "Social Lubricant Engine",
        description: "Games kill awkward silences. When you're playing together, conversation flows naturally. The pressure melts away.",
        color: "#34d399"
    }
];

export const Science: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Science of <span className="highlight">Connection</span></h2>

                <div className={styles.grid}>
                    {/* Cards on the left */}
                    <div className={styles.cardsColumn}>
                        {SCIENCE_POINTS.map((point, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardIcon} style={{ backgroundColor: `${point.color}20`, color: point.color }}>
                                    {point.icon}
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{point.title}</h3>
                                    <p className={styles.cardDescription}>{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Why it works content on the right */}
                    <div className={styles.whyItWorks}>
                        <h3 className={styles.contentHeadline}>Why it actually <span className="highlight">works.</span></h3>
                        <p className={styles.contentText}>
                            Traditional dating apps focus on static images and resumes. But humans aren&apos;t static. We are dynamic creatures who reveal our best selves through action and interaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
