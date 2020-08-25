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
      type: "input",
      name: "License",
      message: "License"
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
        fs.appendFileSync("README.md", ("# Project " + '\n' + answers.Project) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# Description " +'\n' + answers.Description) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# Contents " +'\n' + answers.Contents) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# Installation " +'\n' + answers.Installation) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# Usage " +'\n' + answers.Usage) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# License " +'\n' + answers.License) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# Description " +'\n' + answers.Description) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# Contribution " +'\n' + answers.Contribution) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# Tests " +'\n' + answers.Tests) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });
        fs.appendFileSync("README.md", ("# Questions " +'\n' + answers.Questions) + '\n', function(){
            if(err){
                throw err
            }else{
                console.log("Success")
            }
        });

    } catch(err) {
      console.log(err);
    }
  }
  
init();