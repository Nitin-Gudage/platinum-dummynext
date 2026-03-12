"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * OptimizedImage - A wrapper around Next.js Image component with sensible defaults
 * 
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props passed to Next.js Image
 */
export default function OptimizedImage({
    src,
    alt,
    className = "",
    fill = false,
    priority = false,
    ...props
}) {
    const [isLoading, setIsLoading] = useState(true);

    // Handle both external URLs and local paths
    const isExternal = src?.startsWith('http') || src?.startsWith('//');

    // Determine if we should use fill mode or standard sizing
    const shouldFill = fill || props.sizes;

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill={shouldFill}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                onLoad={() => setIsLoading(false)}
                className={`object-cover transition-all duration-500 ${isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
                    }`}
                sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                {...props}
            />
        </div>
    );
}

/**
 * OptimizedBackgroundImage - For CSS background images using Next.js Image
 * This provides the benefits of Next.js Image optimization for background images
 */
export function OptimizedBackgroundImage({ src, alt, className = "", priority = false, children }) {
    const [isLoading, setIsLoading] = useState(true);
    const isExternal = src?.startsWith('http') || src?.startsWith('//');

    return (
        <div className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                onLoad={() => setIsLoading(false)}
                className={`object-cover transition-all duration-700 ${isLoading ? "scale-105 blur-md" : "scale-100 blur-0"
                    }`}
                sizes="100vw"
            />
            {children}
        </div>
    );
}
