import React from "react";

export const LazyWelcome = ({ path }) => {
  console.log({ path });
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
