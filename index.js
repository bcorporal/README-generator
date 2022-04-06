const inquirer = require('inquirer');
const fs = require('fs');



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Readme Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'checkbox',
        name: 'language',
        message: 'What language did you include in your app?',
        choices: ['HTML', 'Javascript', 'Python', 'C', 'Java'],
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'checkbox',
        message: 'Chose a license for your product.',
        name: 'license',
        choices: ['Creative Commons', 'MIT', 'GNU', 'MySQL'],
    },
    {
        type: 'input',
        message: 'Enter a link to your github profile.',
        name: 'github',
    },
];
 
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
                return console.log(err);
            } else {
            console.log("Success! Your README.md file has been created.")
        }
    });
}
    const writeFileAsync = util.promisify(writeToFile);