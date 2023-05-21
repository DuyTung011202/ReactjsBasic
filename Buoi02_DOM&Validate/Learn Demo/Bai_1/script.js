const abc = document.querySelectorAll('.abc');

for (let i = 0; i < abc.length; i++) {
    abc[i].innerHTML += " " + (i + 1);
}
