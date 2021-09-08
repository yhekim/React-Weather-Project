//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import React from "react";


import HavaDurumu from "./component/HavaDurumu";


const App=()=> {










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





  return (
    <div className="App">
      <h1>Hava Durumu</h1>
      <HavaDurumu />
    </div>
  );
}

export default App;
