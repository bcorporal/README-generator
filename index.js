const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for this Readme file.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining your project.',
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
        name: 'languages',
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
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
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



// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
    console.log("Generating---");
    writeToFile("./utils/README.md", generateMarkdown({ ...inquirerAnswers }));
    })
}


// Function call to initialize app
init();