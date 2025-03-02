import React from "react";

export const LoadServerSlot = ({ path }) => {
  const LazyComponent = React.lazy(() =>
    fetch(window.SERVER_DOMAIN + path)
      .then((res) => res.text())
      .then((html) => ({
        default: () => <div dangerouslySetInnerHTML={{ __html: html }} />,
      }))
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
};
