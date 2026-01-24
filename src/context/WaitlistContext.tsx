"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface WaitlistContextType {
    email: string;
    setEmail: (email: string) => void;
    status: Status;
    joinWaitlist: (e?: React.FormEvent) => Promise<void>;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const WaitlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<Status>('idle');

    const joinWaitlist = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            await addDoc(collection(db, "waitlist"), {
                email: email,
                timestamp: serverTimestamp()
            });
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
        }
    };

    return (
        <WaitlistContext.Provider value={{ email, setEmail, status, joinWaitlist }}>
            {children}
        </WaitlistContext.Provider>
    );
};

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    if (!context) {
        throw new Error('useWaitlist must be used within a WaitlistProvider');
    }
    return context;
};
