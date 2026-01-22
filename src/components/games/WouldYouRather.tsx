"use client";

import React, { useState, useEffect } from 'react';
import styles from './WouldYouRather.module.css';
import { RotateCcw } from 'lucide-react';

const QUESTIONS_BY_VIBE: Record<string, { a: string, b: string }[]> = {
    chill: [
        { a: "Have the ability to read minds", b: "See the future" },
        { a: "Have unlimited travel", b: "Unlimited food for life" },
        { a: "Time travel to the past", b: "Time travel to the future" },
        { a: "Be able to teleport", b: "Fly" },
        { a: "Win the lottery", b: "Find your dream career" }
    ],
    deep: [
        { a: "Know the truth and be hurt", b: "Live in blissful ignorance" },
        { a: "Pursue passion and struggle", b: "Have security doing something you hate" },
        { a: "Be loved by everyone but empty", b: "Be misunderstood but fulfilled" },
        { a: "Change your past", b: "See your future" },
        { a: "Meaningful life with struggles", b: "Easy life with no purpose" }
    ],
    wild: [
        { a: "Amazing one night stand", b: "Mediocre long-term relationship" },
        { a: "Amazing personality, no looks", b: "Amazing looks, boring personality" },
        { a: "Be cheated on", b: "Be the cheater" },
        { a: "Marry for love & struggle", b: "Marry for money & unhappy" },
        { a: "Great chemistry, no connection", b: "Deep connection, no spark" }
    ]
};

// Summary content based on vibe
const SUMMARY_CONTENT: Record<string, { title: string, label: string, emoji: string }> = {
    chill: { title: "EASY CHOICE", label: "LAID BACK", emoji: "😌" },
    deep: { title: "HARD TRUTH", label: "PHILOSOPHER", emoji: "🧠" },
    wild: { title: "RISKY BIZ", label: "DAREDEVIL", emoji: "⚡" }
};

interface WouldYouRatherProps {
    vibe?: string;
}

export const WouldYouRather: React.FC<WouldYouRatherProps> = ({ vibe = 'chill' }) => {
    const [round, setRound] = useState(0);
    const [phase, setPhase] = useState<'CHOOSING' | 'REVEAL' | 'SUMMARY'>('CHOOSING');
    const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);

    const questions = QUESTIONS_BY_VIBE[vibe] || QUESTIONS_BY_VIBE['chill'];
    const summary = SUMMARY_CONTENT[vibe] || SUMMARY_CONTENT['chill'];

    useEffect(() => {
        setRound(0);
        setPhase('CHOOSING');
        setSelectedOption(null);
    }, [vibe]);

    const handleChoice = (option: 'A' | 'B') => {
        if (phase !== 'CHOOSING') return;

        setSelectedOption(option);
        setPhase('REVEAL');

        // Auto advance
        setTimeout(() => {
            if (round < questions.length - 1) {
                setRound(prev => prev + 1);
                setPhase('CHOOSING');
                setSelectedOption(null);
            } else {
                setPhase('SUMMARY');
            }
        }, 1500);
    };

    const handleRestart = () => {
        setRound(0);
        setPhase('CHOOSING');
        setSelectedOption(null);
    };

    if (phase === 'SUMMARY') {
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
                            <span className={styles.statLabel}>Completed</span>
                            <span className={styles.statValue}>{questions.length}</span>
                        </div>
                        <div style={{ width: 1, height: 40, background: '#e4e4e7' }}></div>
                        <div className={styles.statItem} style={{ alignItems: 'flex-end' }}>
                            <span className={styles.statLabel}>Vibe</span>
                            <span style={{ color: '#ca8a04', fontWeight: 900 }}>100%</span>
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

    const currentQ = questions[round];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.counterCurrent}>{round + 1}</span>
                <span className={styles.counterTotal}>/ {questions.length}</span>
            </div>

            <p className={styles.promptLabel}>WOULD YOU RATHER...</p>

            <div className={styles.centerContainer}>
                <div className={styles.optionsContainer}>
                    <div
                        className={`${styles.optionCard} ${selectedOption === 'A' ? styles.selected : ''} ${selectedOption === 'B' ? styles.dimmed : ''}`}
                        onClick={() => handleChoice('A')}
                    >
                        <span className={styles.optionText}>{currentQ.a}</span>
                    </div>

                    <div className={styles.orDivider}>
                        <div className={styles.orCircle}>OR</div>
                    </div>

                    <div
                        className={`${styles.optionCard} ${selectedOption === 'B' ? styles.selected : ''} ${selectedOption === 'A' ? styles.dimmed : ''}`}
                        onClick={() => handleChoice('B')}
                    >
                        <span className={styles.optionText}>{currentQ.b}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
