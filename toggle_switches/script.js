const switch1 = document.getElementById('switch-1')
const switch2 = document.getElementById('switch-2')
const glitch = document.getElementById('glitch')

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
    // console.log('lol')
  glitchHandler()
    
})

switch2.addEventListener('mouseout', (event) => {
    console.log('this')
    clearInterval(glitchHandler)
})

function glitchHandler() {
    // console.log('lol')
    setInterval( () =>
        {
            console.log(glitch.src)
            glitch.src == 'file:///home/mark/Desktop/for_future_use/toggle_switches/assets/glitch-1.svg' || ""? glitch.src = '../toggle_switches/assets/glitch-2.svg' : glitch.src = '../toggle_switches/assets/glitch-1.svg'
        }
       
        , 2500
    )
}