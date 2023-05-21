function validateEmail(email) {
    let regex = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/
    if (regex.test(email)) {
        console.log("Email hợp lệ")
    } else {
        console.log("Email không hợp lệ")
    }
}

validateEmail("a@gmail.com")
validateEmail("@#abc@gmail.com")