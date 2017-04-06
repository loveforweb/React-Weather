import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let {title, message} = this.props;
        let modalMarkup =  (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h1>{title}</h1>
                <p className="lead">{message}</p>
                <button className="button" data-close="">OK</button>
            </div>
        )

        let $model = $(ReactDOMServer.renderToString(modalMarkup));

        $(ReactDOM.findDOMNode(this)).html($model);

        let model = new Foundation.Reveal($('#error-modal'));
        model.open();
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

ErrorModal.defaultProps = {
    title: 'Error'
}

ErrorModal.propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
}

export default ErrorModal;