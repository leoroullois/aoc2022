import path from "path";
import fs from "fs";

const input = fs
	.readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.toString()
	.trim()
	.split("\n");

const part1 = (input:string[]) => {
  const data = [ "FGVRJLD", "SJHVBMPT",  "CPGDFMHV",  "QGNPDM", "FNHLJ", "ZTGDQVFN",  "LBDF",  "NDVSBJM", "DLG" ].map(elt => elt.split("").reverse())
  for(const line of input) {
    const splittedLine = line.split(" ");
    const nbCases = Number(splittedLine[1]);
    const from = Number(splittedLine[3])-1;
    const to = Number(splittedLine[5])-1;
    for(let i = 0; i < nbCases; i++) {
      const elt = data[from].pop();
      data[to].push(elt ?? "");
    }
  }

  const answer = data.map(elt => elt[elt.length-1]).join("");
  console.log("Answer part 1: ", answer);
}

const part2 = (input:string[]) => {
  const data = [ "FGVRJLD", "SJHVBMPT",  "CPGDFMHV",  "QGNPDM", "FNHLJ", "ZTGDQVFN",  "LBDF",  "NDVSBJM", "DLG" ].map(elt => elt.split("").reverse())
  for(const line of input) {
    const splittedLine = line.split(" ");
    const nbCases = Number(splittedLine[1]);
    const from = Number(splittedLine[3])-1;
    const to = Number(splittedLine[5])-1;

    const elt = data[from].splice(data[from].length-nbCases, nbCases);
    data[to].push(...elt);
  }

  const answer = data.map(elt => elt[elt.length-1]).join("");
  console.log("Answer part 2: ", answer);
}

part1(input);
part2(input);
