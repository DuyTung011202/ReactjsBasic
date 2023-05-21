import React from 'react';

class StudentInfoComponent extends React.Component {

    render() {
        this.props.student.map(student => console.log(student))
        return <table className='table table-striped'>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.student.map(student => (<tr key={student.id}>
                        <th scope="row">{student.id}</th>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>))
                }

            </tbody>
        </table>
    }
}


export default StudentInfoComponent