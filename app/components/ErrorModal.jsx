import React from 'react';

class ErrorModal extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let model = new Foundation.Reveal($('#error-modal'));
        model.open();
    }

    render() {
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h1>Some title</h1>
                <p className="lead">error</p>
                <button className="button" data-close="">OK</button>
            </div>
        )
    }
}

ErrorModal.defaultProps = {
    title: 'Error'
}

export default ErrorModal;