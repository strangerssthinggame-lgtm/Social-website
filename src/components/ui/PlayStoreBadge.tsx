import React from 'react';
import Image from 'next/image';

export const PlayStoreBadge: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <a 
            href="https://play.google.com/store/apps/details?id=com.ling.social&pcampaignid=web_share" 
            target="_blank" 
            rel="noopener noreferrer"
            className={className}
            style={{ display: 'inline-block' }}
        >
            <Image 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                width={200} 
                height={77}
                style={{ height: '60px', width: 'auto' }}
            />
        </a>
    );
};
