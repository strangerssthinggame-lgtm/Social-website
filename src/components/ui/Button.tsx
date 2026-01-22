import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'white';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    href?: string;
    as?: React.ElementType;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    href,
    as,
    loading = false,
    disabled,
    ...props
}) => {
    const Component = as || (href ? 'a' : 'button');
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        loading ? styles.loading : '',
        className,
    ].join(' ');

    const additionalProps = href ? { href } : {};

    return (
        <Component
            className={classes}
            {...additionalProps}
            {...props}
            disabled={disabled || loading}
        >
            {children}
            {variant !== 'ghost' && (
                <div className={styles.iconWrapper}>
                    {loading ? (
                        <svg className={styles.spinner} viewBox="0 0 24 24" fill="none" style={{ width: '14px', height: '14px' }}>
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    )}
                </div>
            )}
        </Component>
    );
};
