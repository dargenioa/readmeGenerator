// function to generate markdown for README
const generateMarkdown = (data) => {
  
  return `# ${data.title}

  ## Table of Contents
  1 [Description](#description)
  1 [Installation](#installation)
  1 [Usage](#usage)
  1 [License](#license)
  1 [Contributing](#contributing)
  1 [Tests](#tests)
  1 [Questions](#questions)

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

  **Github:** <a href="https://github.com/${data.github}.com">${data.github}</a><br>
  [${data.github}](http://github.com/${data.github})

  **Email:** <a href="${data.email}">${data.email}</a>

  For additional questions please feel free to reach out to me by email and checkout my Github page.




`;
}

module.exports = generateMarkdown;
