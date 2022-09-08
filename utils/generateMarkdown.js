// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license !== 'None') {
//     const encodedLicense = encodeURIComponent(license);
//     return `![GitHub license](https://img.shields.io/badge/license-${encodedLicense}-blue.svg)`;
//   }
// }
// const license = renderLicenseBadge(license);
// console.log(license);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title} ![GitHub License](https://img.shields.io/badge/license-${data.license}-green)

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
 
  ## Descriptions
  ${data.description}
  
  ## Installation
  ${data.installation}
   

  ## Usage
  ${data.usage}
  

  ## Contribution
  ${data.contribution}
  

  ## Test
  ${data.test}
  

  ## License
  ${data.license}
  

  ## Questions
  You can check my project at GitHub: ${data.github}
  You can reach me at ${data.email}`;
}



module.exports = generateMarkdown;


// const displayLicenseBadge = (name) => {
//   return `<img src='https://img.shields.io/badge/license-${name}-color'
//    alt= 'badge'>`;
// }