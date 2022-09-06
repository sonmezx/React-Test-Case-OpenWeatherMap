import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import {BiRightArrow} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {validateApiKey, setKeyStore} from '../services/utils';

function SetApiKey() {
    const navigate = useNavigate()
    const location = useLocation()

    const [apiKey, setApiKey] = useState('')
    const [error, setError] = useState(false)
    

    const handleSubmit = async e => {
        e.preventDefault();
        const resp = await validateApiKey(apiKey);
        if (resp) {
            setKeyStore(apiKey);
            navigate(location.state?.return_url || '/')
        } else {
            setError(true)
        }
    }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center place-content-center mt-40">
        {error &&
            <div className="flex w-1/3 h-full bg-red-800 text-white p-4 rounded mb-5 justify-between">
                <div className="relative">
                    Lütfen geçerli bir api anahtarı giriniz.
                </div>
                <div className="px-4">
                    <button className="absolute flex text-center items-center justify-center" onClick={() => setError(false)}>
                        <AiOutlineClose fill='#fff' size={18} />
                    </button>
                </div>
            </div>
            
        }
        
        <form onSubmit={handleSubmit} className="relative block w-1/3">
            <input type="text" className="p-5 w-full rounded-full bg-secondary border text-white focus:border-blue-500 focus:outline-none focus:shadow-primary" placeholder="Enter API Key" onChange={e => setApiKey(e.target.value)} />
            {apiKey && 
                <button type="submit" className="absolute top-1 flex right-2 rounded-full w-14 h-14 text-center items-center justify-center bg-blue-600">
                    <BiRightArrow fill='#fff' size={30} />
                </button>
            }
            
            <div className="text-white mt-4">
                Devam etmek için lütfen <b>openweathermap.org</b> adresinden aldığınız api anahtarını giriniz.
            </div>
        </form>
        
    </div>
  )
}

export default SetApiKey