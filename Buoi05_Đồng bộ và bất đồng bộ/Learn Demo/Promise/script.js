const promise = new Promise((resolve, reject) => {
    $.ajax({
        url: "http://api.iamdien.com:8000/delay_response/",
        type: "GET",
        data: {},
        async: true,
        success: function (response, textStatus, jqXHR) {
            resolve(response)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            reject(jqXHR)
        }
    });
})
promise.then((data) => {
    console.log("Call API lần thứ 1 thành công")
    console.log(data)
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "http://api.iamdien.com:8000/delay_response?time=3",
            type: "GET",
            data: {},
            async: true,
            success: function (response, textStatus, jqXHR) {
                resolve(response)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                reject(jqXHR)
            }
        });
    })
})
    .then((data) => {
        console.log("Call API lần thứ 2 thành công")
        console.log(data)
    })


    .catch((data) => {
        console.log("Thực hiện công việc 2 thành công")
    })