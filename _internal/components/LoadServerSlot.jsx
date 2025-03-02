import React from "react";

export const LoadServerSlot = ({ path, serverDomain }) => {
  const LazyComponent = React.lazy(() =>
    fetch(serverDomain + path)
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
