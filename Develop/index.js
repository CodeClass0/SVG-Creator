//Global variables/packages
const  inquirer = require("inquirer"); //This calls the inquirer package
const fs = require('fs'); //This calls the filesystem package
const {Circle, Square, Triangle} = require("./lib/shapes"); //This lets us use our shape classes

//This prompts the user and delivers an object containing their responses.
async function promptUser(){
    return inquirer.prompt([
        {
            type:'input',
            name: "letters",
            message: "Enter up to three letters for your logo: ",
        },
        {
            type:"input",
            name:"textColor",
            message:"Enter a color keyword or hexidecimal number for your text: ",
        },
        {
            type:"input",
            name:"backgroundColor",
            message:"Enter a color keyword or hexidecimal number for your shape's background: ",
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

//This builds the SVG string for us.
function buildSvg(shape, textColor, text){
    const txt = `<text x="50%" y="65%" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    let str = `<svg version='1.1' xmlns="http://www.w3.org/2000/svg" height='200px' width='300px'>${shape}${txt}</svg>`;
    return str;
}

//Async function that waits for the user to enter all of the data.
async function init() {
    const data = await promptUser().then((data => {
        console.log(data);
        let text = "";

        //Check that the length of the logo letters is 3, and only use 3 if it's longer.
        if (data.letters.length > 3){
            console.log("You entered more than three letters, only the first three will be used!");
            text = data.letters.slice(0,3);
        } else if (data.letters.length <= 3){
            text = data.letters;
        }

        let color = data.textColor;
        let bgColor = data.backgroundColor;
        let selectedShape = data.shape;
        let svgStr = "";
        
        if (selectedShape === "triangle"){
            const tri = new Triangle();
            tri.setColor(bgColor);   
            svgStr = buildSvg(tri.render(), color, text);
        } else if (selectedShape === "circle"){
            const cir = new Circle();
            cir.setColor(bgColor);   
            svgStr = buildSvg(cir.render(), color, text);
        } else if (selectedShape === "square"){
            const squ = new Square();
            squ.setColor(bgColor);   
            svgStr = buildSvg(squ.render(), color, text);
        }

        //Write the string to a file.
        writeToFile("logo.svg", svgStr);
    }));
}

//write file fn
function writeToFile(fileName, str) {
    fs.writeFile(fileName, str, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg"));
}


//initialize program.
init();


