const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Project",
      message: "What is title of your Project? "
    },
    {
      type: "input",
      name: "Description",
      message: "Please Give Description of your project: "
    },
    {
      type: "input",
      name: "Installation",
      message: "Please provide installation instruction: "
    },
    {
      type: "input",
      name: "Usage",
      message: "What is the Usage of this application? "
    },
    {
      type: "list",
      name: "License",
      message: "Please choose a License: ",
      choices: ["Apache 2.0", "MIT", "PERL"]
    },
    {
      type: "input",
      name: "Tests",
      message: "Test Case: "
    },
    {
        type: "input",
        name: "Username",
        message: "Please provide Github Username: "
    },
    {
        type: "input",
        name: "Contribution",
        message: "Who Contributed in this application? "
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your Email: "
  },
  ]);
}



async function init() {
    try {
        const answers = await promptUser();
        let badge;
        if(answers.License === "MIT"){
          answers.License = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }else if (answers.License === "Apache 2.0"){
          answers.License = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }else{
          answers.License = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]"
        }
        const readMe = generateMarkdown(answers);
        console.log(readMe)
        await fs.writeFileSync("../README.md", readMe);
        console.log("success");
    } catch(err) {
      console.log(err);
    }
  }
  
init();