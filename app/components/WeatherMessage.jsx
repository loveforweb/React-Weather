import React from 'react';

class WeatherMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {location, temp} = this.props;

        return (
            <div>
                <h3>it is {temp} in {location}</h3>
            </div>
        )
    }
}

export default WeatherMessage;