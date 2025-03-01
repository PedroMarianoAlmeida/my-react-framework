import React from "react";


export const LazyWelcome = React.lazy(() =>
    fetch(window.SERVER_DOMAIN + "/components/Welcome")
      .then((res) => res.text())
      .then((html) => ({
        default: () => <div dangerouslySetInnerHTML={{ __html: html }} />,
      }))
  );
