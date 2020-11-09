//add comments throughout code
//check licenses
//test and check markdown
//Try added a switch statement for the License

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const getUserInput = async () => {
    try {
        const data = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of your project?"
            },
            {
                type: "input",
                name: "description",
                message: "What is a description of your application?"

            },
            {
                type: "input",
                name: "installation",
                message: "What are the installations instructions?"
            },
            {
                type: "input",
                name: "usage",
                message: "What is the usage information?"
            },
            {
                type: "input",
                name: "contributing",
                message: "What are the contribution guidelines?"
            },
            {
                type: "input",
                name: "tests",
                message: "What are the test instructions?"
            },
            {
                type: "list",
                name: "license",
                choices: ["GNU APGLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"],
            },
            {
                type: "input",
                name: "github",
                message: "What is your github username?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            },

        ])
        return data;
    } catch (error) {
        console.log(error);
    }
};

//getUserInput();

// function to write README file
const writeToFile = async (data) => {
    try {
         data = await getUserInput();

         //switch statement?

        const markdown = generateMarkdown(data);

        fs.writeFileSync('README.md', markdown);

        console.log('Successfully wrote to README.md');

    } catch (err) {
        console.log(err);
    };

};

writeToFile();

/*
// function to initialize program
function init() {

}

// function call to initialize program
init();
*/