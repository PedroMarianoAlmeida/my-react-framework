import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import React from "react";
import { renderToString } from "react-dom/server";

export const generateShell = async () => {
  // Resolve the directory path to ShellPages
  const pagesDir = path.resolve("ShellPages");
  const devDir = path.resolve("dev");

  // Ensure the dev directory exists (create it if necessary)
  await fs.mkdir(devDir, { recursive: true });

  // Read all files in the ShellPages directory
  const files = await fs.readdir(pagesDir);

  for (const file of files) {
    // Only process JavaScript or JSX files
    if (!file.endsWith(".jsx") && !file.endsWith(".js")) continue; // Should I add TypeScript here?

    // Construct the absolute file path and convert it to a file URL for dynamic import
    const filePath = path.join(pagesDir, file);
    const fileUrl = pathToFileURL(filePath).href;

    // Dynamically import the module and extract the default component
    const module = await import(fileUrl);
    const PageComponent = module.default;

    // Render the component to a string
    const componentHtml = renderToString(<PageComponent />);

    // Define the output file name (change extension to .html)
    const outputFileName = `${path.basename(file, path.extname(file))}.html`;
    const outputFilePath = path.join(devDir, outputFileName);

    // Write the file to the dev directory
    await fs.writeFile(outputFilePath, componentHtml, "utf8");

    console.log(`Generated ${outputFilePath}`);
  }
};
