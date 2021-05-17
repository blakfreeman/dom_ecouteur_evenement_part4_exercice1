// // methode 1
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');

// // on pose notre event avec addEventListener et ensuite on défini le comportement de l'event avec 'click'
// h1.addEventListener('click', () => {
//     if (h1.style.cssText == "color: red;" && h1.className == "dorianG") {
//         h1.setAttribute('style', 'color: black;');
//         h1.classList.remove('dorianG');
//     } else {
//         h1.setAttribute('style', 'color: red;');
//         h1.classList.add('dorianG');
//     }
// });

// h3.addEventListener('click', () => {
//     h3.setAttribute('style', 'font-size: 56px')
// });


// //methode 2
// let p = document.querySelector('p');
// // on crée notre fonction
// let myCactus =() => {
//     p.setAttribute('style', 'color: red; background-color: black;')
// }
// //on l'applique dans notre event 
// p.addEventListener('dblclick', myCactus);


let h1 = document.querySelector('h1');

console.log(h1);

function changeToB() {
    h1.addEventListener('click', () => {
        h1.setAttribute('style', 'color: blue;');
});
    
}


changeToB();