import React from 'react';

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onFormSubmit(e) {
        e.preventDefault();

        let location = this.refs.location.value;

        if(location.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div>
                        <input type="text" placeholder="Enter city name" ref="location"/>
                    </div>
                    <div>
                        <button className="button">Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default WeatherForm;