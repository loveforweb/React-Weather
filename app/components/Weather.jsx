import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        // getIntialState
        this.state = {
            isLoading: false
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
                isLoading: false
            });
            console.log(errorMessage);
        });
    }

    render() {
        // ES6 destructuring
        let {location, temp, isLoading} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch.bind(this)}/>
                {renderMessage()}
            </div>
        )
    }
}



export default Weather;