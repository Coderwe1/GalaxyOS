let redStorage = localStorage.getItem('redStorage');
const red= document.querySelector('#red');
const enableRed =() =>{
    document.body.classList.add('red');
    localStorage.setItem('redStorage' , 'enabled');
} 
const disableRed =() =>{
    document.body.classList.remove('red');
    localStorage.setItem('redStorage' , 'disable');
}  
if(redStorage === 'enabled') {
    enableRed();
}
red.addEventListener('click',()=>{
     redStorage = localStorage.getItem('redStorage');
    if(redStorage !== "enabled"){
        disableBlue();
        disableGreen();
        disablePink();
        disablePurple();
        disableDarkMode();
        disableYellow();
        enableRed();
    } else{
        disableRed();
    }
})