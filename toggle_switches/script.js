const switch1 = document.getElementById('switch-1')
const switch2 = document.getElementById('switch-2')

window.setTimeout(() => switch1.style.visibility = 'visible', 1000)

switch2.addEventListener('change',() => {
    if(switch2.childNodes[3].textContent == '0'){
        switch2.childNodes[3].textContent = '1'}
    else{
        switch2.childNodes[3].textContent = '0'
    }
})