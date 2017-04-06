import React from 'react';
import {Link, IndexLink} from 'react-router';

class Examples extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are a few examples to try</p>
                <ol>
                    <li>
                        <Link to="/?location=Birmingham">Birmingham</Link>
                    </li>
                    <li>
                        <Link to="/?location=Beford">Bedford</Link>
                    </li>
                    <li>
                        <Link to="/?location=Florida">Florida</Link>
                    </li>
                </ol>
            </div>
        )
    }
}

export default Examples;