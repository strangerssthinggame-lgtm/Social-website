"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
    const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
    const [visible, setVisible] = useState(false);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        // Don't show if already dismissed recently
        const dismissed = sessionStorage.getItem("ling-install-dismissed");
        if (dismissed) return;

        const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);

        const handler = (e: Event) => {
            e.preventDefault();
            setPromptEvent(e as BeforeInstallPromptEvent);
            // Small delay so it doesn't pop up instantly
            setTimeout(() => setVisible(true), 3000);
        };

        window.addEventListener("beforeinstallprompt", handler);

        // Fallback: If on Android, show the prompt after 5 seconds even if beforeinstallprompt doesn't fire
        let fallbackTimer: NodeJS.Timeout;
        if (isAndroid) {
            fallbackTimer = setTimeout(() => {
                setVisible(true);
            }, 5000);
        }

        // Listen for successful install
        window.addEventListener("appinstalled", () => {
            setInstalled(true);
            setVisible(false);
        });

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
            if (fallbackTimer) clearTimeout(fallbackTimer);
        };
    }, []);

    const handleInstall = () => {
        window.open('https://play.google.com/store/apps/details?id=com.ling.social', '_blank', 'noopener,noreferrer');
        sessionStorage.setItem("ling-install-dismissed", "true");
        setVisible(false);
    };

    const handleDismiss = () => {
        sessionStorage.setItem("ling-install-dismissed", "true");
        setVisible(false);
    };

    if (!visible || installed) return null;

    return (
        <>
            {/* Backdrop blur on mobile */}
            <div
                onClick={handleDismiss}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 9998,
                    background: "rgba(0,0,0,0.15)",
                    backdropFilter: "blur(2px)",
                    WebkitBackdropFilter: "blur(2px)",
                    animation: "fadeIn 0.25s ease",
                }}
            />

            {/* Banner */}
            <div
                role="dialog"
                aria-label="Install Ling App"
                style={{
                    position: "fixed",
                    bottom: "1.25rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 9999,
                    width: "min(420px, calc(100vw - 2rem))",
                    background: "#09090B",
                    borderRadius: "20px",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08)",
                    animation: "slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                }}
            >
                {/* App icon */}
                <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "#FACC15",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    flexShrink: 0,
                }}>
                    ⚡
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                        margin: 0,
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        lineHeight: 1.3,
                        fontStyle: "normal",
                        textTransform: "none",
                        letterSpacing: "normal",
                    }}>
                        Install Ling
                    </p>
                    <p style={{
                        margin: "0.2rem 0 0",
                        color: "#A1A1AA",
                        fontSize: "0.8rem",
                        lineHeight: 1.4,
                        fontWeight: 400,
                        fontStyle: "normal",
                        textTransform: "none",
                        letterSpacing: "normal",
                    }}>
                        Add to home screen for the full experience
                    </p>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                    <button
                        onClick={handleDismiss}
                        aria-label="Dismiss install prompt"
                        style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "none",
                            borderRadius: "10px",
                            color: "#A1A1AA",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            padding: "0.5rem 0.75rem",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Not now
                    </button>
                    <button
                        id="pwa-install-button"
                        onClick={handleInstall}
                        style={{
                            background: "#FACC15",
                            border: "none",
                            borderRadius: "10px",
                            color: "#09090B",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            padding: "0.5rem 0.9rem",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Install
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>
        </>
    );
}
