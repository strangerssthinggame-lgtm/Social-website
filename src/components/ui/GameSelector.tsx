"use client";

import React from 'react';
import styles from './GameSelector.module.css';
import { GAMES } from './GamePreview';

interface GameSelectorProps {
    selectedGameId: string | undefined | null;
    onSelectGame: (id: string) => void;
}

export const GameSelector: React.FC<GameSelectorProps> = ({ selectedGameId, onSelectGame }) => {
    // Filter out emoji and tt1l, show 3 games
    const displayGames = GAMES.filter(g => g.id !== 'emoji' && g.id !== 'tt1l').slice(0, 3);

    return (
        <div className={styles.container}>
            {displayGames.map((game) => (
                <button
                    key={game.id}
                    className={`${styles.selectorBtn} ${selectedGameId === game.id ? styles.active : ''}`}
                    onClick={() => onSelectGame(game.id)}
                    aria-label={`Select ${game.label}`}
                    suppressHydrationWarning
                >
                    <div className={styles.iconWrapper}>
                        <game.icon size={24} />
                    </div>
                    {/* Simplified labels for the small buttons */}
                    <span className={styles.label}>{getShortLabel(game.id)}</span>
                </button>
            ))}
        </div>
    );
};

// Helper for shorter labels to fit in the small grid
const getShortLabel = (id: string) => {
    switch (id) {
        case 'nhie': return 'NHIE';
        case 'wyr': return 'WYR';
        case 'tt1l': return '2T1L';
        case 'emoji': return 'EMOJI';
        case 'thisorthat': return 'THIS';
        case 'couple': return 'QUIZ';
        default: return 'GAME';
    }
};
