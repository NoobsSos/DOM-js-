let count = 100

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count--
        }
        else if (styles.contains('increase')){
            count++
        }else {
            count = 0
        }
        if (count > 100){
            value.textContent = 'ARE YOU CRAZY?!'
            return
        }
        value.textContent = count
    })
});

