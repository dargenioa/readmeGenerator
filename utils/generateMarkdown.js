// function to generate markdown for README
const generateMarkdown = (data) => {
  
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

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

  Github: <a href="https://github.com/${data.github}.com">${data.github}</a>
  Email: <a href="${data.email}">${data.email}</a>

  For additional questions please feel free to reach out to me by email and checkout my Github page.




`;
}

module.exports = generateMarkdown;
