import React from 'react';
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Delete My Account | Ling",
    description: "Request deletion of your Ling account and associated data. Learn what data is removed, what may be retained, and how to submit a deletion request.",
    alternates: {
        canonical: '/delete-account',
    },
    openGraph: {
        title: "Delete My Account | Ling",
        description: "Request deletion of your Ling account and all associated data.",
        url: 'https://lingapp.in/delete-account',
    }
};

const CONTACT_EMAIL = 'hello@lingapp.com';
const EMAIL_SUBJECT = 'Account%20Deletion%20Request';
const EMAIL_BODY = `Hi%20Ling%20Team%2C%0A%0AI%20would%20like%20to%20request%20the%20permanent%20deletion%20of%20my%20Ling%20account%20and%20all%20associated%20data.%0A%0ADisplay%20Name%20%2F%20Username%3A%20%0ARegistered%20Email%20%2F%20Phone%3A%20%0A%0APlease%20confirm%20once%20my%20account%20has%20been%20deleted.%0A%0AThank%20you`;

export default function DeleteAccount() {
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
                        background: '#FEF2F2',
                        border: '1.5px solid #FECACA',
                        borderRadius: '999px',
                        padding: '0.4rem 1rem',
                        marginBottom: '1.5rem',
                    }}>
                        <span style={{ fontSize: '1rem' }}>🗑️</span>
                        <span style={{
                            color: '#DC2626',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontStyle: 'normal',
                        }}>
                            Account Deletion
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 6vw, 3.25rem)',
                        marginBottom: '1rem',
                        color: 'var(--text-primary)',
                    }}>
                        Delete Your <span style={{ color: 'var(--color-secondary)' }}>Ling</span> Account
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '620px', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                        We respect your right to privacy and data ownership. If you wish to permanently delete your Ling account and associated data, follow the steps below.
                    </p>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginTop: '0.75rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                        Last updated: May 12, 2026
                    </p>
                </div>

                {/* Warning banner */}
                <div style={{
                    background: '#FFFBEB',
                    border: '1.5px solid #FCD34D',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '3rem',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>⚠️</span>
                    <p style={{ margin: 0, color: '#92400E', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                        <strong>This action is permanent and cannot be undone.</strong> Once your account is deleted, your profile, photos, and account access cannot be recovered. Please read the information below before submitting a request.
                    </p>
                </div>

                <div style={{ lineHeight: 1.7, color: 'var(--text-primary)' }}>

                    {/* ── Step 1: In-app ── */}
                    <section style={{ marginBottom: '3rem' }}>
                        <StepHeader number={1} title="Delete Directly in the App" />
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            The fastest way to delete your account is from within the Ling app:
                        </p>
                        <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            <li>Open the <strong style={{ color: 'var(--text-primary)' }}>Ling</strong> app on your device</li>
                            <li>Go to <strong style={{ color: 'var(--text-primary)' }}>Profile → Settings</strong></li>
                            <li>Scroll to the bottom and tap <strong style={{ color: 'var(--color-secondary)' }}>&ldquo;Delete Account&rdquo;</strong></li>
                            <li>Confirm your choice when prompted</li>
                        </ol>
                        <p style={{ color: 'var(--text-tertiary)', marginTop: '1rem', fontSize: '0.875rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            Your account and data will be permanently deleted immediately upon confirmation.
                        </p>
                    </section>

                    <Divider />

                    {/* ── Step 2: Email ── */}
                    <section style={{ marginBottom: '3rem' }}>
                        <StepHeader number={2} title="Submit a Deletion Request by Email" />
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            If you no longer have access to the app, email us with the following details:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            <li>Your <strong style={{ color: 'var(--text-primary)' }}>display name or username</strong> on Ling</li>
                            <li>The <strong style={{ color: 'var(--text-primary)' }}>email address or phone number</strong> used to register</li>
                            <li>A brief statement that you wish to <strong style={{ color: 'var(--text-primary)' }}>permanently delete your account and all associated data</strong></li>
                        </ul>

                        <a
                            href={`mailto:${CONTACT_EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
                            id="email-deletion-request"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                background: 'var(--color-accent)',
                                color: '#FFFFFF',
                                padding: '0.9rem 1.75rem',
                                borderRadius: '12px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                textDecoration: 'none',
                            }}
                        >
                            ✉️&nbsp; Email {CONTACT_EMAIL}
                        </a>

                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginTop: '1rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            We will confirm and process your request within <strong>7 business days</strong>.
                        </p>
                    </section>

                    <Divider />

                    {/* ── What gets deleted ── */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            What Data Is Affected
                        </h2>

                        {/* Immediately deleted */}
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600, fontStyle: 'normal', textTransform: 'none' }}>
                            ✅ Permanently deleted <em>immediately</em> upon account deletion:
                        </p>
                        <div style={{
                            background: '#F0FDF4',
                            border: '1.5px solid #BBF7D0',
                            borderRadius: '12px',
                            padding: '1.25rem 1.5rem',
                            marginBottom: '1.5rem',
                        }}>
                            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#15803D', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                                <li>Your <strong>authentication account</strong> (login credentials)</li>
                                <li>Your <strong>profile</strong> — display name, age, interests, and all settings</li>
                                <li>Your <strong>profile photos</strong> and any other <strong>media files</strong> you uploaded</li>
                            </ul>
                        </div>

                        {/* Retained temporarily */}
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600, fontStyle: 'normal', textTransform: 'none' }}>
                            🕐 Retained temporarily — purged within <strong>1 day</strong>:
                        </p>
                        <div style={{
                            background: '#EFF6FF',
                            border: '1.5px solid #BFDBFE',
                            borderRadius: '12px',
                            padding: '1.25rem 1.5rem',
                            marginBottom: '1.5rem',
                        }}>
                            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#1D4ED8', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                                <li>
                                    <strong>Message content and timestamps</strong> — kept briefly in chat threads to maintain conversation integrity for the other party, then permanently deleted within 1 day.
                                </li>
                            </ul>
                        </div>

                        {/* Retained for safety */}
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600, fontStyle: 'normal', textTransform: 'none' }}>
                            🛡️ Retained for safety — purged after <strong>90 days</strong>:
                        </p>
                        <div style={{
                            background: '#FFFBEB',
                            border: '1.5px solid #FCD34D',
                            borderRadius: '12px',
                            padding: '1.25rem 1.5rem',
                            marginBottom: '1rem',
                        }}>
                            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#92400E', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                                <li>
                                    <strong>Reported content and abuse reports</strong> involving your account are retained for 90 days for trust &amp; safety review, then permanently deleted.
                                </li>
                            </ul>
                        </div>

                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginTop: '0.75rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            After the applicable retention period, all data is permanently and securely erased from our systems.
                        </p>
                    </section>

                    <Divider />

                    {/* ── Timeline summary ── */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            Deletion Timeline Summary
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {[
                                {
                                    icon: '⚡',
                                    label: 'Immediately',
                                    desc: 'Auth account, profile, profile photos, and all media files are permanently deleted. You are logged out of all devices.',
                                },
                                {
                                    icon: '🕐',
                                    label: 'Within 1 day',
                                    desc: 'Remaining message metadata (text content, timestamps) is fully purged from chat threads.',
                                },
                                {
                                    icon: '🛡️',
                                    label: 'Within 90 days',
                                    desc: 'Safety-retained data (reported content, abuse reports) is permanently deleted after trust & safety review.',
                                },
                            ].map(({ icon, label, desc }) => (
                                <div key={label} style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'flex-start',
                                    background: 'var(--surface)',
                                    borderRadius: '12px',
                                    padding: '1rem 1.25rem',
                                }}>
                                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{icon}</span>
                                    <div>
                                        <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{label}</p>
                                        <p style={{ margin: '0.25rem 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Divider />

                    {/* ── Contact / footer ── */}
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            Questions or Concerns?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            If you have any questions about the deletion process or your data rights, reach out to our team:
                        </p>
                        <p style={{ margin: 0, fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            <strong>Email: </strong>
                            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}>
                                {CONTACT_EMAIL}
                            </a>
                        </p>
                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginTop: '0.75rem', fontWeight: 400, fontStyle: 'normal', textTransform: 'none' }}>
                            You may also review our{' '}
                            <Link href="/privacy-policy" style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}>
                                Privacy Policy
                            </Link>{' '}
                            for full details on how we handle your data.
                        </p>
                    </section>

                </div>
            </div>
            <Footer />
        </main>
    );
}

/* ── Small shared components ── */

function StepHeader({ number, title }: { number: number; title: string }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1rem',
                color: 'var(--color-accent)',
                flexShrink: 0,
            }}>{number}</div>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', color: 'var(--text-primary)' }}>
                {title}
            </h2>
        </div>
    );
}

function Divider() {
    return <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '3rem' }} />;
}
