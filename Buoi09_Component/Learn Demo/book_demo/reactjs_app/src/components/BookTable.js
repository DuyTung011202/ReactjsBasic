function BookTable(props) {
    const { booklist, render, get_value, choose_book } = props
    function xoa_sach(e, id) {
        const index = booklist.findIndex(item => item.id === id)
        booklist.splice(index, 1)
        render()
    }
    function sua_sach(e, item) {
        get_value(item)
    }
    return <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {booklist.map(item =>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.author}</td>
                    <td>
                        <button onClick={(e) => { sua_sach(e, item) }} className={(choose_book.id == item.id) ? 'btn btn-primary' : 'btn btn-info'}>Sửa</button>
                        <button onClick={(e) => { xoa_sach(e, item.id) }} className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
}

export default BookTable