'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

for(let i=0;i<btnOpenModal.length;i++){
   btnOpenModal[i].addEventListener('click',function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
   })
}


const closePopUp = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click',closePopUp);
overlay.addEventListener('click',closePopUp);

//keyboard events
document.addEventListener('keydown',function(xEvent){
    if(xEvent.key === 'Escape' && !modal.classList.contains('hidden')){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
    }
})