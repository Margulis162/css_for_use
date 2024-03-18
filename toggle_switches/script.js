const switch1 = document.getElementById('switch-1')
const switch2 = document.getElementById('switch-2')

window.setTimeout(() => switch1.style.visibility = 'visible', 1000)

document.addEventListener('change',() => console.log(switch2.control.checked))