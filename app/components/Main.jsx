import React from 'react';
import Nav from 'Nav';

class Main extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Nav/>
                <h2>Main component</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Main;