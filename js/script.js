(() => {
    const display = document.querySelector('.display')
    display.focus()

    
    document.addEventListener('click', (e) => {
        const element = e.target
        
        if (element.classList.contains('btn-num')) {
            display.value += element.innerText
            display.focus()
        }
        
        if (element.classList.contains('btn-clear')) {
            display.value = ''
            display.focus()
        }
        
        if (element.classList.contains('btn-result')) {
            display.value = eval(display.value)
            display.focus()
        }
    })
    
    display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13){
            display.value = eval(display.value)
        }
    })
})()