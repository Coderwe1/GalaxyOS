let darkMode = localStorage.getItem('darkMode');

const darkModeToggle= document.querySelector('#toggle');




const enableDarkMode =() =>{
    document.body.classList.add('darkmode');

    localStorage.setItem('darkMode' , 'enabled');
} 

const disableDarkMode =() =>{
    document.body.classList.remove('darkmode');

    localStorage.setItem('darkMode' , null);
}  

if(darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click',()=>{
     darkMode = localStorage.getItem('darkMode');
    if(darkMode !== "enabled"){
        enableDarkMode();

    } else{
        disableDarkMode();
    }


})



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



