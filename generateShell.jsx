import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import React from "react";
import { renderToString } from "react-dom/server";

export const generateShell = async () => {
  // Resolve the directory path to ShellPages
  const dirPath = path.resolve("ShellPages");

  // Read all files in the directory
  const files = await fs.readdir(dirPath);

  // Loop through each file that matches our component file types
  for (const file of files) {
    if (!file.endsWith(".jsx") && !file.endsWith(".js")) continue;

    // Create an absolute file path and convert it to a file URL for dynamic import
    const filePath = path.join(dirPath, file);
    const fileUrl = pathToFileURL(filePath).href;

    // Dynamically import the module
    const module = await import(fileUrl);
    const PageComponent = module.default;

    // Render the component to a string
    const html = renderToString(<PageComponent />);

    // Log the file name and rendered HTML
    console.log({ file, html });
  }
};
