const HavaDurumu=(props)=>{
    
const {weather}=props;
console.log(props.weather)
    


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