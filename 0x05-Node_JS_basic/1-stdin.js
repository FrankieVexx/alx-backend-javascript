const readline = require('readline');

const rdl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rdl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rdl.close();
});
