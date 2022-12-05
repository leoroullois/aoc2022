const path = require("path");
const fs = require("fs");

const input = fs
	.readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.toString()
	.trim()
	.split("\n");

const part1 = (input:string[]) => {
  let score =  0;
  for (const line of input) {
    const ranges = line.split(",").map(elt => elt.split("-").map(Number)).flatMap(num => num);
    if(ranges[0] <= ranges[2] && ranges[1] >= ranges[3]) {
      score++;
    } else if (ranges[0] >= ranges[2] && ranges[1] <= ranges[3]) {
      score++;
    }
  }
  console.log("Score part 1: ", score);
}

const part2 = (input:string[]) => {
  let score =  0;
  for (const line of input) {
    const ranges = line.split(",").map(elt => elt.split("-").map(Number));
    let first:number[] = [];
    let second:number[] = [];

    for(let i=ranges[0][0]; i<=ranges[0][1]; i++) {
      first.push(i);
    }
    for(let i=ranges[1][0]; i<=ranges[1][1]; i++) {
      second.push(i);
    }
      
    const intersection = first.filter(value => second.includes(value));
    if(intersection.length > 0) {
      score++;
    } 
  }
  console.log("Score part 2: ", score);
}

part1(input);
part2(input);
