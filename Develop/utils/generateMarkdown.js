function renderLicenseBadge(license) {
  if (license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } 
  else if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else {
    return " "
  }
};

function generateMarkdown(data) {
  return ` ${data.title}


${renderLicenseBadge(data.License)}

## Description

${data.Description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [License](#License)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${data.Installation}

## Usage

${data.Usage}

## Contributors

${data.Contributors}

## License

${renderLicenseBadge(data.License)}

## Tests

${data.Tests}

## Questions

Contact me with any questions

${data.Questions},
${data.Questions2}

`;
}

module.exports = generateMarkdown;
