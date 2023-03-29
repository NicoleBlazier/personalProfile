'use strict';
// open resume
function openResume() {
  window.open('./Blazier_Resume_February_2022.pdf', '_blank')
}

const resume = document.getElementById('resume');
resume.addEventListener('click', openResume)

const btn = document.getElementById('btn');
btn.addEventListener('click', openResume)

// sudoku github and application
function openSudokuGit() {
  window.open('https://github.com/NicoleBlazier/sudoku', '_blank')
}

const sudokuGit = document.getElementById('sudoku-github');
sudokuGit.addEventListener('click', openSudokuGit)

function openSudokuApp() {
  window.open('https://sudoku-app-2022.netlify.app/', '_blank')
}

const sudokuApp = document.getElementById('sudoku-app');
sudokuApp.addEventListener('click', openSudokuApp)

const sudokuImage = document.getElementById('sudoku-image');
sudokuImage.addEventListener('click', openSudokuApp)

// investment github and application
function openInvestGit() {
  window.open('https://github.com/NicoleBlazier/investmentApp', '_blank')
}

const investGit = document.getElementById('invest-github');
investGit.addEventListener('click', openInvestGit)

function openInvestApp() {
  window.open('https://investment-app-2022.netlify.app/', '_blank')
}

const investApp = document.getElementById('invest-app');
investApp.addEventListener('click', openInvestApp)

const investmentImage = document.getElementById('investment-image');
investmentImage.addEventListener('click', openInvestApp)

// form github and applications
function openGit() {
  window.open('https://github.com/NicoleBlazier/sudoku', '_blank')
}

const formGit = document.getElementById('form-github');
formGit.addEventListener('click', openGit)

function openApp() {
  window.open('https://github.com/NicoleBlazier/sudoku', '_blank')
}

const formApp = document.getElementById('form-app');
formApp.addEventListener('click', openApp)


function openGmail() {
  window.open('mailto:nicole.blazier@gmail.com?subject=Job Opportunity')
}

const gmail = document.getElementById('gmail');
gmail.addEventListener('click', openGmail)


function openLinkedIn() {
  window.open('https://www.linkedin.com/in/nicole-blazier-55129723/', '_blank')
}

const linkedin = document.getElementById('linkedin');
linkedin.addEventListener('click', openLinkedIn)

function showNovartis() {
  const description = document.getElementsByClassName('description');
  for (var i=0; i < description.length; i++ ) {
    if (description[i].id === 'Novartis') {
      description[i].style.display = 'block'
    } else {
      description[i].style.display = "none";
    }
  }
}

showNovartis();

// Show logo when hovering
function showLogo(e) {
  const logo = document.getElementsByClassName('blazier-logo');
  for (var i=0; i < logo.length; i++) {
    console.log(logo[i].className)
    if (logo[i].className == 'blazier-logo show') {
      logo[i].className = logo[i].className.replace('blazier-logo show', 'blazier-logo hide')
    } else if (logo[i].className == 'blazier-logo hide') {
      logo[i].className = logo[i].className.replace('blazier-logo hide', 'blazier-logo show')
    }

  }
}

const blazierLogoOver = document.getElementById('blazier-logo-1');
blazierLogoOver.addEventListener('mouseover', function(e) {
  showLogo(e)
}, false)

const blazierLogoOut = document.getElementById('blazier-logo-2');
blazierLogoOut.addEventListener('mouseout', function(e) {
  showLogo(e)
}, false)

// Highlight the nav bar or experience buttons
function navEvent(e) {
  const className = document.getElementsByClassName('nav-class')
  for (var i=0; i < className.length; i++) {
   className[i].className = className[i].className.replace(" active", "");
  }
  e.srcElement.className += ' active'
}

const homeAnchor = document.getElementById('home-anchor');
homeAnchor.addEventListener('click', function(e) {
  navEvent(e)
}, false)

const aboutmeAnchor = document.getElementById('aboutme-anchor');
aboutmeAnchor.addEventListener('click', function(e) {
  navEvent(e)
}, false)

const skillsAnchor = document.getElementById('skills-anchor');
skillsAnchor.addEventListener('click', function(e) {
  navEvent(e)
}, false)

const experienceAnchor = document.getElementById('experience-anchor');
experienceAnchor.addEventListener('click', function(e) {
  navEvent(e)
}, false)

const projectsAnchor = document.getElementById('projects-anchor');
projectsAnchor.addEventListener('click', function(e) {
  navEvent(e)
}, false)

const contactmeAnchor = document.getElementById('contactme-anchor');
contactmeAnchor.addEventListener('click', function(e) {
  navEvent(e)
}, false)


function showExperience(e, companyName) {
  const description = document.getElementsByClassName('description');
  for (var i=0; i < description.length; i++ ) {
    description[i].style.display = "none";
    }

  const company = document.getElementsByClassName('company');
  for (var i=0; i < company.length; i++) {
   company[i].className = company[i].className.replace(" active", "");
  }
 const name = document.getElementById(companyName);
 console.log(name)
 document.getElementById(companyName).style.display = "block";

 const nameClass = e.srcElement.className += " active";
 console.log(nameClass)
}


  const novartis = document.getElementById('novartis');
  novartis.addEventListener('click', function(e) {
    showExperience(e, 'Novartis')
  }, false)

  const flexbox = document.getElementById('flexbox');
  flexbox.addEventListener('click', function(e) {
    showExperience(e, 'Flexbox')
  }, false)

  const american = document.getElementById('american');
  american.addEventListener('click', function(e) {
    showExperience(e, 'American')
  }, false)

  const louisiana = document.getElementById('louisiana');
  louisiana.addEventListener('click', function(e) {
    showExperience(e, 'Louisiana')
  }, false)
