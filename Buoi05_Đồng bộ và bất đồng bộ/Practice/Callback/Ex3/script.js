function greet(name, callback) {
    console.log("Hello world!");

    callback(name)
}

function sayName(name) {
    console.log("Hello " + name);
}

setTimeout(greet, 2000, "Tung", sayName)