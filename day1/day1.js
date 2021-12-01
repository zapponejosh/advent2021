import * as fs from "fs";
import * as readline from "readline";

async function processFile() {
  const stream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({ input: stream });

  let i = 0;
  let j = 0;
  let count = 0;

  for await (const line of rl) {
    j = line;
    if (i > j) {
      // console.log(`${i} > ${j} -- no increase`);
    } else if (j > i) {
      // console.log(`${j} > ${i} -- increase!`);
      count++;
    } else {
      // console.log(`${i} == ${j} -- no increase`);
    }
    i = j;
    // console.log(`Received: ${line}`);
  }

  return count;
}

const count = await processFile();
console.log(count);
