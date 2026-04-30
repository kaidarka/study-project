import React, { memo, useLayoutEffect, useState } from 'react';

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: React.ReactNode;
    errorFallback?: React.ReactNode;
}

export const AppImage = memo((props: AppImageProps) => {
    const { className, src, alt = 'image', fallback, errorFallback, ...restProps } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src || '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (error && errorFallback) {
        return errorFallback;
    }

    return <img className={className} src={src} alt={alt} {...restProps} />;
});
