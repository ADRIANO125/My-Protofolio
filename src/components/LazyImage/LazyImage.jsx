import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik04NyA3NHYxNGgxNFY3NEg4N3ptMTQgMTRIODdjMCAwIDEgMSA3IDdsMTQtMTQiIGZpbGw9IiNiYmY3ZDciLz4KPC9zdmc+",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Placeholder */}
      {!loaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm transition-opacity duration-300"
          style={{ opacity: loaded ? 0 : 1 }}
        />
      )}

      {/* Actual Image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-500"
          onLoad={handleLoad}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      )}

      {/* Loading skeleton */}
      {!loaded && inView && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
      )}
    </div>
  );
};

export default LazyImage;
