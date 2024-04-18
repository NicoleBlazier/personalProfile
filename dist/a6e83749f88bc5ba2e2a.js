"use strict";import"./style.css";import logo from"../images/blazier-logo.png";import logoHover from"../images/blazier-logo-hover.png";import BlazierResume from"../docs/Blazier_Resume_March_2024.pdf";document.getElementById("blazier-logo-1").src=logo,document.getElementById("blazier-logo-2").src=logoHover;const homeLogos=document.getElementById("home-logos");function openResume(){window.open(BlazierResume,"_blank")}homeLogos.addEventListener("mouseover",(function(){document.getElementById("blazier-logo-1").classList.add("hide"),document.getElementById("blazier-logo-1").classList.remove("show"),document.getElementById("blazier-logo-2").classList.add("show"),document.getElementById("blazier-logo-2").classList.remove("hide")})),homeLogos.addEventListener("mouseout",(function(){document.getElementById("blazier-logo-1").classList.add("show"),document.getElementById("blazier-logo-1").classList.remove("hide"),document.getElementById("blazier-logo-2").classList.add("hide"),document.getElementById("blazier-logo-2").classList.remove("show")}));const resume=document.getElementById("resume");resume.addEventListener("click",openResume);const btn=document.getElementById("download-resume");function openSudokuGit(){window.open("https://github.com/NicoleBlazier/sudoku","_blank")}btn.addEventListener("click",openResume);const sudokuGit=document.getElementById("sudoku-github");function openSudokuApp(){window.open("https://sudoku-app-2022.netlify.app/","_blank")}sudokuGit.addEventListener("click",openSudokuGit);const sudokuApp=document.getElementById("sudoku-app");sudokuApp.addEventListener("click",openSudokuApp);const sudokuImage=document.getElementById("sudoku-image");function openInvestGit(){window.open("https://github.com/NicoleBlazier/investmentApp","_blank")}sudokuImage.addEventListener("click",openSudokuApp);const investGit=document.getElementById("invest-github");function openInvestApp(){window.open("https://investment-app-2022.netlify.app/","_blank")}investGit.addEventListener("click",openInvestGit);const investApp=document.getElementById("invest-app");investApp.addEventListener("click",openInvestApp);const investmentImage=document.getElementById("investment-image");function openChatGit(){window.open("https://github.com/NicoleBlazier/chatApp","_blank")}investmentImage.addEventListener("click",openInvestApp);const chatGit=document.getElementById("chat-github");function openChatApp(){window.open("https://chat-app-2023.netlify.app//","_blank")}chatGit.addEventListener("click",openChatGit);const chatApp=document.getElementById("chat-app");chatApp.addEventListener("click",openChatApp);const chatImage=document.getElementById("chat-image");function openGettisGit(){window.open("https://github.com/NicoleBlazier/gettis-app","_blank")}chatImage.addEventListener("click",openChatApp);const gettisGit=document.getElementById("gettis-github");function openGettisApp(){window.open("https://gettis-app-2023.netlify.app/","_blank")}gettisGit.addEventListener("click",openGettisGit);const gettisApp=document.getElementById("gettis-app");gettisApp.addEventListener("click",openGettisApp);const gettisImage=document.getElementById("gettis-image");function openGmail(){window.open("mailto:nicole.blazier@gmail.com?subject=Job Opportunity")}gettisImage.addEventListener("click",openGettisApp);const gmail=document.getElementById("gmail");function openLinkedIn(){window.open("https://www.linkedin.com/in/nicole-blazier-55129723/","_blank")}gmail.addEventListener("click",openGmail);const linkedin=document.getElementById("linkedin");function showCurJob(){const e=document.getElementsByClassName("description");for(var t=0;t<e.length;t++)"Cpsenergy"===e[t].id?e[t].style.display="block":e[t].style.display="none"}function showLogo(e){const t=document.getElementsByClassName("blazier-logo");for(var n=0;n<t.length;n++)"blazier-logo show"==t[n].className?t[n].className=t[n].className.replace("blazier-logo show","blazier-logo hide"):"blazier-logo hide"==t[n].className&&(t[n].className=t[n].className.replace("blazier-logo hide","blazier-logo show"))}linkedin.addEventListener("click",openLinkedIn),showCurJob();const blazierLogoOver=document.getElementById("blazier-logo-1");blazierLogoOver.addEventListener("mouseover",(function(e){showLogo(e)}),!1);const blazierLogoOut=document.getElementById("blazier-logo-2");blazierLogoOut.addEventListener("mouseout",(function(e){showLogo(e)}),!1);const headerNav=document.getElementById("header-nav");function navEvent(e){const t=document.getElementsByClassName("nav-class");for(var n=0;n<t.length;n++)t[n].className=t[n].className.replace(" active","");e.srcElement.className+=" active"}function toggleNav(){const e=headerNav.style.display;headerNav.style.display="block"===e?"none":"block"}function closeNav(){"block"===headerNav.style.display&&(headerNav.style.display="none")}const check=document.getElementById("check");check.addEventListener("click",(function(e){toggleNav(e)}),!1);const homeAnchor=document.getElementById("home-anchor");homeAnchor.addEventListener("click",(function(e){navEvent(e),closeNav()}),!1);const aboutmeAnchor=document.getElementById("aboutme-anchor");aboutmeAnchor.addEventListener("click",(function(e){navEvent(e),closeNav()}),!1);const skillsAnchor=document.getElementById("skills-anchor");skillsAnchor.addEventListener("click",(function(e){navEvent(e),closeNav()}),!1);const experienceAnchor=document.getElementById("experience-anchor");experienceAnchor.addEventListener("click",(function(e){navEvent(e),closeNav()}),!1);const projectsAnchor=document.getElementById("projects-anchor");projectsAnchor.addEventListener("click",(function(e){navEvent(e),closeNav()}),!1);const contactmeAnchor=document.getElementById("contactme-anchor");function showExperience(e,t){const n=document.getElementsByClassName("description");for(var o=0;o<n.length;o++)n[o].style.display="none";const c=document.getElementsByClassName("company");for(o=0;o<c.length;o++)c[o].className=c[o].className.replace(" active","");document.getElementById(t),document.getElementById(t).style.display="block",e.srcElement.className+=" active"}contactmeAnchor.addEventListener("click",(function(e){navEvent(e),closeNav()}),!1);const novartis=document.getElementById("novartis");novartis.addEventListener("click",(function(e){showExperience(e,"Novartis")}),!1);const flexbox=document.getElementById("cpsenergy");flexbox.addEventListener("click",(function(e){showExperience(e,"Cpsenergy")}),!1);const american=document.getElementById("american");american.addEventListener("click",(function(e){showExperience(e,"American")}),!1);const louisiana=document.getElementById("louisiana");louisiana.addEventListener("click",(function(e){showExperience(e,"Louisiana")}),!1);