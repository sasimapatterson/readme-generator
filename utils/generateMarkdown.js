// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT'){
    badge = '[GitHub License](https://img.shields.io/bower/l/Mi)'
  } else if (license === 'GPL') {
    badge = '[GitHub License](https://img.shields.io/aur/license/j)'
  } else if (license === 'BSD'){
    badge = '[GitHub License](https://img.shields.io/aur/license/A)'
  } else {
    badge = ''
  }
  return badge;
}

renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title} <img src='https://img.shields.io/badge/license-${data.license}-blue'
  
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
  You can check my project at [GitHub:](${data.github})
  For additional questions plese feel free to reach me at[${data.email}](mailto: ${data.email})`;
}



module.exports = generateMarkdown;


// const displayLicenseBadge = (name) => {
//   return `<img src='https://img.shields.io/badge/license-${name}-color'
//    alt= 'badge'>`;
// }

// if (license !== 'None') {
//   const encodedLicense = encodeURIComponent(license);
//   return `![GitHub license](https://img.shields.io/badge/license-${encodedLicense}-blue.svg)`;
// }
// https://img.shields.io/bower/l/Mi (MIT)

// https://img.shields.io/aur/license/A (BSD)

// https://img.shields.io/aur/license/j (GPL)