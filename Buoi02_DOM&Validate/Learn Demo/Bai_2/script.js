let tbody = document.querySelector("tbody")

for (let i = 1; i < 11; i++) {
    const tr = document.createElement("tr")
    tr.innerHTML += `
    <td>2</td> 
    <td>x${i}</td> 
    <td>${2 * i} </td>
    `
    tbody.append(tr)
}
