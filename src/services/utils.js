import axios from "axios";
import store from "../stores";
import { setKey } from "../stores/api";


export const setKeyStore = (apiKey) => {
    store.dispatch(setKey(apiKey));
}

export const validateApiKey = async apiKey => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=${apiKey}&units=metric&lang=tr`);
    return response.status !== 401;
}

export const getCityWeather = async (lat, lot) => {
    //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${store.getState().api.key}&units=metric&lang=tr`);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${store.getState().api.key}&units=metric&lang=tr&exclude=minutely`);
    return response;
}
