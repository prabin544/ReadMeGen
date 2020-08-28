function generateMarkdown(answers) {
  return `
# ${answers.Project}
# Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)

## Description:
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ${answers.Description}
## Installation
  ${answers.Installation}
## Usage
  ${answers.Usage}
## Contribution
  ${answers.Contribution}
## Tests
  ${answers.Tests}
## Questions
  For more question visit Github page:
- [Github Portfolio](https://github.com/${answers.Username})

  `;
}

module.exports = generateMarkdown;
