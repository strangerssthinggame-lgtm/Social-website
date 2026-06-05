import React from 'react';
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Child Safety & Protection Standards | Ling",
    description: "Read our Child Safety and Protection Standards. We maintain a zero-tolerance policy towards CSAE and CSAM.",
    alternates: {
        canonical: '/safety',
    },
    openGraph: {
        title: "Child Safety & Protection Standards | Ling",
        description: "Ling's commitment to safety: zero-tolerance policy for Child Sexual Exploitation and Abuse (CSAE) and Child Sexual Abuse Material (CSAM).",
        url: 'https://lingapp.in/safety',
    }
};

export default function SafetyPage() {
    return (
        <main>
            <div style={{ padding: '120px 2rem 4rem', maxWidth: '780px', margin: '0 auto' }}>
                
                {/* Back link */}
                <Link href="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '2.5rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                }}>
                    ← Back to Home
                </Link>

                {/* Page header */}
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: '#F0FDF4',
                        border: '1.5px solid #BBF7D0',
                        borderRadius: '999px',
                        padding: '0.4rem 1rem',
                        marginBottom: '1.5rem',
                    }}>
                        <span style={{ fontSize: '1rem' }}>🛡️</span>
                        <span style={{
                            color: '#16A34A',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                        }}>
                            Safety Standards
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 6vw, 3.25rem)',
                        marginBottom: '1rem',
                        color: 'var(--text-primary)',
                        lineHeight: 1.1,
                    }}>
                        Child Safety & <span style={{ color: 'var(--color-secondary)' }}>Protection</span> Standards
                    </h1>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                        Last Updated: June 2026
                    </p>
                </div>

                {/* Zero-Tolerance Policy Warning Banner */}
                <div style={{
                    background: '#FEF2F2',
                    border: '1.5px solid #FECACA',
                    borderRadius: '16px',
                    padding: '1.75rem 2rem',
                    marginBottom: '3rem',
                }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🛑</span>
                        <h2 style={{ 
                            margin: 0, 
                            fontSize: '1.5rem', 
                            color: '#991B1B',
                            textTransform: 'uppercase',
                            fontWeight: 900,
                            fontStyle: 'italic',
                        }}>
                            Zero-Tolerance Policy
                        </h2>
                    </div>
                    <p style={{ 
                        margin: 0, 
                        color: '#991B1B', 
                        fontSize: '1.05rem', 
                        lineHeight: 1.7, 
                        fontWeight: 500 
                    }}>
                        Ling has a strict, zero-tolerance policy towards any content or behavior related to Child Sexual Exploitation and Abuse (CSAE) or Child Sexual Abuse Material (CSAM). We are committed to maintaining a safe, secure, and respectful environment for our community.
                    </p>
                </div>

                {/* Reporting & Enforcement section */}
                <div style={{ lineHeight: 1.7, color: 'var(--text-primary)' }}>
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ 
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                            marginBottom: '1rem', 
                            color: 'var(--text-primary)',
                            fontStyle: 'italic',
                            textTransform: 'uppercase',
                        }}>
                            Reporting & Enforcement
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            If you encounter any content, profiles, or messages that violate our safety standards, please report them immediately:
                        </p>

                        {/* Reporting cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                            <div style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'flex-start',
                            }}>
                                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>📱</span>
                                <div>
                                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem', color: 'var(--text-primary)', textTransform: 'uppercase', fontStyle: 'italic' }}>
                                        In-App Reporting
                                    </h3>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                        Tap on the <strong>&ldquo;Report&rdquo;</strong> button on the user&apos;s profile or chat settings.
                                    </p>
                                </div>
                            </div>

                            <div style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'flex-start',
                            }}>
                                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>✉️</span>
                                <div>
                                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem', color: 'var(--text-primary)', textTransform: 'uppercase', fontStyle: 'italic' }}>
                                        Email Reporting
                                    </h3>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                        Send an email detailing the concern to our dedicated safety team at:{' '}
                                        <a href="mailto:support@lingapp.in" style={{ color: 'var(--color-secondary)', fontWeight: 700, textDecoration: 'underline' }}>
                                            support@lingapp.in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Enforcement actions details */}
                        <div style={{
                            background: 'rgba(254, 242, 242, 0.4)',
                            borderLeft: '4px solid #EF4444',
                            padding: '1.25rem 1.5rem',
                            borderRadius: '0 12px 12px 0',
                        }}>
                            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                Upon receiving a report, our team will investigate immediately. Any user found violating these guidelines will face permanent account termination, device bans, and we will report the incident to the National Center for Missing & Exploited Children (NCMEC) and local law enforcement as required by law.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
