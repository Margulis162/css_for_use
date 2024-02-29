// switch 1
const switch1 = document.getElementById("switch-1")
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')

switch1.addEventListener('change', ()=>
    console.log(switch1.childNodes[1].checked)
)

// sun.addEventListener('click', ()=>{
//     setTimeout(() =>{moon.style.display = 'block'}, 1000)
   
// })

// moon.addEventListener('click', ()=>{
//     setTimeout(() =>{moon.style.display = 'none'}, 1000)
// })