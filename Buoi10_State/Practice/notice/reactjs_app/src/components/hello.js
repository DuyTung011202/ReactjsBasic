import React from 'react';

class Hello extends React.Component {
   componentWillUnmount() {
    alert("This component will be unmounted")
   }
    render() {
        return(
                <div>
                    <h1>Hello World</h1>
                </div>
            )
        }
            
}

export default Hello;