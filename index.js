// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name for your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Instructions of how to install your application?',
        name: 'installation instructions',
    },
    {
        type: 'input',
        message: 'Instructions of how to use you application?',
        name: 'usage information',
    },
    {
        type: 'input',
        message: 'What is the name for your project?',
        name: 'contribution guideline',
    },
    {
        type: 'input',
        message: 'What is the name for your project?',
        name: 'title',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
