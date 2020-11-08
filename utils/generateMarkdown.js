// function to generate markdown for README
const generateMarkdown = (data) => {
  
  return `# ${data.title}

  ## Table of Contents
  * <a href=""> Description </a> 
  * <a href=""> Installation </a> 
  * <a href=""> Usage </a> 
  * <a href=""> Contributing </a> 
  * <a href=""> Tests </a> 
  * <a href=""> Questions </a> 



`;
}

module.exports = generateMarkdown;
