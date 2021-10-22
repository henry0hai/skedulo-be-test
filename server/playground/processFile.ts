import * as fs from 'fs';
import * as path from 'path';


export const readFileWithPath = (pathName?: string): Promise<string[]> => {

  let pathFile = pathName || path.join(__dirname, 'data/example.json');

  return JSON.parse(fs.readFileSync(pathFile, 'utf8'));
}


export const readFilesInFolder = (folderPath?: string): Promise<any[]> => {
  let pathDir = folderPath || path.join(__dirname, 'data');

  return new Promise((resolve, reject) => {
    fs.readdir(pathDir, (err, filenames) => {
      console.log("🚀 ~ filenames", filenames)
      if (err) {
        reject(err)
      }
      resolve(filenames.map((filename: string) => {
        return { data: readFileWithPath(path.join(pathDir, filename)), filename}
      }))
    })
  })

}

export const writeToFile = (filePath: string, content: string): void => {
  const optimalPath = filePath.replace('.json', '.optimal.json');
  fs.writeFile(optimalPath, content, 'utf8', (err) => {
    if (err) return console.log(err);
    console.log(`${filePath} > ${optimalPath} done.`);
  });
}

// readFilesInFolder();