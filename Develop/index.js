const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const { inherits } = require('util');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Title of your project',
      name: 'title',
    },
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
      type: 'input',
      message: 'List any/all contributors to this project',
      name: 'Contributors',
    }, 
    {
      type: 'list',
      message: 'Which License would you like?',
      name: 'License',
      choices: ['MIT', 'Apache', 'none']
    },{
      type: 'input',
      message: 'List any tests and how to use them',
      name: 'Tests',
    },{
      type: 'input',
      message: 'Please enter your Github username',
      name: 'Questions',
    },{
      type: 'input',
      message: 'Please enter your email address',
      name: 'Questions2',
    },
  ])
  .then((response) => {
    fs.writeFileSync('./dist/README.md',`
    ${generateMarkdown(response)}
`)
  }
  );
 


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
