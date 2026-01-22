"use client";

import React from 'react';
import styles from './GamePreview.module.css';
import { NeverHaveIEver } from '../games/NeverHaveIEver';
import { WouldYouRather } from '../games/WouldYouRather';
import { ThisOrThat } from '../games/ThisOrThat';
import {
    Gamepad2,
    ArrowRight,
    X,
    MessageCircle,
    Flame,
    Sparkles,
    Check,
    Clock,
    Users,
    Activity,
    ChevronLeft,
    Play,
    HelpCircle,
    UserPlus,
    Plus,
    Zap
} from 'lucide-react';

export const GAMES = [
    {
        id: 'nhie',
        label: 'Never Have I Ever',
        tagline: "Break the ice instantly.",
        description: "We'll show you and your match 5 tricky scenarios. Choose your answer and see if you're on the same wavelength.",
        stats: { time: "2-3 Mins", players: "2 Souls", active: "1240+ Active" },
        vibes: [
            { id: 'chill', label: 'Chill', icon: <Sparkles size={16} /> },
            { id: 'wild', label: 'Wild', icon: <Flame size={16} /> },
            { id: 'deep', label: 'Deep', icon: <Zap size={16} /> }
        ],
        rules: ["Find a Match", "Quickfire Rounds", "Sync Up", "Unlock Chat"],
        icon: MessageCircle,
        color: '#60a5fa'
    },
    {
        id: 'wyr',
        label: 'Would You Rather',
        tagline: "The classic game of impossible choices.",
        description: "Pick your poison and see how your choices compare with others.",
        stats: { time: "3-5 Mins", players: "2 Souls", active: "856+ Active" },
        vibes: [
            { id: 'chill', label: 'Chill', icon: <Sparkles size={16} /> },
            { id: 'deep', label: 'Deep', icon: <Zap size={16} /> },
            { id: 'wild', label: 'Wild', icon: <Flame size={16} /> }
        ],
        rules: ["Two Options", "Choose One", "See Stats", "Discuss"],
        icon: Flame,
        color: '#f87171'
    },
    {
        id: 'tt1l',
        label: 'Two Truths 1 Lie',
        tagline: "Can you spot the deception?",
        description: "Test your lie detector skills against friends or strangers.",
        stats: { time: "5-10 Mins", players: "2+ Souls", active: "432+ Active" },
        vibes: [
            { id: 'classic', label: 'Classic', icon: <Check size={16} /> },
            { id: 'timed', label: 'Timed', icon: <Clock size={16} /> }
        ],
        rules: ["Three Statements", "Poker Face", "Guessing"],
        icon: Check,
        color: '#34d399'
    },
    {
        id: 'emoji',
        label: 'Emoji Moods',
        tagline: "Express yourself without words!",
        description: "Describe a vibe, movie, or feeling using only 3 emojis.",
        stats: { time: "1-2 Mins", players: "2 Souls", active: "156+ Active" },
        vibes: [
            { id: 'easy', label: 'Easy', icon: <Sparkles size={16} /> },
            { id: 'abstract', label: 'Abstract', icon: <Activity size={16} /> },
            { id: 'deep', label: 'Deep', icon: <Zap size={16} /> }
        ],
        rules: ["No Letters", "Three Limit", "Interpretation"],
        icon: Sparkles,
        color: '#fbbf24'
    },
    {
        id: 'thisorthat',
        label: 'This or That',
        tagline: "The ultimate vibe test!",
        description: "Choose your preference between two options and see if you match.",
        stats: { time: "2 Mins", players: "2 Souls", active: "2105+ Active" },
        vibes: [
            { id: 'classic', label: 'Classic', icon: <Check size={16} /> },
            { id: 'deep', label: 'Deep', icon: <Zap size={16} /> },
            { id: 'spicy', label: 'Spicy', icon: <Flame size={16} /> }
        ],
        rules: ["10 Rounds", "Be Honest", "Compare"],
        icon: Activity,
        color: '#a78bfa'
    },
    {
        id: 'couple',
        label: 'Couple Quiz',
        tagline: "The ultimate relationship test!",
        description: "Take turns guessing each other's answers to see how well you know your partner.",
        stats: { time: "5 Mins", players: "2 Souls", active: "3420+ Active" },
        vibes: [
            { id: 'fun', label: 'Fun', icon: <Sparkles size={16} /> },
            { id: 'deep', label: 'Deep', icon: <Zap size={16} /> }
        ],
        rules: ["Honesty Key", "No Peeking", "Swap Roles"],
        icon: Users,
        color: '#f472b6'
    }
];

interface GamePreviewProps {
    activeGameId?: string | null;
}

