import fs from 'fs';
import path from 'path';

const sampleHTML = fs.readFileSync(path.join(__dirname, './sample.html'), {
  encoding: 'utf-8',
});

export const sample = (data: { url: string; year: number }) => {
  return sampleHTML.replace('{{link}}', `${data.url}`).replace('{{year}}', data.year.toString());
};
