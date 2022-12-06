import path from 'path';
import fs from 'fs';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

const firstStart = (line: string, nb: number) => {
  let nbChars = 0;
  for (let i = 0; i < line.length - 1 - nb; i++) {
    if (new Set(line.split('').slice(i, i + nb)).size === nb) {
      nbChars = i + nb;
      break;
    }
  }
  return nbChars;
};

const part1 = (input: string[]) => {
  console.log('Answer part 1: ', firstStart(input[0], 4));
};

const part2 = (input: string[]) => {
  console.log('Answer part 1: ', firstStart(input[0], 14));
};

part1(input);
part2(input);
