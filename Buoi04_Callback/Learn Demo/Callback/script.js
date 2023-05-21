function abc(a, b) {
    b(a)
}

function ham(a) {
    console.log(a)
}

abc(1, ham) 