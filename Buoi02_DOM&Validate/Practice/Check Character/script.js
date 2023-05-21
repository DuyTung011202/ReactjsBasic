function isFirstLetterUpperCase(str) {
    let regex = /^[A-Z]/
    if (regex.test(str)) {
        console.log("Is first letter upper case")
    }
    else {
        console.log("Is first letter lower case")
    }
}

isFirstLetterUpperCase("Abcd")
isFirstLetterUpperCase("Nguyen van Nam")
isFirstLetterUpperCase("NGUYEN VAN NAM")
isFirstLetterUpperCase("nguyen van nam")
