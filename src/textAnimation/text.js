const text = 'This is my text and its freaking cool man'

const txtElement = document.querySelector('.text')
function writeTxt() {

    let i = 0 
    const inte = setInterval(function(){
        txtElement.textContent = txtElement.textContent + text[i]
        i++
        if (i >= text.length) {
            clearInterval(inte);
        }
        
    }, 100)

} 

writeTxt();