function validateAccount(account) {
    let regex = /^[_a-z0-9]{6,}$/
    if (regex.test(account)) {
        console.log("Tài khoản hợp lệ")
    } else {
        console.log("Tài khoản không hợp lệ")

    }
}

validateAccount("123abc_")
validateAccount("1234_")