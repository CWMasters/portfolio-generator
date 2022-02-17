const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(names, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));





// const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;

// console.log(name, github);




// const printProfileData = profileDataArr => {
//     // this.....
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }

// console.log('================');

// // is this the same as this...
// profileDataArr.forEach(profileItem => console.log(profileItem)); 
// }; 

// printProfileData(profileDataArgs);