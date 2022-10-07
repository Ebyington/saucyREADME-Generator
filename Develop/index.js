// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Provide a description of your project',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use',
      name: 'Usage',
    }, 
    {
      type: 'list',
      message: 'Which License would you like?',
      name: 'license',
      choices: ['MIT', 'Apache', 'none']
    },{
      type: 'input',
      message: 'List any tests and how to use them',
      name: 'Tests'
    },
  ])
  .then((response) => {
    fs.writeFileSync('./dist/README.md',`
    ${generateMarkdown(response)}
`)
  }
  );


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
