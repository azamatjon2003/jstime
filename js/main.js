const text = document.querySelector('.text');
const loader = document.querySelector('.loader');
let txt = 0

setTimeout(()=>{
    loader.style.display = 'none';
    const interval = setInterval(function (){
        txt++;
        text.textContent = txt
    }, 1000)
    setTimeout(()=>{
        clearInterval(interval);
    },10000)
},5000)