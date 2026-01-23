"use client";

import React from 'react';
import styles from './VibePreview.module.css';
import {
    Plus,
    ArrowRight,
    Sparkles,
    Music,
    Dog,
    Film,
    Heart,
    Calendar
} from 'lucide-react';

const MOCK_VIBES = [
    {
        id: 1,
        question: "Pet Energy",
        answer: "Dog",
        icon: <Dog size={14} color="#f472b6" />,
        emoji: "🐕",
        isFilled: true
    },
    {
        id: 2,
        question: "Movie Genre",
        answer: "Comedy",
        icon: <Film size={14} color="#60a5fa" />,
        emoji: "😂",
        isFilled: true
    },
    {
        id: 3,
        question: "Music Vibe",
        answer: null,
        icon: null,
        emoji: null,
        isFilled: false
    }
];

const VIBE_QUESTIONS = [
    {
        id: 'pet', label: 'Pet Energy', icon: <Dog size={18} />, answers: [
            { label: 'Dog', emoji: '🐕' },
            { label: 'Cat', emoji: '🐱' },
            { label: 'Both', emoji: '🐾' },
            { label: 'Plants', emoji: '🌱' }
        ]
    },
    {
        id: 'movie', label: 'Movie Genre', icon: <Film size={18} />, answers: [
            { label: 'Action', emoji: '💥' },
            { label: 'Comedy', emoji: '😂' },
            { label: 'Drama', emoji: '🎭' },
            { label: 'Horror', emoji: '👻' }
        ]
    },
    {
        id: 'date', label: 'Date Night', icon: <Heart size={18} />, answers: [
            { label: 'Fancy', emoji: '🍷' },
            { label: 'Casual', emoji: '🍕' },
            { label: 'Cozy', emoji: '🛋️' },
            { label: 'Spontaneous', emoji: '✨' }
        ]
    },
    {
        id: 'music', label: 'Music Vibe', icon: <Music size={18} />, answers: [
            { label: 'Pop', emoji: '🎤' },
            { label: 'Rock', emoji: '🎸' },
            { label: 'Hip-Hop', emoji: '🎧' },
            { label: 'Indie', emoji: '🌙' }
        ]
    },
    {
        id: 'weekend', label: 'Weekend Mode', icon: <Calendar size={18} />, answers: [
            { label: 'Chill', emoji: '😌' },
            { label: 'Party', emoji: '🎉' },
            { label: 'Adventure', emoji: '🏔️' },
            { label: 'Create', emoji: '🎨' }
        ]
    }
];

export const VibePreview: React.FC = () => {
    const [myVibes, setMyVibes] = React.useState<any[]>(MOCK_VIBES);
    const [activeSlot, setActiveSlot] = React.useState<number | null>(null);
    const [isSheetVisible, setIsSheetVisible] = React.useState(false);
    const [selectedQuestion, setSelectedQuestion] = React.useState<any>(null);

    const handleSlotClick = (id: number) => {
        setActiveSlot(id);
        setIsSheetVisible(true);
        setSelectedQuestion(null);
    };

    const handleSelectQuestion = (question: any) => {
        setSelectedQuestion(question);
    };

    const handleSave = (answer: string, emoji: string) => {
        setMyVibes(prev => prev.map(v =>
            v.id === activeSlot ? { ...v, question: selectedQuestion.label, answer, emoji, isFilled: true } : v
        ));
        setIsSheetVisible(false);
        setSelectedQuestion(null);
    };

    return (
        <div className={styles.container}>
            {/* App Device Header */}
            <div className={styles.header}>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                <h2 className={styles.title}>
                    VIBE<br /><span style={{ color: 'var(--color-primary)' }}>CHECK.</span>
                </h2>
                <p className={styles.subtitle}>
                    Answer these to get 3x more meaningful connections.
                </p>

                <div className={styles.slots}>
                    {myVibes.map((vibe) => (
                        <div
                            key={vibe.id}
                            onClick={() => handleSlotClick(vibe.id)}
                            className={`${styles.slot} ${vibe.isFilled ? styles.filled : styles.empty}`}
                        >
                            {vibe.isFilled ? (
                                <>
                                    <div className={styles.slotHeader}>
                                        {vibe.icon || <Sparkles size={14} color="var(--color-primary)" />}
                                        <span className={styles.questionText}>{vibe.question}</span>
                                    </div>
                                    <div className={styles.slotMain}>
                                        <span className={styles.answerEmoji}>{vibe.emoji}</span>
                                        <span className={styles.answerText}>{vibe.answer}</span>
                                    </div>
                                    <div className={styles.chevron}>
                                        <ArrowRight size={10} />
                                    </div>
                                </>
                            ) : (
                                <div className={styles.emptyContent}>
                                    <div className={styles.plusCircle}>
                                        <Plus size={16} strokeWidth={3} />
                                    </div>
                                    <span className={styles.addLabel}>Add Vibe {vibe.id}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.tipBox}>
                    <Sparkles size={12} color="var(--color-primary)" fill="var(--color-primary)" />
                    <p className={styles.tipText}>
                        <strong>PRO TIP:</strong> We&apos;ll ask new connections to guess your answers to see if you vibe.
                    </p>
                </div>
            </div>

            {/* Removed App Footer */}

            {/* Simulated Bottom Sheet */}
            {isSheetVisible && (
                <div className={styles.sheetBackdrop} onClick={() => setIsSheetVisible(false)}>
                    <div className={styles.sheet} onClick={e => e.stopPropagation()}>
                        <div className={styles.sheetHandle} />
                        <div className={styles.sheetHeader}>
                            <h3>{selectedQuestion ? 'PICK ANSWER' : 'PICK VIBE'}</h3>
                        </div>
                        <div className={styles.sheetScroll}>
                            {!selectedQuestion ? (
                                <div className={styles.questionList}>
                                    {VIBE_QUESTIONS.map((q) => (
                                        <div key={q.id} className={styles.questionItem} onClick={() => handleSelectQuestion(q)}>
                                            {q.icon}
                                            <span>{q.label}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={styles.answerGrid}>
                                    {selectedQuestion.answers.map((ans: any) => (
                                        <div key={ans.label} className={styles.answerItem} onClick={() => handleSave(ans.label, ans.emoji)}>
                                            <span className={styles.lgEmoji}>{ans.emoji}</span>
                                            <span>{ans.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
