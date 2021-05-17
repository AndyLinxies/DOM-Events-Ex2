//1
let exo1 = document.querySelector('h1');

exo1.addEventListener("dblclick", () => {
    exo1.setAttribute('style', 'background-color: red; color: white;')
})

//2
let h3 = document.querySelector('h3');

h3.addEventListener("mouseover", () => {
    h3.innerText = h3.innerText.slice(0, -1);
})

//3
let p = document.querySelector('p');

// methode 1
p.addEventListener("click", () => {
    if (p.style.cssText == 'background-color: blue; color: gold;') {
        p.setAttribute('style', 'background-color: white; color: black')
    } else {
        p.setAttribute('style', 'background-color: blue; color: gold;')
    }
})

// methode 2
p.addEventListener("click", () => {
    if (p.style.backgroundColor == "blue" && p.style.color == "gold") {
        p.setAttribute('style', 'background-color: white; color: black')
    } else {
        p.setAttribute('style', 'background-color: blue; color: gold;')
    }
    console.log(p.style);
})