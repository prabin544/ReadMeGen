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

This application is covered under: ${answers.License}

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
To view my Github profile please naviagte to following link:
- [Github Profile](https://github.com/${answers.Username})

For more question please email me at: ${answers.email}

  `;
}

module.exports = generateMarkdown;
