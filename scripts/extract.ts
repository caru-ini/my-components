import fs from 'fs';
import path from 'path';

const componentsDir = './src/components/collection';
const outputFile = './src/myComponents.json';

interface Component {
  name: string;
  code: string;
}

let fileCount = 0;

const extractComponents = (): void => {
  const components: {
    [key: string]: Component;
  } = {};

  fs.readdirSync(componentsDir).forEach((file) => {
    const filePath = path.join(componentsDir, file);

    if (
      fs.lstatSync(filePath).isFile() &&
      (filePath.endsWith('.ts') || filePath.endsWith('.tsx'))
    ) {
      const code = fs.readFileSync(filePath, 'utf8');
      const componentName = path.basename(filePath, path.extname(filePath));
      components[componentName] = {
        name: componentName,
        code,
      };
      fileCount++;
    }
  });
  fs.writeFileSync(outputFile, JSON.stringify(components, null, 2));
};

extractComponents();
console.log(`\u001b[32m${fileCount} \u001b[0m${fileCount === 1 ? 'file' : 'files'} found`);
console.log('Components extracted to', outputFile);
