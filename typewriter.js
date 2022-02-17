// It takes a sentence and display it as an animation.

const sentence = "hello there from lighthouse labs";

//If you use console.log, in the output each character is on a new line like below
// h
// e
// l ...

//console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.
// for (const char of sentence) {
//   console.log(char);
// };

//Replace the console.log with process.stdout.write and confirm our results.
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
  }, 50 + i * 50);
  
};

//you need to add a newline character at the end of the sentence
let totalCount = 50 + sentence.length * 50
setTimeout(() => {
  process.stdout.write("\n")
}, totalCount);

// output is hello there from lighthouse labs
