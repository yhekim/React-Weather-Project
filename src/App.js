//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { usePosition } from "use-position";
import HavaDurumu from "./component/HavaDurumu";


const App=()=> {

  const [weather,setWeather]=useState({});

const key=process.env.REACT_APP_WEATHER_KEY;

const lang=navigator.language.split("-")[0];


const {latitude,longitude}=usePosition();

  const getWeatherData=(lat,lon)=>{
     axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
    .then(response=>setWeather(response.data))
     .catch(err=>console.log(err))
 }

//   const getWeather=(lat,lon)=>{
//     async const key=process.env.REACT_APP_WEATHER_KEY;
//      try {
//        const {data}=await axios.get(
//          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
//       );
//        setWeather(data);
//     } 
//     catch  {
//       alert("Veri alınırken hata oluştu.");
      
//     }

useEffect(()=>{


latitude && longitude && getWeatherData(latitude,longitude);

  },[latitude,longitude])



  return (
    <div className="App">
      <h1>Hava Durumu</h1>
      <HavaDurumu weather={weather}/>
    </div>
  );
}

export default App;
