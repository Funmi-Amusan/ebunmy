var regTypeBtn = document.querySelector('.regTypeBtn');
var indexModal = document.querySelector('.modal');
var closeModal = document.querySelector('.button-close-modal')

regTypeBtn.addEventListener('click',function(){
    indexModal.style.display = "block"
});

closeModal.onclick = function(){
    indexModal.style.display = "none"
}

window.onclick = function(e){
    if(e.target == modal) {
        modal.style.display = "none";
    }
}