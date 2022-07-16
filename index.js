let count = 0;


const value = document.querySelector('#number'),
    btn = document.querySelectorAll(".btn");

btn.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const style = e.currentTarget.classList;
        if (style.contains('lower')) {
            count--;
            value.textContent = count;
        } else if (style.contains('higher')) {
            count++;
            value.textContent = count;
        } else {
            count = 0;
            value.textContent = count;
        }
    })
})