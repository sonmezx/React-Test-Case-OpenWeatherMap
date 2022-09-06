import React, {useState} from 'react'
import cities from '../../data/cities.json';
import TurkeyMaps from './TurkeyMaps';
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('cities');
  //const [search, setSearch] = useState('');
  return (
    <div className="my-5 text-white text-center">
      <div className="flex items-center justify-center text-3xl mb-3">Türkiye - İllere Göre Hava Durumu</div>
      <div className="flex flex-col items-center justify-center place-content-center">
        <div className="p-2 flex items-center justify-center gap-4 rounded-full bg-secondary mb-5">
          <button className={(tab === 'cities' ? `bg-blue-600 `: ``) + "p-2 rounded-full"} onClick={() => {setTab('cities')}}>Şehir Listesi</button>
          <button className={(tab === 'map' ? `bg-blue-600 `: ``) + "p-2 rounded-full"} onClick={() => {setTab('map');}}>Harita</button>
        </div>
      </div>
      <div className={(tab !== 'cities' ? 'hidden' : "justify-between mx-auto flex flex-wrap gap-y-3 gap-x-1 container")}>
        {cities.map(city => (
          <button onClick={() => navigate(`/city/${city.id}`)} href={`/city/${city.id}`} key={city.id} className="xl:w-72 lg:w-72 md:w-full sm:w-full w-full">
            <div className="bg-secondary p-4 rounded-full flex gap-3 items-center">
              <div className="flex rounded-full w-10 h-10 text-center items-center justify-center bg-blue-600">{city.id}</div>
              <div className="text-lg">{city.name}</div>
            </div>
          </button>
        ))}
      </div>

      <div className={(tab !== 'map' ? 'hidden' : '')}>
        <TurkeyMaps />
      </div>
        
    </div>
  )
}

export default Home