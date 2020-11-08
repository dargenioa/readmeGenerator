const fs = require('fs');
const inquirer = require('inquirer');

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
                name: "guidelines",
                message: "What are the contribution guidelines?"
            },
            {
                type: "input",
                name: "test",
                message: "What are the test instructions?"
            },
            {
                type: "list",
                name: "license",
                message: ["Apache", "Artistic"]
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

// function to write README file
const writeToFile = async () => {
    const { title, description, installation, usage, guidelines,
        test, license, github, email } = await getUserInput();
    const htmlFile = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>README.md Generator</title>
    </head>
    <body>
    </body>
    </html>
    `;
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
