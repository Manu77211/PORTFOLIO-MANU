'use client';

import { useState } from 'react';

interface ImageSkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function ImageSkeleton({ width = 'w-full', height = 'h-48', className = '' }: ImageSkeletonProps) {
  return (
    <div className={`${width} ${height} ${className} bg-linear-to-r from-slate-700 via-cyan-800/50 to-slate-700 animate-pulse rounded-lg relative overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/20`}>
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent animate-shimmer"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-400/40 border-t-cyan-400 rounded-full animate-spin shadow-lg shadow-cyan-400/50"></div>
      </div>
    </div>
  );
}

export function ImageWithSkeleton({
  src,
  alt,
  className = '',
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && !hasError && (
        <ImageSkeleton className="absolute inset-0" />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-slate-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-slate-600 text-sm">Image not available</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          {...props}
        />
      )}
    </div>
  );
}
