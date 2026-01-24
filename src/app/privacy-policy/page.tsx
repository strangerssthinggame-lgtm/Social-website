import React from 'react';
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';

export default function PrivacyPolicy() {
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

                <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Privacy Policy</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last updated: January 24, 2026</p>

                <div className="prose" style={{ lineHeight: '1.7', color: 'var(--text-primary)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and mobile application (the "Service"). We are committed to protecting your privacy and complying with applicable data protection laws, including requirements from Google Play and Apple App Store.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
                    <p>We collect only the information necessary to provide a safe, enjoyable, and functional social experience.</p>

                    <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>a. Information You Provide</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Profile information (display name, age range, interests, preferences)</li>
                        <li>Optional profile details (habits, vibes, game responses)</li>
                        <li>Messages and in-app interactions</li>
                    </ul>

                    <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>b. Information Collected Automatically</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Device information (device type, OS version)</li>
                        <li>App usage data (features used, interaction timestamps)</li>
                        <li>Approximate location (country or city-level, not precise GPS)</li>
                    </ul>

                    <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>c. Sensitive Information</h3>
                    <p>We do <strong>not</strong> collect sensitive personal data such as real names, exact addresses, government IDs, or payment details unless explicitly required and clearly disclosed.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Create and manage user profiles</li>
                        <li>Enable social features such as discovery, chat, and games</li>
                        <li>Improve app safety and user experience</li>
                        <li>Moderate content and prevent misuse</li>
                        <li>Communicate important updates or changes</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Data Sharing</h2>
                    <p>We do <strong>not</strong> sell your personal data.</p>
                    <p>Your data may be shared only:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>With trusted service providers (hosting, analytics, messaging infrastructure)</li>
                        <li>If required by law or legal process</li>
                        <li>To protect the rights, safety, or integrity of our users and platform</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Data Storage & Security</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Data is stored using industry-standard secure servers</li>
                        <li>Encryption is used where applicable (in transit and at rest)</li>
                        <li>Access is limited to authorized personnel only</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Data Retention</h2>
                    <p>We retain your data only as long as necessary to provide the Service or as required by law. You may request deletion of your account and associated data at any time.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Your Rights</h2>
                    <p>Depending on your location, you may have the right to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Access your data</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Withdraw consent where applicable</li>
                    </ul>
                    <p>Requests can be made via the contact information below.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>7. Children’s Privacy</h2>
                    <p>The Service is <strong>not intended for users under 13 years of age</strong>. We do not knowingly collect data from children. If such data is discovered, it will be deleted immediately.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>8. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Significant changes will be communicated through the Service.</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>9. Contact Us</h2>
                    <p>For privacy-related questions or requests:</p>
                    <p><strong>Email:</strong> <a href="mailto:hello@bondly.app" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>hello@bondly.app</a></p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
