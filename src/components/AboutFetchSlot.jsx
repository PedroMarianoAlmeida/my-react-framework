import React, { useState, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";

export function HydratedComponent({ serverUrl }) {
  const [content, setContent] = useState(null);
  useEffect(() => {
    fetch(serverUrl + "/component")
      .then((res) => res.text()) // Use .json() if your endpoint returns JSON
      .then((html) => {
        setContent(html);
      }) 
      .catch((error) => {
        console.error("Error fetching component:", error);
      });
  }, []);

  if (content === null) {
    return <div>Loading...</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

const container = document.getElementById("about-slot-2");
hydrateRoot(container, <HydratedComponent />);
