import {useParams} from 'react-router-dom';
import cities from '../../data/cities.json';
import {useState, useEffect} from 'react';
import { getCityWeather } from 'services/utils';
import Header from './components/Header';
import Icon from './components/Icon';
import {BiUpArrowAlt, BiDownArrowAlt} from 'react-icons/bi';
import {WiHumidity, WiBarometer, WiStrongWind, WiDirectionRight} from 'react-icons/wi';

function City() {
  const param = useParams();

  const latitude = cities.filter(city => city.id == param.cityId).map(city => city.latitude)
  const longitude = cities.filter(city => city.id == param.cityId).map(city => city.longitude)
  const cityName = cities.filter(city => city.id == param.cityId).map(city => city.name)

  const [weather, setWeather] = useState(null);
  console.log(latitude, longitude);

  useEffect(() => {
    getCityWeather(latitude, longitude).then(response => {
      setWeather(response.data);
    })
  }, [param.cityId]);
  console.log(weather);
  
  return (
    <>
      <Header selected={param.cityId} />
      {weather &&(
        <div className="text-white xl:w-2/5 sm:w-full mx-auto py-5">

        <div className="container mx-auto rounded-lg bg-secondary py-4">
          <div>Anlık Hava Durumu</div>
          <div className="md:flex justify-between sm:grid">
            <div className="flex items-center">
              <div className="flex flex-col gap-4">
                <div className="text-md">{cityName}</div>

                <div className="flex gap-x-3">
                  <Icon id={weather.weather && weather.weather[0].id} />
                  <div className="text-6xl">{weather.main && Math.round(weather.main.temp)}</div>
                  <div className="text-2xl"><sup>o</sup>C</div>
                </div>
                <div>{weather.weather && weather.weather[0].description}</div>
              </div>
              
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex flex-col gap-3">
                  <div>Hissedilen: {weather.main.feels_like} <sup>o</sup>C</div>
                  <div className="flex gap-x-3 items-center text-sm"><BiUpArrowAlt /> {weather.main.temp_max} <BiDownArrowAlt /> {weather.main.temp_min} </div>
                  <div className="flex items-center gap-x-3 text-sm"> <WiHumidity />Nem: {weather.main.humidity}</div>
                  <div className="flex items-center gap-x-3 text-sm"> <WiBarometer />Basınç: {weather.main.pressure} hPa</div>
                  <div className="flex items-center gap-x-3 text-sm"> <WiStrongWind />Rüzgar: <WiDirectionRight size={30} style={{transform: `rotate(${weather.wind.deg + 90}deg)`}} />{weather.wind.speed} </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>

      </div>
      )}
    </>
    
  )
}

export default City