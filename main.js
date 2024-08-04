let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
console.log(menu)

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
        
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');  
}


// Type  Text Code

var typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain','Fat Lose','Weight Lifting','Running'],
    typeSpeed: 60,
    backspeed: 60,
    backDelay: 1000,
    loop: true,
  });
