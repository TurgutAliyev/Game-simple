let arr = [
    'right',
    'left'
];

let ok = document.getElementById('ok');

ok.addEventListener('mouseenter',MouseEnter);


function MouseEnter(){
let rdm = Math.ceil(Math.random () * 10) + 1;
let rdm2 = Math.ceil(Math.random () * 10) + 1;
    ok.style.left = rdm +'9%'
    ok.style.top = rdm2 +'9%'
}

