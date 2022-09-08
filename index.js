// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, userInput) {
    fs.writeFile(fileName, userInput, (err) => {
        err ? console.error(err) : console.log('Your README is ready!');
    });
}

// TODO: Create an array of questions for user input
const init = () => {
    inquirer.prompt([
        {   
            type: 'input',
            message: 'What is the name for your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your project about?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How to install your application?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How to use your application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Any contribution to your project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How do you test your application?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'GitHub username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Your e-mail address?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'Choose your license',
            name: 'license',
            choices: 
            [
                'MIT', 
                'GPL', 
                'BSD', 
                'None'
            ],
        },
    ]).then((data) => {
        console.log(data);
        writeToFile('output/README.md', generateMarkdown(data));
    });
};

init();
