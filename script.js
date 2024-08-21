const imageIcon = document.querySelector('button i');
const navIcons = document.querySelectorAll('.nav-item');


document.addEventListener('DOMContentLoaded',()=>{
imageIcon.addEventListener('click',()=>{
    if(imageIcon.classList.contains('bi-list')){
        imageIcon.classList.remove('bi-list');
        imageIcon.classList.add('bi-x-lg');

    }else{
        imageIcon.classList.remove('bi-x-lg');
        imageIcon.classList.add('bi-list'); 
    }
});
navIcons.forEach(navIcon =>{
    
        navIcon.addEventListener('mouseover', ()=>{
            if(navIcon.querySelector('i').classList.contains('bi-chevron-down')){
                navIcon.querySelector('i').classList.remove('bi-chevron-down');
                navIcon.querySelector('i').classList.add('bi-chevron-up')
            }
        })
    

     navIcon.addEventListener('mouseout', ()=>{
        if(navIcon.querySelector('i').classList.contains('bi-chevron-up')){
            navIcon.querySelector('i').classList.remove('bi-chevron-up');
            navIcon.querySelector('i').classList.add('bi-chevron-down')
        }
     });
});


 


});
 // Define the increase function
/*  function increase() {
    counter.innerText = parseInt(counter.innerText) + 1
 } */