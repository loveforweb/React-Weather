import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        // getIntialState
        this.state = {
            isLoading: false,
            errorMessage: undefined
        }
    }

    handleSearch(location) {
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (e) => {
            this.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    }

    componentDidMount() {
        let location = this.props.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    componentWillReceiveProps(newProps) {
        let location = newProps.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    render() {
        // ES6 destructuring
        let {location, temp, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Weather</h1>
                <WeatherForm onSearch={this.handleSearch.bind(this)}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
}



export default Weather;