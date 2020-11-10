// function to generate markdown for README
const generateMarkdown = (data) => {

  let badge;
  let notice;

  switch (data.license) {
   
    case "GNU APGLv3":
      badge = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)';
      notice = `[${data.license}](https://www.gnu.org/licenses/agpl-3.0)`;
      console.log(`this is the ${badge} and ${notice}`);
      break;
   
      case "GNU GPLv3":
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      notice = `[${data.license}](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    
      case "GNU LGPLv3":
      badge = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)';
      notice = `[${data.license}](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;

    case 'Mozilla Public License 2.0':
      badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
      notice = `[${data.license}](https://opensource.org/licenses/MPL-2.0)`;
      break;

    case 'Apache License 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      notice = `[${data.license}](https://opensource.org/licenses/Apache-2.0)`;
      break;

    case 'MIT License':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      notice = `[${data.license}](https://choosealicense.com/licenses/mit/)`
      break;

    case 'Boost Software License 1.0':
      badge = '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)'
      notice = `[${data.license}](https://www.boost.org/LICENSE_1_0.txt)`
      break;

    case 'The Unlicense':
      badge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      notice = `[${data.license}](https://choosealicense.com/licenses/unlicense/)`
      break;
};
  /*
    if (data.license === 'GNU APGLv3') {
      badge='![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)'
      notice='(https://www.gnu.org/licenses/agpl-3.0)'
      console.log(`this is the ${badge}`);
  } else {
      console.log('try again');
  };
  */


  return `# ${data.title} ${badge}
  ${notice}

  ## Table of Contents
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [License](#license)
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Questions](#questions)

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
