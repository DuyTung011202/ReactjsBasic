const promise = new Promise((resolve, reject) => {
    $.ajax({
        url: "http://api.iamdien.com:8000/random_number/",
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

promise
    .then((data) => {
        console.log("Number:")
        console.log(data)
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://api.iamdien.com:8000/get_name/?id=${data}`,
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
        console.log(data)
    })
