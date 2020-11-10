const inquirer = require("inquirer");

// function to generate markdown for README
const generateMarkdown = (data) => {
let badge;
let notice;

  if (data.license === 'GNU APGLv3') {
    badge='https://img.shields.io/badge/License-AGPL%20v3-blue.svg)'
    notice='(https://www.gnu.org/licenses/agpl-3.0)'
    console.log(`this is the ${badge}`);
} else {
    console.log('try again');
};
  
  return `# ${data.title}
  ${badge}

  ## Table of Contents
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [License](#license)
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Questions](#questions)
      1.Github
      1.Email

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  **Github:** [${data.github}](http://github.com/${data.github})

  **Email:** [${data.email}](${data.email})

  For additional questions please feel free to reach out to me by email and checkout my Github page.



`;
}

module.exports = generateMarkdown;
