let purpleStorage = localStorage.getItem('purpleStorage');
const purple= document.querySelector('#purple');
const enablePurple =() =>{
    document.body.classList.add('purple');
    localStorage.setItem('purpleStorage' , 'enabled');
} 
const disablePurple =() =>{
    document.body.classList.remove('purple');
    localStorage.setItem('purpleStorage' , 'disable');
}  
if(purpleStorage === 'enabled') {
    enablePurple();
}
purple.addEventListener('click',()=>{
     purpleStorage = localStorage.getItem('purpleStorage');
    if(purpleStorage !== "enabled"){
        disableGreen();
        disablePink();
        disableYellow();
        disableDarkMode();
        disableRed();
        disableBlue();
        enablePurple();    
    } else{
        disablePurple();
    }
})

