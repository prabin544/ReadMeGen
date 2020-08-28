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

This application is covered under: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description:
  ${answers.Description}
## Installation
  ${answers.Installation}
## Usage
  ${answers.Usage}
## License
  ${answers.License}
## Contribution
  ${answers.Contribution}
## Tests
  ${answers.Tests}
## Questions
- [Github Profile](https://github.com/${answers.Username})

For more question please email me at:
- [Email](${answers.email})

  `;
}

module.exports = generateMarkdown;
