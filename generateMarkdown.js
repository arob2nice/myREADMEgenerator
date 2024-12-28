// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
};
 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `* [License](https://opensource.org/licenses/${license})`;

  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  This project is licensed under the ${license} license.`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Destructure the data object for clarity and provide default values if necessary
  const { title, description, license, contributing, usage } = data;
  return `# ${title}
${renderLicenseBadge(license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## [Installation](#installation)
${data.installation}

## [Usage](#usage)
${data.usage}

## [License](#license)
${data.license}

## [Contributing](#contributing)
${data.contributing}

## [Tests](#tests)
${data.tests}

## [Questions](#questions)
If you have any questions, please reach out to me at ${data.emailAddress} or visit my GitHub profile: [${data.username}]  

${renderLicenseSection(license)}

`;
}

export default generateMarkdown;
