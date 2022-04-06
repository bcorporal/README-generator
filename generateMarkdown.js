// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } 
    return `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (license === "Creative Commons") {
    return "https://creativecommons.org/licenses/by/4.0/";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GNU") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  }
}

function renderLicenseSection(license) {
if (license === "None") {
  return ""; 
}
    return `
    ## License
    ${renderLicenseBadge(license)}
    This project is licensed under a ${license} license.
    For more information ${renderLicenseLink(license)}
    `;
  }
  
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {return `  ## ${data.title}

  
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
  ${renderLicenseBadge(data.license)}
  

  ## Questions
  Any additional questions please reach out at https://github.com/bcorporal
  [Email me](mailto:${data.email})`;
  
}

module.exports = generateMarkdown;
