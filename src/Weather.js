import React from 'react';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weather: null
        }
    }


    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.pollWeather);
    }

    pollWeather = (location) =>{
        let url = 'http://api.openweathermap.org/data/2.5/weather?'
    }

}




export default Weather;