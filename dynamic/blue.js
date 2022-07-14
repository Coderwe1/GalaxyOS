let blueStorage = localStorage.getItem('blueStorage');
const blue= document.querySelector('#blue');
const enableBlue =() =>{
    document.body.classList.add('blue');
    localStorage.setItem('blueStorage' , 'enabled');
} 
const disableBlue =() =>{
    document.body.classList.remove('blue');
    localStorage.setItem('blueStorage' , 'disable');
}  
if(blueStorage === 'enabled') {
    enableBlue();
}
blue.addEventListener('click',()=>{
     blueStorage = localStorage.getItem('blueStorage');
    if(blueStorage !== "enabled"){
        disableDarkMode();
        disableGreen();
        disableRed();
        disableYellow();
        disablePink();
        disablePurple();
        enableBlue();
    } else{
        disableBlue();
    }
})


