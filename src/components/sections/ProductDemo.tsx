"use client";

import React, { useState } from 'react';
import styles from './ProductDemo.module.css';
import { GamePreview } from '../ui/GamePreview';

import { GameSelector } from '../ui/GameSelector';

export const ProductDemo: React.FC = () => {
    const [selectedGame, setSelectedGame] = useState<string | undefined>('nhie');

    return (
        <section className={styles.section} id="games">
            <div className={styles.container}>
                <h2 className={styles.headline}>The Games that Connect You</h2>

                <div className={styles.demoContainer}>
                    <div className={styles.phoneFrame}>
                        <div className={styles.notch}></div>
                        <div className={styles.screen}>
                            <GamePreview activeGameId={selectedGame} />
                        </div>
                    </div>

                    <GameSelector
                        selectedGameId={selectedGame}
                        onSelectGame={setSelectedGame}
                    />
                </div>
            </div>
        </section>
    );
};
