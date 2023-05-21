let div_1 = document.getElementById('div-1');
let div_2 = document.getElementById('div-2');
let btn_1 = document.querySelector('#btn-1')
let btn_2 = document.querySelector('#btn-2')

btn_1.addEventListener('click', function () {
    let p_1 = document.createElement('p')
    div_1.appendChild(p_1)
    for (let i = 0; i < div_1.children.length; i++) {
        p_1.innerHTML = `Tui là con thứ ${i + 1} của div1`
    }
})

btn_2.addEventListener('click', function () {
    let secondChild = div_1.children[1];
    if (div_1.children.length >= 2) {
        div_2.appendChild(secondChild);
    }
})
