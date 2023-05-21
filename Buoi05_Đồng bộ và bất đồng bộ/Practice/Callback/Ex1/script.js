function greet(name, callback) {
    console.log("Hi my name is " + name);
    callback()
}

function callMe() {
    console.log("I'm a callback function")
}

greet("Tung", callMe)