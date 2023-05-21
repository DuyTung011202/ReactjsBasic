function isUSZipCode(code) {
    let regex = /^[0-9]{5}(?:-[0-9]{4})?$/
    if (regex.test(code)) {
        console.log("Is US zip code")
    } else {
        console.log("Is not US zip code")
    }
}

isUSZipCode("1234")
