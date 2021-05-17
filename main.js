//Ex1
let h1 = document.querySelector('h1');
h1.addEventListener('dblclick', () => {
    h1.style.backgroundColor = 'red';
    h1.style.color = 'white'

})

//Ex2
let h3 = document.querySelector('h3');
h3.addEventListener('mouseover', () => {
    h3.innerText = h3.innerText.slice(h3.length, -1) //pour enlever(couper) la dernière lettre 
})

//Ex3
let p = document.querySelector('p');
p.addEventListener('click', () => {
    if (p.style.backgroundColor == 'blue' &&
        p.style.color == 'gold') {
        p.style.backgroundColor = 'white';
        p.style.color = 'black'
    } else {
        p.style.backgroundColor = 'blue';
        p.style.color = 'gold'
    }

})