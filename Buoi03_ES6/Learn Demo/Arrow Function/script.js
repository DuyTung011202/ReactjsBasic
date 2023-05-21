function printFibo(n = 1) {
    if (n == 1) {
        console.log(1)

    } else if (n == 2) {
        console.log("1 1")

    } else {
        let res = "1 1 "
        let fn2 = 1
        let fn1 = 1
        let nextNumber
        for (let i = 3; i <= n; i++) {
            nextNumber = fn1 + fn2
            fn2 = fn1
            fn1 = nextNumber
            res += nextNumber + " "
        }
        console.log(res)
    }
}

printFibo(2)