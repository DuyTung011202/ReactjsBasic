function submit_form(e, form) {
    e.preventDefault();
    const error = document.querySelector("#error")
    const input_all = form.querySelectorAll('input')
    for (let i = 0; i < input_all.length; i++) {
        if (input_all[i].ame == "name") {
            if (input_all[i].value.split(" ").length < 2) {
                error.innerHTML += "Tên phải có 2 từ"
                return
            }
        }
        if (input_all[i].name == "age") {
            if (input_all[i].value < 0) {
                error.innerHTML += "Tuổi phải là số dương"
                return
            }
        }
    }
    alert("Submit thành công")
}