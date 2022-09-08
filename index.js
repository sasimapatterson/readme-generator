// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        message: 'What is the name for your project?',
        name: 'title',
    },
    {
        message: 'What is your project about?',
        name: 'description',
    },
    {
        message: 'How to install your application?',
        name: 'installation',
    },
    {
        message: 'How to use your application?',
        name: 'usage',
    },
    {
        message: 'Any contribution to your project?',
        name: 'contribution',
    },
    {
        message: 'How do you test your application?',
        name: 'test',
    },
    {
        message: 'GitHub username',
        name: 'github',
    },
    {
        message: 'Your e-mail address?',
        name: 'email',
    },
    {   
        type: 'list',
        message: 'Choose your license',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
 ]).then((data) => console.log(data));

// TODO: Create a function to write README file
function writeToFile(fileName, userInput) {
    fs.writeFile(fileName, userInput),(err) => err ? console.error(err) : console.log('Your README is ready!');
}
    
// TODO: Create a function to initialize app
function init() {
    // writeToFile('README.md', generateMarkdown(data));    
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );