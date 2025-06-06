
const boxPlayer = document.getElementById('player');
let hp = document.querySelector('.hp');
let dano = 100;
boxPlayer.addEventListener('click',()=>{
    dano = dano - 10;
    hp.style.width = dano + "%";
   
 
});



