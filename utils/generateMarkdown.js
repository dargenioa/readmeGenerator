// function to generate markdown for README
const generateMarkdown = (answers) => {
  
  return `# ${answers.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)



`;
}

module.exports = generateMarkdown;
