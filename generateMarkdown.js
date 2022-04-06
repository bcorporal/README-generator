// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  
  ## Description
  ${data.description}


  ##Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)


  ## Installation
  ${data.installation}
  

  ## Usage
  ${data.usage}


  ## Features
  ${data.features}


  ## Credits
  ${data.credits}


  ## License
  ${data.license}
  

  ## Questions
  Any additional questions please reach out at https://github.com/bcorporal
  ${data.email}`;
}

module.exports = generateMarkdown;