export const GamePreview: React.FC<GamePreviewProps> = ({ activeGameId }) => {
    // Default to 'nhie' if no explicit ID, but since external control is expected, 
    // we'll rely on activeGameId or fall back to 'nhie'.
    const [internalSelectedGameId, setInternalSelectedGameId] = React.useState<string>('nhie');
    const [view, setView] = React.useState<'detail' | 'scanning'>('detail');
    const [selectedVibe, setSelectedVibe] = React.useState<string>('');
    const [isPlaying, setIsPlaying] = React.useState(false);

    // If activeGameId prop is provided, precise control mode is active
    const selectedGameId = activeGameId !== undefined ? activeGameId : internalSelectedGameId;
    const selectedGame = GAMES.find(g => g.id === selectedGameId) || GAMES[0];

    // Sync view state with activeGameId changes
    React.useEffect(() => {
        if (activeGameId) {
            setView('detail');
            setIsPlaying(false);
            const game = GAMES.find(g => g.id === activeGameId);
            if (game && game.vibes.length > 0) {
                setSelectedVibe(game.vibes[0].id);
            }
        }
    }, [activeGameId]);

    const handleBack = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else if (view === 'scanning') {
            setView('detail');
        }
    };

    const handlePlay = () => {
        if (selectedGameId === 'nhie' || selectedGameId === 'wyr' || selectedGameId === 'thisorthat') {
            setIsPlaying(true);
        } else {
            setView('scanning');
        }
    };

    return (
        <div className={styles.container}>
            {/* App Device Header */}
            <div className={styles.header}>
                <div className={styles.topBar}>
                    {/* Only show Back button if playing or conducting a scan (not in base detail view) */}
                    {(isPlaying || view === 'scanning') ? (
                        <button
                            className={styles.navButton}
                            onClick={handleBack}
                            style={isPlaying && (selectedGameId === 'nhie' || selectedGameId === 'wyr' || selectedGameId === 'thisorthat')
                                ? { color: 'black', background: 'rgba(0,0,0,0.05)' }
                                : {}
                            }
                        >
                            <ChevronLeft size={20} />
                        </button>
                    ) : (
                        // Placeholder to balance the header or show help
                        <button className={styles.navButton} style={{ opacity: 0, pointerEvents: 'none' }}>
                            <ChevronLeft size={20} />
                        </button>
                    )}

                    {/* Help button removed as requested */}
                    <div style={{ width: 40 }}></div>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {isPlaying && selectedGameId === 'nhie' ? (
                    <NeverHaveIEver vibe={selectedVibe} />
                ) : isPlaying && selectedGameId === 'wyr' ? (
                    <WouldYouRather vibe={selectedVibe} />
                ) : isPlaying && selectedGameId === 'thisorthat' ? (
                    <ThisOrThat vibe={selectedVibe} />
                ) : selectedGame && (
                    <div className={styles.detailView}>
                        <div className={styles.heroSection}>
                            <div className={styles.gameIconContainer} style={{ backgroundColor: selectedGame.color }}>
                                <selectedGame.icon size={32} color="black" fill="black" />
                            </div>
                            <h2 className={styles.gameTitle}>{selectedGame.label}</h2>
                            <p className={styles.gameDescription}>{selectedGame.description}</p>
                        </div>

                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <Clock size={18} color={selectedGame.color} />
                                <span className={styles.statValue}>{selectedGame.stats.time}</span>
                            </div>
                            <div className={styles.statBox}>
                                <Users size={18} color="#60a5fa" />
                                <span className={styles.statValue}>{selectedGame.stats.players}</span>
                            </div>
                        </div>

                        <div className={styles.difficultySection}>
                            <h3 className={styles.sectionTitle}>Select Vibe</h3>
                            <div className={styles.difficultyGrid}>
                                {selectedGame.vibes.map((vibe) => (
                                    <div
                                        key={vibe.id}
                                        onClick={() => setSelectedVibe(vibe.id)}
                                        className={`${styles.diffCard} ${selectedVibe === vibe.id ? styles.selectedDiff : ''}`}
                                        style={selectedVibe === vibe.id ? { borderColor: selectedGame.color } : {}}
                                    >
                                        <div style={{ color: selectedGame.color }}>{vibe.icon}</div>
                                        <span className={styles.diffLabel}>{vibe.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.spacer} />
                    </div>
                )}
            </div>

            {/* Sticky Actions for Detail View */}
            {view === 'detail' && !isPlaying && (
                <div className={styles.stickyFooter}>
                    <button className={styles.inviteButton}>
                        <UserPlus size={20} color="#71717a" />
                    </button>
                    <button className={styles.findMatchButton} onClick={handlePlay}>
                        <Play size={20} fill="black" />
                        <span>PLAY DEMO</span>
                    </button>
                </div>
            )}

            {/* Scanning View - Overlay or separate view */}
            {view === 'scanning' && selectedGame && !isPlaying && (
                <div className={styles.scanningOverlay}>
                    <div className={styles.scanningContent}>
                        <div className={styles.scanPulse}>
                            <div className={styles.scanRing} />
                            <div className={styles.scanRing} />
                            <div className={styles.scanRing} />
                            <div className={styles.scanIcon} style={{ backgroundColor: selectedGame.color }}>
                                <selectedGame.icon size={28} color="black" />
                            </div>
                        </div>
                        <h3 className={styles.scanTitle}>FINDING SOULS...</h3>
                        <p className={styles.scanSubtitle}>Looking for someone to play {selectedGame.label}</p>
                        <button className={styles.cancelButton} onClick={() => setView('detail')}>
                            <X size={16} />
                            <span>CANCEL</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Removed Bottom Nav as list view is gone */}
        </div>
    );
};
