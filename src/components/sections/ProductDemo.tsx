"use client";

import React, { useState } from 'react';
import styles from './ProductDemo.module.css';
import { GamePreview } from '../ui/GamePreview';

export const ProductDemo: React.FC = () => {
    return (
        <section className={styles.section} id="games">
            <div className={styles.container}>
                <h2 className={styles.headline}>The Games that Connect You</h2>

                <div className={styles.demoContainer}>
                    <div className={styles.phoneFrame}>
                        <div className={styles.notch}></div>
                        <div className={styles.screen}>
                            <GamePreview />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
