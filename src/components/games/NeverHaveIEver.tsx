"use client";

import React, { useState, useEffect } from 'react';
import styles from './NeverHaveIEver.module.css';
import { Check, X, RotateCcw } from 'lucide-react';

const QUESTIONS_BY_VIBE: Record<string, string[]> = {
    chill: [
        "Stalked someone's entire Instagram after meeting them once.",
        "Pretended to be busy scrolling my phone to avoid interaction.",
        "Accidentally liked an old post while stalking someone.",
        "Forgotten someone's name immediately after they introduced themselves.",
        "Judged someone based on their zodiac sign."
    ],
    deep: [
        "Felt like I'm wearing a mask around most people.",
        "Felt completely misunderstood by everyone around me.",
        "Struggled with feeling like I'm not enough.",
        "Questioned if I'm on the right path in life.",
        "Wondered if people actually like me or just tolerate me."
    ],
    wild: [
        "Made out with someone within hours of meeting them.",
        "Sent a risky text to the wrong person.",
        "Hooked up with someone whose last name I didn't know.",
        "Had a one night stand.",
        "Been in a situationship."
    ]
};

// Summary content based on vibe
const SUMMARY_CONTENT: Record<string, { title: string, label: string, emoji: string }> = {
    chill: { title: "ICE MELTED", label: "CASUAL VIBES", emoji: "🧊" },
    deep: { title: "SOUL SEALED", label: "DEEP THINKER", emoji: "🔮" },
    wild: { title: "SECRETS OUT", label: "WILD CARD", emoji: "🔥" }
};

interface NeverHaveIEverProps {
    vibe?: string;
}

export const NeverHaveIEver: React.FC<NeverHaveIEverProps> = ({ vibe = 'chill' }) => {
    const [round, setRound] = useState(0);
    const [score, setScore] = useState(0);
    const [phase, setPhase] = useState<'PLAYING' | 'SUMMARY'>('PLAYING');

    const questions = QUESTIONS_BY_VIBE[vibe] || QUESTIONS_BY_VIBE['chill'];
    const summary = SUMMARY_CONTENT[vibe] || SUMMARY_CONTENT['chill'];

    // Reset game when vibe changes
    useEffect(() => {
        setRound(0);
        setScore(0);
        setPhase('PLAYING');
    }, [vibe]);

    const handleChoice = (choice: 'HAVE' | 'NEVER') => {
        if (choice === 'HAVE') {
            setScore(prev => prev + 1);
        }

        if (round < questions.length - 1) {
            setRound(prev => prev + 1);
        } else {
            setPhase('SUMMARY');
        }
    };

    const handleRestart = () => {
        setRound(0);
        setScore(0);
        setPhase('PLAYING');
    };

    if (phase === 'SUMMARY') {
        const percentage = Math.round((score / questions.length) * 100);

        return (
            <div className={styles.container}>
                <div className={styles.centerContainer}>
                    <div className={styles.summaryHeader}>
                        <span className={styles.emoji}>{summary.emoji}</span>
                        <h2 className={styles.summaryTitle}>{summary.title}</h2>
                        <span className={styles.vibeLabel}>{summary.label}</span>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem} style={{ alignItems: 'flex-start' }}>
                            <span className={styles.statLabel}>Score</span>
                            <span className={styles.statValue}>{score}/{questions.length}</span>
                        </div>
                        <div style={{ width: 1, height: 40, background: '#3f3f46' }}></div>
                        <div className={styles.statItem} style={{ alignItems: 'flex-end' }}>
                            <span className={styles.statLabel}>Vibe</span>
                            <span style={{ color: '#facc15', fontWeight: 900 }}>{percentage}%</span>
                        </div>
                    </div>

                    <button onClick={handleRestart} className={styles.restartBtn}>
                        <RotateCcw size={18} />
                        <span>Play Again</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.counterCurrent}>{round + 1}</span>
                <span className={styles.counterTotal}>/ {questions.length}</span>
            </div>

            <div className={styles.centerContainer}>
                <div className={styles.promptContainer}>
                    <p className={styles.subLabel}>NEVER HAVE I EVER...</p>
                    <p className={styles.questionText}>{questions[round]}</p>
                </div>
            </div>

            <div className={styles.controls}>
                <button
                    className={`${styles.choiceButton} ${styles.btnHave}`}
                    onClick={() => handleChoice('HAVE')}
                >
                    <span>I HAVE</span>
                    <Check size={20} />
                </button>
                <button
                    className={`${styles.choiceButton} ${styles.btnNever}`}
                    onClick={() => handleChoice('NEVER')}
                >
                    <span>I HAVE NEVER</span>
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};
