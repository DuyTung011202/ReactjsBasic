function greet() {
    console.log("Hello world")
}

function sayName(name) {
    console.log("My name is " + name)
}

setTimeout(sayName, 2000, "Tung")
greet()
