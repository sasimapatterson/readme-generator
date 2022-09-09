// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT'){
    badge = '![License](https://img.shields.io/bower/l/Mi)'
  } else if (license === 'GPL') {
    badge = '![License](https://img.shields.io/aur/license/j)'
  } else if (license === 'BSD'){
    badge = '![License](https://img.shields.io/aur/license/A)'
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
  
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
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
  For additional questions plese feel free to reach me at ${data.email}`;
}



module.exports = generateMarkdown;


