import React, { Suspense, lazy } from "react";

// Lazy load the DotLottieReact component
const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((module) => ({
    default: module.DotLottieReact,
  }))
);

const LazyDotLottie = ({ src, className, fallback, ...props }) => {
  const defaultFallback = (
    <div
      className={`${className} flex items-center justify-center bg-gradient-to-br from-accent-cyan/10 to-accent-lemon/10 dark:from-accent-evil/10 dark:to-accent-cyan/10 rounded-2xl`}
    >
      <div className="w-16 h-16 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <DotLottieReact
        src={src}
        className={className}
        loop
        autoplay
        {...props}
      />
    </Suspense>
  );
};

export default LazyDotLottie;
