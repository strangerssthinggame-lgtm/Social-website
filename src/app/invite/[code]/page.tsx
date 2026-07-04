import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { PlayStoreBadge } from '@/components/ui/PlayStoreBadge';
import { Button } from '@/components/ui/Button';
import styles from './InvitePage.module.css';

export const metadata: Metadata = {
    title: "You're Invited to Flame!",
    description: "Accept your invite and join the first game-first social connection app for college students.",
};

export default async function InviteLandingPage({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;
    const deepLink = `flame://invite/${code}`;

    return (
        <main style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#09090b',
            color: 'white',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at center, rgba(250, 204, 21, 0.15) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '500px' }}>
                <div className={styles.emoji}>
                    👋
                </div>
                
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    marginBottom: '1rem',
                    letterSpacing: '-1px'
                }}>
                    You're Invited!
                </h1>
                
                <p style={{
                    fontSize: '1.125rem',
                    color: '#a1a1aa',
                    marginBottom: '2.5rem',
                    lineHeight: 1.6
                }}>
                    A friend wants to connect with you on <strong style={{ color: '#FACC15' }}>Flame</strong>.<br /> 
                    Accept your invite to start playing and connecting.
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%'
                }}>
                    <a href={deepLink}>
                        <Button variant="primary" size="lg" style={{ width: '100%', height: '64px', fontSize: '1.25rem' }}>
                            Open in Flame App 🚀
                        </Button>
                    </a>

                    <div style={{
                        marginTop: '2rem',
                        padding: '2rem',
                        borderRadius: '24px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <p style={{ marginBottom: '1rem', fontSize: '0.875rem', fontWeight: 600, color: '#71717a' }}>
                            DON'T HAVE THE APP YET?
                        </p>
                        <PlayStoreBadge />
                    </div>
                </div>

                <Link href="/" style={{
                    marginTop: '3rem',
                    display: 'inline-block',
                    color: '#71717a',
                    fontSize: '0.875rem',
                    textDecoration: 'none'
                }}>
                    Learn more about Flame
                </Link>
            </div>
        </main>
    );
}
