import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "stream";

export function renderPageToString(element) {
  return new Promise((resolve, reject) => {
    let html = "";
    const stream = new PassThrough();
    stream.on("data", (chunk) => {
      html += chunk.toString();
    });
    stream.on("end", () => resolve(html));
    stream.on("error", (error) => reject(error));

    const pipeableStream = renderToPipeableStream(element, {
      onShellReady() {
        // The shell is ready; start piping the content
        pipeableStream.pipe(stream);
      },
      onError(error) {
        reject(error);
      },
    });
  });
}
