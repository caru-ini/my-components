import fs from 'fs';

const snippetFilePath = './src/myComponents.json';

/**
 * Get code snippet from components.json
 * @param fileName - name of the file
 * @returns code snippet
 * @example
 * getSnippet('example'); // returns code snippet
 */
export const getSnippet = (fileName: string): string | null => {
  try {
    const fileContent = fs.readFileSync(snippetFilePath, 'utf8');
    const components = JSON.parse(fileContent);

    if (components && components[fileName]) {
      return components[fileName].code;
    }

    return null;
  } catch (error) {
    console.error('Error reading components.json:', error);
    return null;
  }
};
