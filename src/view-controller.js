import renderBanner from "./banner";
import renderInput from "./weather-input";
import renderOutput from "./weather-output";
import renderFooter from "./footer";
import WeatherAPI from "./weather-api";

class ViewController {

    constructor() {
        this.$container = document.body;
        this.init();
        this.api = WeatherAPI;
        this.api.getWeather("London, US").then((resolve) => console.log(resolve));
    }

    init() {
        this.$container.appendChild(renderBanner());

        const $main = document.createElement("div");
        $main.className = "main";
        
        $main.appendChild(renderInput());
        $main.appendChild(renderOutput());
        
        this.$container.appendChild($main);
        this.$container.appendChild(renderFooter());
    }
}

export default ViewController;