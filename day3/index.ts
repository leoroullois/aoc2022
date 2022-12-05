const path = require("path");
const fs = require("fs");

const input = fs
	.readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.toString()
	.trim()
	.split("\n");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const part1 = (input:string[]) => {
  let score = 0;
  const dataset = input.forEach((line: string) => {
    const splittedLine = line.split("");
    const middle = Math.floor(line.length / 2);
    const first = splittedLine.slice(0, middle);
    const second = splittedLine.slice(middle);
    for (const letter of first) {
      if(second.includes(letter)) {
        score+=alphabet.split("").indexOf(letter)+1;
        break;
      }
    } 
  });
  console.log("Score part 1 : ", score);
}

const part2 = (input:string[]) => {
  let score=0;
  for(let i=0; i<input.length; i=i+3) {
    const first = input[i].split("");
    const second = input[i+1].split("");
    const third = input[i+2].split("");
    for(const letter of first) {
      if(second.includes(letter) && third.includes(letter)) {
        score+=alphabet.split("").indexOf(letter)+1;
        break;
      }
    }
  }
  console.log("Score part 2 : ", score);
}

part1(input);
part2(input);
