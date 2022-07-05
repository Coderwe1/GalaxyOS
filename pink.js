let pinkStorage = localStorage.getItem('pinkStorage');
const pink= document.querySelector('#pink');
const enablePink =() =>{
    document.body.classList.add('pink');
    localStorage.setItem('pinkStorage' , 'enabled');
} 
const disablePink =() =>{
    document.body.classList.remove('pink');
    localStorage.setItem('pinkStorage' , 'disable');
}  
if(pinkStorage === 'enabled') {
 enablePink();
}
pink.addEventListener('click',()=>{
     pinkStorage = localStorage.getItem('pinkStorage');
    if(pinkStorage !== "enabled"){
        disableGreen();
        disablePurple();
        disableYellow();
        disableDarkMode();
        disableRed();
        disableBlue();
        enablePink();    
    } else{
        disablePink();
    }
})

