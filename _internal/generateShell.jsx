import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import React from "react";
import { renderPageToString } from "./helpers/renderPageToString";

const generateShell = async () => {
  // Directory paths for your shell pages and frontend output
  const pagesDir = path.resolve("src/controlled-structure/shell-pages");
  const frontend = path.resolve("build/frontend");

  // Ensure the frontend directory exists
  await fs.mkdir(frontend, { recursive: true });

  // Read all files in the ShellPages directory
  const files = await fs.readdir(pagesDir);

  for (const file of files) {
    // Process only JavaScript or JSX files (you can extend this to TypeScript if needed)
    if (!file.endsWith(".jsx") && !file.endsWith(".js")) continue;

    // Get the absolute file path and convert it to a file URL for dynamic import
    const filePath = path.join(pagesDir, file);
    const fileUrl = pathToFileURL(filePath).href;

    // Dynamically import the module and extract the default component
    const module = await import(fileUrl);
    const PageComponent = module.default;

    // Render the component to a string using streaming SSR
    const componentHtml = await renderPageToString(<PageComponent />);

    // Define the output file name (change extension to .html)
    const outputFileName = `${path.basename(file, path.extname(file))}.html`;
    const outputFilePath = path.join(frontend, outputFileName);

    // Write the HTML output to the frontend directory
    await fs.writeFile(outputFilePath, componentHtml, "utf8");
    console.log(`Generated ${outputFilePath}`);
  }
};

generateShell();
