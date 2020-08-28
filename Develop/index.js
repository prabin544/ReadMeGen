const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Project",
      message: "What is title of your Project?"
    },
    {
      type: "input",
      name: "Description",
      message: "Description"
    },
    {
      type: "input",
      name: "Contents",
      message: "Table of Contents"
    },
    {
      type: "input",
      name: "Installation",
      message: "Installation"
    },
    {
      type: "input",
      name: "Usage",
      message: "Usage"
    },
    {
      type: "list",
      name: "License",
      message: "License",
      choices: ["BSD", "MIT", "GPL"]
    },
    {
        type: "input",
        name: "Contribution",
        message: "Contributing"
    },
    {
        type: "input",
        name: "Tests",
        message: "Tests"
    },
    {
        type: "input",
        name: "Questions",
        message: "Questions"
    }
  ]);
}
async function init() {
    try {
        const answers = await promptUser();
        console.log(answers);
        console.log(answers.Project);
        let badge;
        await getBadge(answers.License);
        function getBadge(){
          badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        };
        fs.appendFileSync("README.md", (`${badge}\n`))
        fs.appendFileSync("README.md", (`# ${answers.Project}\n`))
        fs.appendFileSync("README.md", ("# Description " +'\n' + answers.Description) + '\n')
        fs.appendFileSync("README.md", ("# Contents " +'\n' + answers.Contents) + '\n')
        fs.appendFileSync("README.md", ("# Installation " +'\n' + answers.Installation) + '\n')
        fs.appendFileSync("README.md", ("# Usage " +'\n' + answers.Usage) + '\n')
        fs.appendFileSync("README.md", ("# License " +'\n' + answers.License) + '\n')
        fs.appendFileSync("README.md", ("# Description " +'\n' + answers.Description) + '\n')
        fs.appendFileSync("README.md", ("# Contribution " +'\n' + answers.Contribution) + '\n')
        fs.appendFileSync("README.md", ("# Tests " +'\n' + answers.Tests) + '\n')
        fs.appendFileSync("README.md", ("# Questions " +'\n' + answers.Questions) + '\n')

    } catch(err) {
      console.log(err);
    }
  }
  
init();