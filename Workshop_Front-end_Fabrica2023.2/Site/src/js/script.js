//Carrossel
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

let idx = 0

function carrosel(){
    idx++
    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 700}px)`
}

setInterval(carrosel, 1800)


// COSUMINDO A API
fetch('https://ygo.augustomedeiros.com.br/getCartas/4')
     .then((res) => res.json()) 
    .then((data) => console.log(data))
