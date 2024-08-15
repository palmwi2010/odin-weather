import "./styles.css";
import renderBanner from "./banner";
import renderInput from "./weather-input";
import renderOutput from "./weather-output";
import renderFooter from "./footer";
import WeatherAPI from "./weather-api";

document.body.appendChild(renderBanner());
document.body.appendChild(renderInput());
document.body.appendChild(renderOutput());
document.body.appendChild(renderFooter());



const weather = WeatherAPI.getWeather("London");

//weather.then((response) => 