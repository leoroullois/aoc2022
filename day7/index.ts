import path from 'path';
import fs from 'fs';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

const part1 = (input: string[]) => {};

const part2 = (input: string[]) => {};

part1(input);
part2(input);
