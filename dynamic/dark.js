let darkMode = localStorage.getItem('darkMode');
const darkModeToggle= document.querySelector('#togglebutton');
const enableDarkMode =() =>{
    document.body.classList.add('darkmode');
    document.getElementById("togglebutton").innerHTML="LightMode";
    localStorage.setItem('darkMode' , 'enabled');
} 
const disableDarkMode =() =>{
    document.body.classList.remove('darkmode');
    document.getElementById("togglebutton").innerHTML="DarkMode";
    localStorage.setItem('darkMode' , null);
}  
if(darkMode === 'enabled') {
    enableDarkMode();
}
darkModeToggle.addEventListener('click',()=>{
     darkMode = localStorage.getItem('darkMode');
    if(darkMode !== "enabled"){
        disableGreen();
        disableRed();
        disableBlue();
        disablePink();
        disablePurple();
        disableYellow();
        enableDarkMode();
    } else{
        disableDarkMode();
    }
})











