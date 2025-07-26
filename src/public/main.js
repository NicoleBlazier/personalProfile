'use strict';
import './style.css';
// import logo from '../images/blazier-logo.png';
// import logoHover from '../images/blazier-logo-hover.png';
import BlazierResume from '../docs/NicoleBlazierResume.pdf';

//Photos
// Set initial logo sources
// document.getElementById('blazier-logo-1').src = logo;
// document.getElementById('blazier-logo-2').src = logoHover;

// //Logo
// // Get the anchor element to add event listeners
// const homeLogos = document.getElementById('home-logos');
//
// // Add mouseover event listener to change logo
// homeLogos.addEventListener('mouseover', function() {
//   document.getElementById('blazier-logo-1').classList.add('hide');
//   document.getElementById('blazier-logo-1').classList.remove('show');
//   document.getElementById('blazier-logo-2').classList.add('show');
//   document.getElementById('blazier-logo-2').classList.remove('hide');
// });
//
// // Add mouseout event listener to revert logo
// homeLogos.addEventListener('mouseout', function() {
//   document.getElementById('blazier-logo-1').classList.add('show');
//   document.getElementById('blazier-logo-1').classList.remove('hide');
//   document.getElementById('blazier-logo-2').classList.add('hide');
//   document.getElementById('blazier-logo-2').classList.remove('show');
// });

// open resume
function openResume() {
  window.open(BlazierResume, '_blank');
}

const resume = document.getElementById('resume');
resume.addEventListener('click', openResume)

const btn = document.getElementById('download-resume');
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

// chat github and application
function openChatGit() {
  window.open('https://github.com/NicoleBlazier/chatApp', '_blank')
}

const chatGit = document.getElementById('chat-github');
chatGit.addEventListener('click', openChatGit)

function openChatApp() {
  window.open('https://chat-app-2023.netlify.app//', '_blank')
}

const chatApp = document.getElementById('chat-app');
chatApp.addEventListener('click', openChatApp)

const chatImage = document.getElementById('chat-image');
chatImage.addEventListener('click', openChatApp)

// dashboard github and application
function openGettisGit() {
  window.open('https://github.com/NicoleBlazier/gettis-app', '_blank')
}

const gettisGit = document.getElementById('gettis-github');
gettisGit.addEventListener('click', openGettisGit)

function openGettisApp() {
  window.open('https://gettis-app-2023.netlify.app/', '_blank')
}

const gettisApp = document.getElementById('gettis-app');
gettisApp.addEventListener('click', openGettisApp)

const gettisImage = document.getElementById('gettis-image');
gettisImage.addEventListener('click', openGettisApp)


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

function showCurJob() {
  const description = document.getElementsByClassName('description');
  for (var i=0; i < description.length; i++ ) {
    if (description[i].id === 'Cpsenergy') {
      description[i].style.display = 'block'
    } else {
      description[i].style.display = "none";
    }
  }
}

showCurJob();

// Show logo when hovering
function showLogo(e) {
  const logo = document.getElementsByClassName('blazier-logo');
  for (var i=0; i < logo.length; i++) {
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
const headerNav = document.getElementById('header-nav');

function navEvent(e) {
  const className = document.getElementsByClassName('nav-class')
  for (var i=0; i < className.length; i++) {
   className[i].className = className[i].className.replace(" active", "");
  }
  e.srcElement.className += ' active'
}

function toggleNav() {
  const displayHead = headerNav.style.display;
  if (displayHead === 'block') {
    headerNav.style.display = 'none';
  } else {
    headerNav.style.display = 'block';
  }
}

function closeNav() {
  const displayHead = headerNav.style.display;
  if (displayHead === 'block') {
    headerNav.style.display = 'none';
  }
}

const check = document.getElementById('check');
check.addEventListener('click', function(e) {
  toggleNav(e)
}, false)

const homeAnchor = document.getElementById('home-anchor');
homeAnchor.addEventListener('click', function(e) {
  navEvent(e)
  closeNav()
}, false)

const aboutmeAnchor = document.getElementById('aboutme-anchor');
aboutmeAnchor.addEventListener('click', function(e) {
 navEvent(e)
 closeNav()
}, false)

const skillsAnchor = document.getElementById('skills-anchor');
skillsAnchor.addEventListener('click', function(e) {
  navEvent(e)
  closeNav()
}, false)

const experienceAnchor = document.getElementById('experience-anchor');
experienceAnchor.addEventListener('click', function(e) {
  navEvent(e)
  closeNav()
}, false)

const projectsAnchor = document.getElementById('projects-anchor');
projectsAnchor.addEventListener('click', function(e) {
  navEvent(e)
  closeNav()
}, false)

const contactmeAnchor = document.getElementById('contactme-anchor');
contactmeAnchor.addEventListener('click', function(e) {
  navEvent(e)
  closeNav()
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
 document.getElementById(companyName).style.display = "block";

 const nameClass = e.srcElement.className += " active";
}


  const novartis = document.getElementById('novartis');
  novartis.addEventListener('click', function(e) {
    showExperience(e, 'Novartis')
  }, false)

  const flexbox = document.getElementById('cpsenergy');
  flexbox.addEventListener('click', function(e) {
    showExperience(e, 'Cpsenergy')
  }, false)

  const american = document.getElementById('american');
  american.addEventListener('click', function(e) {
    showExperience(e, 'American')
  }, false)

  const louisiana = document.getElementById('louisiana');
  louisiana.addEventListener('click', function(e) {
    showExperience(e, 'Louisiana')
  }, false)
