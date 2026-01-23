import React from 'react';
import styles from './CardMarquee.module.css';

interface Game {
    label: string;
    icon: string;
    filled?: boolean;
    yellow?: boolean;
}

const row1Games: Game[] = [
    { label: 'Couple Quiz', icon: '❤️' },
    { label: 'Love Language', icon: '💌' },
    { label: 'First Date Sim', icon: '☕' },
    { label: 'Rel. Goals', icon: '🚀' },
    { label: 'Truth or Dare', icon: '🔥' },
];

const row2Games: Game[] = [
    { label: 'Never Have I Ever', icon: '🍺' },
    { label: 'Most Likely To', icon: '👉' },
    { label: '2 Truths 1 Lie', icon: '🤞' },
    { label: 'Story Builder', icon: '📖' },
    { label: 'Emoji Challenge', icon: '🤪' },
];

const row3Games: Game[] = [
    { label: 'Picture This', icon: '🎨' },
    { label: 'Rhyme Time', icon: '🎵' },
    { label: 'Would You Rather', icon: '⚖️' },
    { label: 'This or That', icon: '🆚' },
    { label: 'Hot Takes', icon: '🌶️' },
];

const row4Games: Game[] = [
    { label: 'Friend Zone', icon: '🤝' },
    { label: 'Personality Match', icon: '🧩' },
    { label: 'Compatibility', icon: '💯' },
    { label: 'Couple Trivia', icon: '🧠' },
    { label: 'Memory Lane', icon: '📸' },
];

const row5Games: Game[] = [
    { label: 'Speed Dating', icon: '⏱️' },
    { label: 'Convo Starters', icon: '💬' },
    { label: 'Get To Know', icon: '👋' },
    { label: 'Dare Roulette', icon: '🎰' },
    { label: 'Bucket List', icon: '📝' },
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
                <ScrollingRow games={row4Games} direction="right" duration="50s" filled />
            </div>
            <div style={{ transform: 'translateY(15%) rotate(-4deg)', opacity: 0.8 }}>
                <ScrollingRow games={row5Games} direction="left" duration="35s" />
            </div>
        </div>
    );
};
