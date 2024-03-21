const switch1 = document.getElementById('switch-1')
const switch2 = document.getElementById('switch-2')

window.setTimeout(() => switch1.style.visibility = 'visible', 1000)

//not sure if I like it  switch 2 changing text content on check on
switch2.addEventListener('change',() => {
    if(switch2.childNodes[5].textContent == 'o'){
        switch2.childNodes[5].textContent = 'c'}
    else{
        switch2.childNodes[5].textContent = 'o'
    }
})

switch2.addEventListener('mouseover', (event)=>{
    event.stopPropagation()
    console.log(event.target)
    setInterval(()=> event.target.childNodes[1].src  = 'toggle_switches/assets/glitch-2.svg', 1500)
})
