import React from 'react';
import {BiLeftArrowAlt} from 'react-icons/bi';
import cities from '../../../data/cities.json';
import {useNavigate} from 'react-router-dom';

function Header({selected}) {
    const navigate = useNavigate();
  return (
    <>
        <div className="flex justify-between bg-secondary p-4 px-8 text-white">
            <button className="flex gap-x-2 justify-center items-center" onClick={() => navigate(-1)}>
                <BiLeftArrowAlt size={24} />
                Geri Dön
            </button>
            <div>
                <select className="bg-primary text-white rounded p-2 w-52" onChange={(e) => navigate(`/city/${e.target.value}`)}>
                    {cities.map(city => (
                        <option key={city.id} selected={city.id == selected ?  true : false} value={city.id}>{city.name}</option>
                    ))}
                </select>
            </div>
        </div>
    </>
  )
}

export default Header