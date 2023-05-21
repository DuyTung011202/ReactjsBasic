import React from 'react';

class Home extends React.Component {
 
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <button onClick={this.props.logOut}>Log Out</button>
            </div>
        );
    }   
}

export default Home;