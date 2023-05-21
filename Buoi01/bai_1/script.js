// Viết 1 hàm đưa vào 1 array và tính trung bình của array đó
function tb_array(arr) {
    let tong = 0;
    let tb = 0;
    for(let i = 0; i < arr.length; i++) {
        tong += arr[i]
        tb = tong / arr.length
    }
    return tb
}

