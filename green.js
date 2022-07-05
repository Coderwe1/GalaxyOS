let greenStorage = localStorage.getItem('greenStorage');
const green= document.querySelector('#green');
const enableGreen =() =>{
    document.body.classList.add('green');
    localStorage.setItem('greenStorage' , 'enabled');
} 
const disableGreen =() =>{
    document.body.classList.remove('green');
    localStorage.setItem('greenStorage' , 'disable');
}  
if(greenStorage === 'enabled') {
    enableGreen();
}
green.addEventListener('click',()=>{
     greenStorage = localStorage.getItem('greenStorage');
    if(greenStorage !== "enabled"){
        disableDarkMode();
        disableRed();
        disableBlue();
        disableYellow();
        disablePink();
        disablePurple();   
        enableGreen();
    } else{
        disableGreen();
    }
})