'use strict';

function openGithub() {
  window.open('https://www.github.com', '_blank')
}

const github = document.getElementById('github');
github.addEventListener('click', openGithub)

function openArrowUp() {
  window.open('https://github.com', '_blank')
}

const arrowUp = document.getElementById('arrowUp');
arrowUp.addEventListener('click', openArrowUp)

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

function showExperience(e, companyName) {
  console.log(e)
  console.log(companyName)

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
 e.path[0].className += " active";
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
