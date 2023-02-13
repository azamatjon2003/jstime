const text = document.querySelector('.text');
let txt = 0
const interval = setInterval(function (){
    txt++;
    text.textContent = txt
}, 1000)

setTimeout(()=>{
    clearInterval(interval)
},10000)