import 'weather-react-icons/lib/css/weather-icons.css';
import classNames from 'classnames';
import {WeatherIcon} from "weather-react-icons";

function Icon({id}) {
  return (
    <WeatherIcon name="owm" iconId={id} className={classNames({
      "text-7xl": true,
      "text-yellow-300": id === 800,
      "text-blue-300": id === 500,
      "text-red-300": id === 801,
      "text-red-400": id === 802,
      "text-blue-400": id === 803,
      "text-indigo-400": id === 804,
    })} />
  )
}

export default Icon