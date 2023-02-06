import React, {useState} from "react";
import Form from './Form.js';
import Card from "./Card.js";

const WeatherPanel=() =>{
    let url="https://api.openweathermap.org/data/2.5/weather?appid=1dce054c548b1f4c4ac60eb7248a4296&lang=es"

    let cityurl="&q=";
    let urlForecast="https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=1dce054c548b1f4c4ac60eb7248a4296&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast,setForecast]= useState([]);
    const [loading,setLoading]= useState([]);
    const [show,setShow]= useState([]);
    const [location, setLocation]= useState([]);

    const getLocation = async(loc)=>{
        setLoading(true);
        setLocation(loc);
        
        url= url + cityurl + loc;

        await fetch(url).then((response)=>{
            if(!response.ok)throw {response}
            return response.json();
        }).then((weatherData)=> {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error=>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });


        urlForecast= urlForecast + cityurl + loc;
        
        await fetch(urlForecast).then((response)=>{
            if(!response.ok)throw {response}
            return response.json();
        }).then((ForecastData)=> {
            console.log(ForecastData);
            setForecast(ForecastData);

            setLoading(false);
            setShow(true);

        }).catch(error=>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }
    return(
        <React.Fragment>
            <Form
            newLocation = {getLocation}
            
            
            />
            <Card
                showdata= {show}
                loading={loading}
                weather={weather}
                forecast={forecast}
            
            
            />

            

        </React.Fragment>
    );
}




export default WeatherPanel;