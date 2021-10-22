const moment = require('moment');

import { Optimizer } from '../services/optimizer.service';
import { Performance } from '../models/performance.model';

import { readFilesInFolder, readFileWithPath, writeToFile } from './processFile'


const args = require('yargs').argv;

const readFileFromFolder = () => {
  const inputPath = args.dirName;
  readFilesInFolder(inputPath).then((fileData) => {
    fileData.forEach((file) => {
      const performances: Array<Performance> = [];
      console.log("---- Process file: ", file.filename)
      file.data.map((data: any) => {
        const performance = new Performance();
        performance.band = data.band;
        performance.start = moment(data.start);
        performance.finish = moment(data.finish);
        performance.priority = data.priority;
        performances.push(performance);
      })
      const result = Optimizer.provideSchedule(performances);
      console.log("🚀 ~ optimizer: ", result)
    })
  })
}

const readFile = async () => {
  const inputFilePath = args.filePath;
  const performances: Array<Performance> = [];
  const data = await readFileWithPath(inputFilePath);
  data.map((data: any) => {
    const performance = new Performance();
    performance.band = data.band;
    performance.start = moment(data.start);
    performance.finish = moment(data.finish);
    performance.priority = data.priority;
    performances.push(performance);
  })
  const result = Optimizer.provideSchedule(performances);
  // console.log("🚀 ~ optimizer: ", result)
  writeToFile(inputFilePath, JSON.stringify(result));
}

readFile()