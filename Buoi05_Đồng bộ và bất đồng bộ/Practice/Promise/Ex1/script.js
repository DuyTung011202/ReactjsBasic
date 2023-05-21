const count = false;

let promise = new Promise((resolve, reject) => {
    if (count) {
        resolve("There is a count value")
    } else {
        reject("There is no count value")
    }
})

promise.then((data) => console.log(data)).catch((err) => console.log(err)); ``