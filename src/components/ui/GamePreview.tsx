"use client";

import React from 'react';
import styles from './GamePreview.module.css';
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

const GAMES = [
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
            { id: 'easy', label: 'Easy', icon: <Sparkles size={16} /> },
            { id: 'hard', label: 'Hard', icon: <Flame size={16} /> },
            { id: 'gross', label: 'Gross', icon: <Zap size={16} /> }
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

export const GamePreview: React.FC = () => {
    const [selectedGameId, setSelectedGameId] = React.useState<string | null>(null);
    const [view, setView] = React.useState<'list' | 'detail' | 'scanning'>('list');
    const [selectedVibe, setSelectedVibe] = React.useState<string>('');

    const selectedGame = GAMES.find(g => g.id === selectedGameId);

    const handleGameClick = (id: string) => {
        const game = GAMES.find(g => g.id === id);
        setSelectedGameId(id);
        if (game && game.vibes.length > 0) {
            setSelectedVibe(game.vibes[0].id);
        }
        setView('detail');
    };

    return (
        <div className={styles.container}>
            {/* App Device Header */}
            <div className={styles.header}>
                <div className={styles.topBar}>
                    {view === 'detail' ? (
                        <>
                            <button className={styles.navButton} onClick={() => setView('list')}>
                                <ChevronLeft size={20} />
                            </button>
                            <button className={styles.navButton}>
                                <HelpCircle size={20} color="#71717a" />
                            </button>
                        </>
                    ) : (
                        <div className={styles.lobbyTop}>
                            <div className={styles.lobbyCircle}>
                                <Gamepad2 size={16} color="black" />
                            </div>
                            <X size={18} color="#71717a" />
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {view === 'list' ? (
                    <>
                        <div className={styles.lobbyHeader}>
                            <h3>GAME LOBBY</h3>
                        </div>
                        <div className={styles.gameList}>
                            {GAMES.map(game => (
                                <div
                                    key={game.id}
                                    className={styles.gameCard}
                                    onClick={() => handleGameClick(game.id)}
                                >
                                    <div className={styles.gameIcon} style={{ background: `${game.color}20`, color: game.color }}>
                                        <game.icon size={16} />
                                    </div>
                                    <div className={styles.gameInfo}>
                                        <span className={styles.gameLabel}>{game.label}</span>
                                        <span className={styles.gameSub}>{game.tagline}</span>
                                    </div>
                                    <ArrowRight size={14} color="#3f3f46" />
                                </div>
                            ))}
                        </div>
                    </>
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
            {view === 'detail' && (
                <div className={styles.stickyFooter}>
                    <button className={styles.inviteButton}>
                        <UserPlus size={20} color="#71717a" />
                    </button>
                    <button className={styles.findMatchButton} onClick={() => setView('scanning')}>
                        <span>FIND MATCH</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
            )}

            {/* Scanning View */}
            {view === 'scanning' && selectedGame && (
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

            {/* Bottom Nav Simulation for List View */}
            {view === 'list' && (
                <div className={styles.bottomNav}>
                    <div className={styles.navItem}><div className={styles.navDot} /></div>
                    <div className={`${styles.navItem} ${styles.active}`}><div className={styles.navDot} /></div>
                    <div className={styles.navItem}><div className={styles.navDot} /></div>
                </div>
            )}
        </div>
    );
};
