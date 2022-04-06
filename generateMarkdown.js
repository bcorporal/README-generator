// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } 
   return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
   `
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } 
  return `- [License](#license)`;
}

function renderLicenseSection(license) {
if (license === "None") {
  return "No License"; 
}
  return `This project is licensed under a ${license} license.
    For more information ${renderLicenseLink(license)}
    `;
  }
  
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {return `  ## ${data.title}

  
  ## Description
  ${data.description}


  
  ##Table of Contents
  - [Installation](#installation)
  - [Features](#features)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)



  ## Installation
  ${data.installation}
  



  ## Features
  ${data.features}




  ## Credits
  ${data.credits}




  ## License
  ${renderLicenseBadge(data.license)}
  



  ## Questions
  Any additional questions please reach out at https://github.com/${data.github}
  [Click here to Email me](mailto:${data.email})`;
  
}

module.exports = generateMarkdown;
