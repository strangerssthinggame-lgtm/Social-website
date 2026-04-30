import React from 'react';
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Read our Terms & Conditions for using Infriend.",
    alternates: {
        canonical: '/terms',
    },
    openGraph: {
        title: "Terms & Conditions | Infriend",
        url: 'https://infriend.app/terms',
    }
};

export default function TermsOfService() {
    return (
        <main>
            <div className="container" style={{ padding: '120px 2rem 4rem', maxWidth: '800px' }}>
                <Link href="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500
                }}>
                    ← Back to Home
                </Link>

                <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Terms & Conditions</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last updated: January 24, 2026</p>

                <div className="prose" style={{ lineHeight: '1.7', color: 'var(--text-primary)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        These Terms & Conditions ("Terms") govern your access to and use of our website and mobile application (the "Service"). By using the Service, you agree to these Terms.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Eligibility</h2>
                    <p>You must be at least:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>13 years old (or the minimum age required in your country)</li>
                        <li>Legally permitted to use social networking services</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Account Responsibility</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>You are responsible for maintaining the confidentiality of your account</li>
                        <li>You agree to provide accurate and truthful information</li>
                        <li>You are responsible for all activity under your account</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Acceptable Use</h2>
                    <p>You agree <strong>not</strong> to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Harass, abuse, or harm other users</li>
                        <li>Share illegal, explicit, or hateful content</li>
                        <li>Impersonate others or provide false identity information</li>
                        <li>Attempt to exploit or reverse-engineer the Service</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>4. User Content</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>You retain ownership of content you create</li>
                        <li>You grant us a limited license to display and distribute your content within the Service</li>
                        <li>We may remove content that violates these Terms or community guidelines</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Safety & Moderation</h2>
                    <p>We reserve the right to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Monitor interactions for safety and abuse prevention</li>
                        <li>Suspend or terminate accounts that violate these Terms</li>
                        <li>Take necessary action to protect users and the platform</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Termination</h2>
                    <p>You may stop using the Service at any time. We may suspend or terminate access if you violate these Terms or pose a risk to the community.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>7. Disclaimers</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>The Service is provided "as is" without warranties of any kind</li>
                        <li>We do not guarantee uninterrupted or error-free operation</li>
                        <li>Social interactions are user-driven; we are not responsible for user behavior</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>8. Limitation of Liability</h2>
                    <p>To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the Service.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>9. Changes to Terms</h2>
                    <p>We may update these Terms from time to time. Continued use of the Service means you accept the updated Terms.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>10. Governing Law</h2>
                    <p>These Terms are governed by the laws of the jurisdiction in which the company operates.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>11. Contact</h2>
                    <p>For questions about these Terms:</p>
                    <p><strong>Email:</strong> <a href="mailto:hello@infriend.app" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>hello@infriend.app</a></p>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', marginTop: '3rem', fontStyle: 'italic' }}>
                        *This document is designed to meet general Google Play and Apple App Store policy expectations. It does not constitute legal advice.*
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
