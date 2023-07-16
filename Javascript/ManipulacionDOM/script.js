const p = document.querySelector("p");
const pclase = document.querySelector(".parrafo");
const pid = document.querySelector("#pid");
const h1 = document.querySelector("h1");
const entrada = document.querySelector("input");
const boton = document.querySelector("button");

console.log({
    p,
    pclase,
    pid,
})

console.log(pclase);

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/blog/unnamed-8089fc33-6322-4bd3-85de-1da032257d4b.png')

boton.addEventListener('click', Cambiar);


function Cambiar(){
    h1.innerText = entrada.value;
    pid.innerHTML="";
    pid.append(img);
    if(boton.getAttribute('class') == 'verde'){
        boton.setAttribute('class', 'rojo');
    }
    else{
        boton.setAttribute('class', 'verde');
    }
}