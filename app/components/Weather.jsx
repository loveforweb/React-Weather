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
        // const scope = this;
        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (errorMessage) => {
            this.setState({
                isLoading: false,
                errorMessage: errorMessage.message
            });
            console.log(errorMessage);
        });
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
                    <ErrorModal/>
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