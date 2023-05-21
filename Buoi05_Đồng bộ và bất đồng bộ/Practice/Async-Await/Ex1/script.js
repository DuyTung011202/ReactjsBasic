// async function asyncFunction() {
//     console.log("Tung dep zai")
//     return Promise.resolve(1)
// }

// asyncFunction().then((data) => {
//     console.log(data)
// })

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Tung cuc ky dep zai"), 2000)
})

async function f() {
    let result = await promise
    console.log(result)
    console.log("Tung dep zai vl")
}

f()