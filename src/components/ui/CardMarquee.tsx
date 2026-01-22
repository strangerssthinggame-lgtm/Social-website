import React from 'react';
import styles from './CardMarquee.module.css';

interface Game {
    label: string;
    icon: string;
    filled?: boolean;
    yellow?: boolean;
}

const row1Games: Game[] = [
    { label: 'TruthShot', icon: '💬' },
    { label: 'DareLite', icon: '🔥' },
    { label: 'This/That', icon: '⇄' },
    { label: 'WouldU', icon: '❓' },
    { label: 'VibeCheck', icon: '✨' },
];

const row2Games: Game[] = [
    { label: 'RapidFire', icon: '⚡' },
    { label: 'TwoTruths', icon: '💬' },
    { label: 'RedGreen', icon: '🚩' },
    { label: 'DateBuild', icon: '❤️' },
    { label: 'MatchTiles', icon: '⏹' },
];

const row3Games: Game[] = [
    { label: 'EmoStory', icon: '😊' },
    { label: 'PickOne', icon: '🖱' },
    { label: 'NeverEver', icon: '✋' },
    { label: 'MoodCards', icon: '🎴' },
    { label: 'CrushQ', icon: '🔍' },
];

const ScrollingRow = ({ games, direction = 'left', duration = '20s', rotate = '0deg', filled = false, yellow = false }: {
    games: Game[],
    direction?: 'left' | 'right',
    duration?: string,
    rotate?: string,
    filled?: boolean,
    yellow?: boolean
}) => {
    // Triple the items to ensure enough coverage even on large screens
    const extendedGames = [...games, ...games, ...games];
    const animationClass = direction === 'left' ? styles.animateLeft : styles.animateRight;

    return (
        <div className={styles.rowWrapper} style={{ transform: `rotate(${rotate})` }}>
            <div className={`${styles.innerRow} ${animationClass}`} style={{ '--duration': duration } as any}>
                {extendedGames.map((game, i) => (
                    <div key={i} className={`${styles.card} ${filled ? styles.filled : ''} ${yellow ? styles.yellow : ''}`}>
                        <div className={styles.cardContent}>
                            <span className={styles.icon}>{game.icon}</span>
                            <span className={styles.label}>{game.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const CardMarquee: React.FC = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div style={{ transform: 'translateY(-15%) rotate(-6deg)' }}>
                <ScrollingRow games={row1Games} direction="left" duration="30s" />
            </div>
            <div style={{ transform: 'translateY(-10%) rotate(5deg)', opacity: 0.6 }}>
                <ScrollingRow games={row2Games} direction="right" duration="45s" filled />
            </div>
            <div style={{ transform: 'translateY(-5%) rotate(-3deg)' }}>
                <ScrollingRow games={row3Games} direction="left" duration="25s" yellow />
            </div>
            <div style={{ transform: 'translateY(10%) rotate(8deg)', opacity: 0.5 }}>
                <ScrollingRow games={row1Games} direction="right" duration="50s" filled />
            </div>
            <div style={{ transform: 'translateY(15%) rotate(-4deg)', opacity: 0.8 }}>
                <ScrollingRow games={row2Games} direction="left" duration="35s" />
            </div>
        </div>
    );
};
