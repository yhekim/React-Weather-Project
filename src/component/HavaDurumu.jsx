import React,{useEffect,useState} from "react";
import { usePosition } from "use-position";
import axios from "axios";

const HavaDurumu=()=>{
    
const [weather,setWeather]=useState("");

 const getWeatherData=(lat,lon)=>{
     axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
    .then(response=>setWeather(response.data))
.catch(err=>console.log(err))
}



const key=process.env.REACT_APP_WEATHER_KEY;

const lang=navigator.language.split("-")[0];
const {latitude,longitude}=usePosition();

useEffect(()=>{


    latitude && longitude && getWeatherData(latitude,longitude);
    
      },[latitude,longitude])

if(weather===""){
    return <h2>Loading...</h2>
}

    return(
        <div>
           <h2>Şehir Hava Durumu Bilgileri</h2>
            <br/>
              <h3>Şehir : {weather.name} </h3>
           <h4>Hava Durum Bilgisi : {weather.weather.map((data)=>data.description).join(",")}</h4>
            <h4>Sıcaklık : {weather.main.temp} C</h4>
            <h4>Tarih : {new Date(weather.dt*1000).toLocaleDateString()}</h4> 
        </div>

    )
}
 
    

export default HavaDurumu;