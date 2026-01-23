"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
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
    ctaText?: string;
    ctaAction?: 'play' | 'link' | 'scan';
    ctaLink?: string;
}

export const GamePreview: React.FC<GamePreviewProps> = ({
    activeGameId,
    ctaText = "PLAY DEMO",
    ctaAction = "play",
    ctaLink
}) => {
    const router = useRouter();
    // Default start view is 'list' if no activeGameId is effectively "forced" to a specific detail
    // We treat activeGameId as a starting point. If null/undefined, we start at list.
    const [view, setView] = React.useState<'list' | 'detail' | 'playing' | 'scanning'>('list');
    const [internalSelectedGameId, setInternalSelectedGameId] = React.useState<string>('nhie');
    const [selectedVibe, setSelectedVibe] = React.useState<string>('');
    const [isPlaying, setIsPlaying] = React.useState(false);

    // Derived selected game
    const selectedGame = GAMES.find(g => g.id === internalSelectedGameId) || GAMES[0];

    // Effect: If external prop changes, we might want to navigate
    React.useEffect(() => {
        if (activeGameId) {
            setInternalSelectedGameId(activeGameId);
            setView('detail');
            setIsPlaying(false);
            const game = GAMES.find(g => g.id === activeGameId);
            if (game && game.vibes.length > 0) {
                setSelectedVibe(game.vibes[0].id);
            }
        } else {
            // If activeGameId is cleared, maybe go back to list? 
            // For now, let's allow it to stay where it is or default to list if it was never set
            if (view === 'detail' && !activeGameId) {
                // optional: setView('list');
            }
        }
    }, [activeGameId]);

    const handleGameSelect = (id: string) => {
        setInternalSelectedGameId(id);
        const game = GAMES.find(g => g.id === id);
        if (game && game.vibes.length > 0) {
            setSelectedVibe(game.vibes[0].id);
        }
        setView('detail');
    };

    const handleBack = () => {
        if (isPlaying) {
            setIsPlaying(false);
            setView('detail');
        } else if (view === 'scanning') {
            setView('detail');
        } else if (view === 'detail' && !activeGameId) {
            setView('list');
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePlayAction = () => {
        if (ctaAction === 'link' && ctaLink) {
            router.push(ctaLink);
        } else if (ctaAction === 'scan') {
            setView('scanning');
        } else {
            handlePlay();
        }
    };

    return (
        <div className={styles.container}>
            {/* App Device Header */}
            <div className={styles.header}>
                <div className={styles.topBar}>
                    {/* Back button logic */}
                    {(view === 'detail' || view === 'playing' || view === 'scanning') ? (
                        <button
                            className={styles.navButton}
                            onClick={handleBack}
                            style={isPlaying && (internalSelectedGameId === 'nhie' || internalSelectedGameId === 'wyr' || internalSelectedGameId === 'thisorthat')
                                ? { color: 'black', background: 'rgba(0,0,0,0.05)' }
                                : {}
                            }
                            suppressHydrationWarning
                        >
                            <ChevronLeft size={20} />
                        </button>
                    ) : (
                        // Placeholder
                        <div style={{ width: 40, height: 40 }} />
                    )}

                    {/* Title or Logo in Header */}
                    <div className={styles.headerTitle}>
                        {view === 'list' ? '' :
                            view === 'detail' ? '' :
                                view === 'scanning' ? 'Scanning' :
                                    'Playing'}
                    </div>

                    <div style={{ width: 40 }}></div>
                </div >
            </div >

            {/* Main Content */}
            < div className={styles.content} >

                {/* LIST VIEW */}
                {
                    view === 'list' && (
                        <div className={styles.listView}>
                            <div className={styles.listHeader}>
                                <h3>Demo Games</h3>
                                <p>Select a game to start playing</p>
                            </div>
                            <div className={styles.gamesList}>
                                {GAMES.map((game) => (
                                    <div key={game.id} className={styles.gameListItem} onClick={() => handleGameSelect(game.id)}>
                                        <div className={styles.listIconBox} style={{ backgroundColor: game.color }}>
                                            <game.icon size={20} color="black" />
                                        </div>
                                        <div className={styles.listInfo}>
                                            <span className={styles.listName}>{game.label}</span>
                                            <span className={styles.listTagline}>{game.tagline}</span>
                                        </div>
                                        <ChevronLeft size={16} className={styles.listArrow} style={{ transform: 'rotate(180deg)', color: '#d4d4d8' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }

                {/* DETAIL VIEW & PLAYING VIEW */}
                {
                    (view === 'detail' || view === 'playing') && (
                        <>
                            {isPlaying && internalSelectedGameId === 'nhie' ? (
                                <NeverHaveIEver vibe={selectedVibe} />
                            ) : isPlaying && internalSelectedGameId === 'wyr' ? (
                                <WouldYouRather vibe={selectedVibe} />
                            ) : isPlaying && internalSelectedGameId === 'thisorthat' ? (
                                <ThisOrThat vibe={selectedVibe} />
                            ) : selectedGame && !isPlaying && (
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
                        </>
                    )
                }

                {/* SCANNING VIEW */}
                {
                    view === 'scanning' && selectedGame && !isPlaying && (
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
                                <button className={styles.cancelButton} onClick={() => setView('detail')} suppressHydrationWarning>
                                    <X size={16} />
                                    <span>CANCEL</span>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div >

            {/* Sticky Actions for Detail View */}
            {
                view === 'detail' && !isPlaying && (
                    <div className={styles.stickyFooter}>
                        <button className={styles.inviteButton} suppressHydrationWarning>
                            <UserPlus size={20} color="#71717a" />
                        </button>
                        <button className={styles.findMatchButton} onClick={handlePlayAction} suppressHydrationWarning>
                            <Play size={20} fill="black" />
                            <span>{ctaText}</span>
                        </button>
                    </div>
                )
            }
        </div >
    );
};
