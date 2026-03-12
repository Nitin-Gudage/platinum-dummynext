"use client";

import Image from "next/image";

/**
 * OptimizedImage - A wrapper around Next.js Image component with sensible defaults
 * Avoids forced reflow by using CSS-only blur-up effect
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
  // Using CSS-only blur-up - no JS state changes that trigger reflow
  const shouldFill = fill || props.sizes;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={shouldFill}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="object-cover transition-opacity duration-300"
        sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        {...props}
      />
    </div>
  );
}

/**
 * OptimizedBackgroundImage - For CSS background images using Next.js Image
 * Provides the benefits of Next.js Image optimization without forced reflow
 */
export function OptimizedBackgroundImage({ src, alt, className = "", priority = false, children }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="object-cover"
        sizes="100vw"
      />
      {children}
    </div>
  );
}
