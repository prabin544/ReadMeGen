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
      choices: ["BSD", "MIT", "GPL"]
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
        const readMe = generateMarkdown(answers);
        console.log(readMe)
        await fs.writeFileSync("README.md", readMe);
        console.log("success");
    } catch(err) {
      console.log(err);
    }
  }
  
init();