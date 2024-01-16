//Global variables
const  inquirer = require("inquirer"); //This calls the inquirer package
const fs = require('fs'); //This calls the filesystem package

async function promptUser(){
    return inquirer.prompt([
        {
            type:'input',
            name: "letters",
            message: "Enter up to three letters for your logo: ",
        },
        {
            type:"input",
            name:"text",
            message:"Enter a text color keyword or hexidecimal number: ",
        },
        {
            type:"input",
            name:"background",
            message:"Enter a background color keyword or hexidecimal number: ",
        },
        {//This is a list, rather than an input so that we can provide a badge for the user's selection. 
            type:"list",
            name:"shape",
            message:"Select a shape for your logo: ",
            choices: [{ 
                value: "triangle",
            },
            {
                value: "square",
            },
            {
                value: "circle",
            }]
        }
    ])
}

async function init() {
    const data = await promptUser().then((data => {
        // const icon = sortIcon(data.license);
        // const markdown = generateMarkdown(data,icon);
        // writeToFile("README.md", markdown);
    }));
}

init();