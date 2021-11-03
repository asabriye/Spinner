// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1200);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1400);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1600);

// setTimeout(() => {
//   process.stdout.write('\r|   \n');
// }, 1800);


const symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
let x = 0;
let time = 150;
for (const char of symbols) {
  setTimeout(() => {
    symbols[x] = char
    x++;
    if (x !== symbols.length) {
      process.stdout.write(char);
    } else {
      process.stdout.write(char + '\n');
    }
  }, time += 300)

}