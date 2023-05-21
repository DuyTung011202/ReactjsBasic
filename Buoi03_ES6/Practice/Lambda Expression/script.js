let kids = [
    { id: 1, name: "a", age: 3 },
    { id: 2, name: "b", age: 2 },
    { id: 3, name: "c", age: 7 },
    { id: 4, name: "d", age: 4 },
    { id: 5, name: "e", age: 8 }
]
const mau_giao = kids.filter(kid => kid.age < 6).map(kid => ({ id: kid.id, name: kid.name }))
const tieu_hoc = kids.filter(kid => kid.age > 5 && kid.age < 11).map(kid => ({ id: kid.id, name: kid.name }))
// console.log(mau_giao)
console.log(tieu_hoc)