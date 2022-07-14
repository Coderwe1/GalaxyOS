let yellowStorage = localStorage.getItem('yellowStorage');
const yellow= document.querySelector('#yellow');
const enableYellow =() =>{
    document.body.classList.add('yellow');
    localStorage.setItem('yellowStorage' , 'enabled');
} 
const disableYellow =() =>{
    document.body.classList.remove('yellow');
    localStorage.setItem('yellowStorage' , 'disable');
}  
if(yellowStorage === 'enabled') {
    enableYellow();
}
yellow.addEventListener('click',()=>{
     yellowStorage = localStorage.getItem('yellowStorage');
    if(yellowStorage !== "enabled"){
        disableGreen();
        disablePink();
        disablePurple();
        disableDarkMode();
        disableRed();
        disableBlue();
        enableYellow();    
    } else{
        disableYellow();
    }
})

