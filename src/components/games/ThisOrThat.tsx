"use client";

import React, { useState, useEffect } from 'react';
import styles from './ThisOrThat.module.css';
import { RotateCcw } from 'lucide-react';

const PAIRS_BY_VIBE: Record<string, { a: string, b: string }[]> = {
    classic: [
        { a: "Texting", b: "Calling" },
        { a: "Beach", b: "Mountains" },
        { a: "Morning Person", b: "Night Owl" },
        { a: "Dogs", b: "Cats" },
        { a: "Plan everything", b: "Go with flow" }
    ],
    deep: [
        { a: "Heart", b: "Head" },
        { a: "Passion", b: "Stability" },
        { a: "Follow dreams", b: "Follow logic" },
        { a: "Be loved", b: "Be understood" },
        { a: "Choose comfort", b: "Choose passion" }
    ],
    spicy: [
        { a: "Lights ON", b: "Lights OFF" },
        { a: "Top", b: "Bottom" },
        { a: "Rough", b: "Sensual" },
        { a: "Give Control", b: "Take Control" },
        { a: "Talk Dirty", b: "Silent Heat" }
    ]
};

// Summary content based on vibe
const SUMMARY_CONTENT: Record<string, { title: string, label: string, emoji: string }> = {
    classic: { title: "MATCHED UP", label: "CLASSIC TASTE", emoji: "✨" },
    deep: { title: "SOUL SYNC", label: "INTUITIVE", emoji: "🌊" },
    spicy: { title: "HOT TAKE", label: "SPICY AURA", emoji: "🌶️" }
};

interface ThisOrThatProps {
    vibe?: string;
}

export const ThisOrThat: React.FC<ThisOrThatProps> = ({ vibe = 'classic' }) => {
    const [round, setRound] = useState(0);
    const [phase, setPhase] = useState<'PLAYING' | 'SUMMARY'>('PLAYING');
    // For simple animation key
    const [animKey, setAnimKey] = useState(0);

    const pairs = PAIRS_BY_VIBE[vibe] || PAIRS_BY_VIBE['classic'];
    const summary = SUMMARY_CONTENT[vibe] || SUMMARY_CONTENT['classic'];

    useEffect(() => {
        setRound(0);
        setPhase('PLAYING');
        setAnimKey(0);
    }, [vibe]);

    const handleChoice = (option: 'A' | 'B') => {
        if (round < pairs.length - 1) {
            setRound(prev => prev + 1);
            setAnimKey(prev => prev + 1); // Trigger re-render/anim
        } else {
            setPhase('SUMMARY');
        }
    };

    const handleRestart = () => {
        setRound(0);
        setPhase('PLAYING');
        setAnimKey(0);
    };

    if (phase === 'SUMMARY') {
        return (
            <div className={styles.container}>
                <div className={styles.summaryContainer}>
                    <div className={styles.centerContainer}>
                        <div className={styles.summaryHeader}>
                            <span className={styles.emoji}>{summary.emoji}</span>
                            <h2 className={styles.summaryTitle}>{summary.title}</h2>
                            <span className={styles.vibeLabel}>{summary.label}</span>
                        </div>

                        <div className={styles.statsRow}>
                            <div className={styles.statItem} style={{ alignItems: 'flex-start' }}>
                                <span className={styles.statLabel}>Answers</span>
                                <span className={styles.statValue}>{pairs.length}</span>
                            </div>
                            <div style={{ width: 1, height: 40, background: '#e4e4e7' }}></div>
                            <div className={styles.statItem} style={{ alignItems: 'flex-end' }}>
                                <span className={styles.statLabel}>Rate</span>
                                <span style={{ color: '#a78bfa', fontWeight: 900 }}>Fast</span>
                            </div>
                        </div>

                        <button onClick={handleRestart} className={styles.restartBtn}>
                            <RotateCcw size={18} />
                            <span>Play Again</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentPair = pairs[round];

    return (
        <div className={styles.container}>
            {/* Minimal Header Overlay */}
            <div className={styles.headerOverlay}>
                <div className={styles.counterBadge}>
                    {round + 1} / {pairs.length}
                </div>
            </div>

            <div className={styles.splitContainer}>
                {/* Top Half - Option A */}
                <div
                    key={`top-${animKey}`}
                    className={`${styles.half} ${styles.topHalf} ${styles.slideInTop}`}
                    onClick={() => handleChoice('A')}
                >
                    <span className={styles.optionText}>{currentPair.a}</span>
                </div>

                {/* VS Badge */}
                <div className={styles.vsBadge}>VS</div>

                {/* Bottom Half - Option B */}
                <div
                    key={`bottom-${animKey}`}
                    className={`${styles.half} ${styles.bottomHalf} ${styles.slideInBottom}`}
                    onClick={() => handleChoice('B')}
                >
                    <span className={styles.optionText}>{currentPair.b}</span>
                </div>
            </div>
        </div>
    );
};
