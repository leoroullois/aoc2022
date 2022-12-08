import path from 'path';
import fs from 'fs';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

const part1 = (input: string[]) => {
  const forest = input.map((line) => line.split('').map(Number));
  const height = forest.length;
  const width = forest[0].length;
  let visibleTrees = new Set();

  for (let i = 0; i < height; i++) {
    let maxHeightLeft = -1;
    let maxHeightRight = -1;

    let maxHeightTop = -1;
    let maxHeightBottom = -1;

    for (let j = 0; j < width; j++) {
      // de gauche à droite
      if (maxHeightLeft < forest[i][j]) {
        maxHeightLeft = forest[i][j];
        visibleTrees.add([i, j].toString());
      }
      // de droite à gauche
      if (maxHeightRight < forest[i][width - j - 1]) {
        maxHeightRight = forest[i][width - j - 1];
        visibleTrees.add([i, width - j - 1].toString());
      }

      // de haut en bas
      if (maxHeightTop < forest[j][i]) {
        maxHeightTop = forest[j][i];
        visibleTrees.add([j, i].toString());
      }
      // de bas en haut
      if (maxHeightBottom < forest[height - j - 1][i]) {
        maxHeightBottom = forest[height - j - 1][i];
        visibleTrees.add([height - j - 1, i].toString());
      }
    }
  }

  console.log('answer part1 :', visibleTrees.size);
};

const part2 = (input: string[]) => {
  const forest = input.map((line) => line.split('').map(Number));
  const n = forest.length;
  const scores: number[] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const tree = forest[i][j];

      let bottom = 0;
      for (let distance = 1; i + distance < n; distance++) {
        bottom++;
        if (forest[i + distance][j] >= tree) {
          break;
        }
      }

      let top = 0;
      for (let distance = 1; i - distance >= 0; distance++) {
        top++;
        if (forest[i - distance][j] >= tree) {
          break;
        }
      }

      let right = 0;
      for (let distance = 1; j + distance < n; distance++) {
        right++;
        if (forest[i][j + distance] >= tree) {
          break;
        }
      }

      let left = 0;
      for (let distance = 1; j - distance >= 0; distance++) {
        left++;
        if (forest[i][j - distance] >= tree) {
          break;
        }
      }
      scores.push(left * right * top * bottom);
    }
  }
  console.log('answer part2 :', Math.max(...scores));
};

part1(input);
part2(input);
