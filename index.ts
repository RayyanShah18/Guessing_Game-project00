#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const goStop = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
async function welcomeStart() {
  let startLine = chalkAnimation.neon(`
  
  ╔╗╔┬ ┬┌┬┐┌┐ ┌─┐┬─┐  ╔═╗┬ ┬┌─┐┌─┐┌─┐┬┌┐┌┌─┐    ╔═╗┌─┐┌┬┐┌─┐
  ║║║│ ││││├┴┐├┤ ├┬┘  ║ ╦│ │├┤ └─┐└─┐│││││ ┬    ║ ╦├─┤│││├┤ 
  ╝╚╝└─┘┴ ┴└─┘└─┘┴└─  ╚═╝└─┘└─┘└─┘└─┘┴┘└┘└─┘    ╚═╝┴ ┴┴ ┴└─┘
  
  
  `
  );
  await goStop();
  startLine.stop();
  console.log(chalk.bgRed("Welcome!Let's Play Game By Rayyan"));
}
await welcomeStart();

let computerGuess = Math.floor(Math.random() * 10); //guess between 0 to 9
// console.log(computerGuess);

console.log(
  chalk.bgYellow.bold(("\nGame Rule: You Got 4 chances to guess the right number.\n"))
);

async function guessedNumber() {
  for (let i = 1; i < 5; i++) {
    console.log(`Round ${i}`);
    
    const guessNum = await inquirer.prompt({
      type: "number",
      name: "Guess",
      message: chalk.red("What's your guess: "),
    });
    if (guessNum.Guess === computerGuess) {
      console.log(
        chalk.cyan(`\n
          
        __   __  _______  __   __    _______  __   __  _______  _______  _______    ______    ___   _______  __   __  _______ 
        |  | |  ||       ||  | |  |  |       ||  | |  ||       ||       ||       |  |    _ |  |   | |       ||  | |  ||       |
        |  |_|  ||   _   ||  | |  |  |    ___||  | |  ||    ___||  _____||  _____|  |   | ||  |   | |    ___||  |_|  ||_     _|
        |       ||  | |  ||  |_|  |  |   | __ |  |_|  ||   |___ | |_____ | |_____   |   |_||_ |   | |   | __ |       |  |   |  
        |_     _||  |_|  ||       |  |   ||  ||       ||    ___||_____  ||_____  |  |    __  ||   | |   ||  ||       |  |   |  
          |   |  |       ||       |  |   |_| ||       ||   |___  _____| | _____| |  |   |  | ||   | |   |_| ||   _   |  |   |  
          |___|  |_______||_______|  |_______||_______||_______||_______||_______|  |___|  |_||___| |_______||__| |__|  |___|                                                                                
                
                `)
      );
      break
    } else {
      console.log(chalk.bgBlueBright(`Sorry Wrong Guess!!! You have ${4-i} chance(s) left. Good Luck!`));
    }
  }
}
// guessedNumber();

async function playAgain() {
  do {
    await guessedNumber();
    var guessAgain = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: chalk.bgGreen("Do you want to continue? Press y or n: "),
    });
  } while (
    guessAgain.restart == "y" ||
    guessAgain.restart == "Y" ||
    guessAgain.restart == "yes" ||
    guessAgain.restart == "YES"
  );
}
playAgain();