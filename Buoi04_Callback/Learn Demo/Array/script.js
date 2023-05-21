const ds_HV = [{
    name: "Hoàng Lê",
    status: 1
},
{
    name: "Duy Tùng",
    status: 0
},
{
    name: "Đức Nguyễn",
    status: 1
}, {
    name: "Đại Hồ",
    status: 0
},
]

// Sử dụng map tạo ra ds_HV_new với những HV đã nghỉ (tức status=0) thì thay đổi tên học viên đó thêm "tên + đã nghỉ"
let ds_HV_new = ds_HV.filter(member => member.status === 0).map(member => member.name + " đã nghỉ")
