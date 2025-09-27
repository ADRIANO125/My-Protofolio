import React, { Suspense } from "react";
import { DNA } from "react-loader-spinner";

const LazyLoader = ({ children, fallback, minHeight = "200px" }) => {
  const defaultFallback = (
    <div
      className="flex items-center justify-center glass-card p-8 rounded-2xl"
      style={{ minHeight }}
    >
      <DNA
        visible={true}
        height="60"
        width="60"
        ariaLabel="loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>;
};

export default LazyLoader;
