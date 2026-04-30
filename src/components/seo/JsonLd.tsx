import React from 'react';

const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Infriend",
        "url": "https://infriend.app",
        "logo": "https://infriend.app/logo.png",
        "sameAs": [
            "https://www.instagram.com/joeaja.y/",
            "https://x.com/joeajay2001"
        ],
        "description": "The first game-first social connection app for college students.",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@infriend.app",
            "contactType": "customer support"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default JsonLd;
