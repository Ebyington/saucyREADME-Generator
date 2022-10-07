// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(License) {
  // switch () {
  //   case 1: 
  //   choice = "(https://opensource.org/licenses/MIT)"
  //   break;
  // } `https://img.shields.io/badge/license-${License}-blue.svg`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(License) {
  if (License === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } 
  else if (License === "MIT") {
    return ("https://opensource.org/licenses/MIT")
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${data.title}


${renderLicenseBadge(data.license)}

## Description

${data.Description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [License](#License)
- [Tests](#Tests)
- [Questions] (#Questions)

## Installation

${data.Installation}

## Usage

${data.Usage}

## Contributors

${data.Contributors}

## License

${renderLicenseSection(data.License)}

## Tests

${data.Tests}

## Questions

Contact me with any questions

${data.Questions},
${data.Questions2}

`;
}

module.exports = generateMarkdown;
