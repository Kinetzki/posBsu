import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.1.392/pdf.worker.mjs";

// Function to extract text from a PDF
async function extractTextFromPDF(pdfUrl) {
  const data = [];

  try {
    // Load PDF document
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;

    // Extract text from each page
    const numPages = pdf.numPages;
    let text = [];
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const pageText = await page.getTextContent();
      for (let i = 0; i < pageText.items.length; i++) {
        const extractText = pageText.items[i].str;
        if (extractText && extractText !== " ") {
          if (extractText === "** NOTHING FOLLOWS **") {
            break;
          }
          data.push(extractText);
        }
      }
      // pageText.items.forEach((item) => {
      //   if (item.str && (item.str !== " ")) {
      //     if(item.str === "** NOTHING FOLLOWS **") {
      //       return;
      //     }
      //     text.push(item.str);
      //   }
      //   // text += item.str + "\n";
      // });
    }
    return data;
  } catch (error) {
    console.error("Error extracting text:", error);
    throw error;
  }
}

export default extractTextFromPDF;
