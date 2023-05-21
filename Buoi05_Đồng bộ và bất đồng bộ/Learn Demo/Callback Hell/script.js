console.log("Thực hiện công việc A")
setTimeout(() => {
    console.log("Đã xong công việc A")
    console.log("Thực hiện công việc B")
    setTimeout(() => {
        console.log("Đã xong công việc B")
        console.log("Thực hiện công việc C")
        setTimeout(() => {
            console.log("Đã xong công việc C")
        }, 2000)
    }, 2000)
}, 2000)