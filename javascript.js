const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const nobutton = document.getElementById('nobutton');
    const yesbutton = document.getElementById('yesbutton');

    yesbutton.addEventListener('click', ()=> alert('YEY ILOVEYOUSOMUCH <3 ⸜(｡˃ ᵕ ˂ )⸝'));

    nobutton.addEventListener('mouseover', ()=> {
        nobutton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        nobutton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })
})