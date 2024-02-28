// switch 1
const switch1 = document.getElementById('switch-1')



switch1.addEventListener('change', ()=>{
    console.log(switch1.childNodes[3].childNodes[1])
    if(switch1.childNodes[3]){
        console.log('wut')
        switch1.childNodes[3].childNodes[1].textContent =`&#9789`
    }
})