import React from "react"

function FormSach(props) {
    // const booklist = props.booklist
    // const render = props.render
    const { booklist, render } = props
    var { value } = props
    function submit_sach(e) {
        e.preventDefault()
        if (value.id === undefined) {
            booklist.push({
                id: Math.floor(Math.random() * 10000),
                name: value.name,
                author: value.author,
            })
        } else {
            const index = booklist.findIndex(item => item.id === value.id)
            booklist[index].name = value.name
            booklist[index].author = value.author
            delete value.id
        }
        value.name = ""
        value.author = ""
        render()
    }
    function handleChange(e) {
        if (e.target.name == "name")
            value.name = e.target.value
        else if (e.target.name == "author")
            value.author = e.target.value
        render()
    }
    if (!("name" in value)) value.name = ""
    if (!("author" in value)) value.author = ""
    return <form onSubmit={submit_sach}>
        <div className="row">
            <div className="col">
                <input id="name" value={value.name} onChange={handleChange} type="text" className="form-control" placeholder="Tên sách" name="name" />
            </div>
            <div className="col">
                <input id="author" value={value.author} onChange={handleChange} type="text" className="form-control" placeholder="Tác giả" name="author" />
            </div>
            <div className="col">
                <button type="submit" className="btn btn-primary">{(value.id == undefined) ? "Thêm sách" : "Sửa sách"}</button>
            </div>
        </div>
    </form>
}

export default FormSach