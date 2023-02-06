import React from "react";

const Card= ({loading,showdata,weather,forecast}) =>{
    var today= new Date();
    var day= today.getDate();
    var month=  today.getMonth();
    var year= today.getFullYear();
    var url='http://openweathermap.org/img/w/'
    var icono='';
    var date= day+'/'+month+'/'+year

    
    return(
        <div className="mt-5">{
            showdata === true ? (
        
            <div className="container">
                <div className="card mb-3 mx-auto bg-dark text-light">
                    <div className="row g-0">
                        <div className=" col -md-4">
                            
                            <p className="card-desc"></p>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1stEXLdrZp3Eiw4mQeyiT6HNoCPkEOy1_Q&usqp=CAU' className="card-img-top" alt="..."/>

            
                        </div>
                        <div className="col -mb-8">
                            <div className="card-body text-start mt-2">
                            <h3> {weather.name}</h3>
                            <p className="card-date">{date}</p>
                            <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}C</h1>
                            <br></br>
                            <h6>{weather.weather[0].description}</h6>
                            <h6 className="card-text">Humedad: {weather.main.humidity}%</h6>
                            <h6 className="card-text">Velocidad del viento: {weather.wind.speed}m/s</h6>
                            <img src={url+weather.weather[0].icon+'.png'} className="bi bi-2-circle-fill" alt="..."/>
                            </div>
            
                        </div>
                    </div>
            
                </div>
            
            
            </div>
            
            ):(
            <h2 className="texto-light">Sin datos</h2>
            )
            }
            </div>

    );

}
export default Card;