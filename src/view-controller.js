import renderBanner from "./banner";
import renderInput from "./weather-input";
import renderOutput from "./weather-output";
import renderFooter from "./footer";
import WeatherAPI from "./weather-api";

class ViewController {

    constructor() {
        this.$container = document.body;
        this.init();

        this.$form = this.$container.querySelector("form");
        this.$input = this.$container.querySelector(".location-form");
        this.$feedback = document.querySelector(".feedback");
        this.$output;

        this.api = new WeatherAPI();
        this.api.getWeather("London, US").then((resolve) => console.log(resolve));
    }

    init() {
        this.$container.appendChild(renderBanner());

        const $main = document.createElement("div");
        $main.className = "main";
        
        $main.appendChild(renderInput());

        this.$output = renderOutput();
        $main.appendChild(this.$output);
        
        this.$container.appendChild($main);
        this.$container.appendChild(renderFooter());

        const form = document.querySelector("form");
        form.onsubmit = this.handleFormSubmit;
    }

    renderNotFound() {
        this.$feedback.textContent = "Location not found. Please try again";
    }

    clearNotFound() {
        this.$feedback.textContent = ""; 
    }

    handleFormSubmit = e => {
        // Prevent form submission
        e.preventDefault();
        this.triggerSearch(this.$input.value);
    }

    async triggerSearch(location) {
        const response = this.api.getWeather(location);
        response.then((result) => {
            if (result) {
                this.$output.innerHTML = renderOutput(result).innerHTML;
                this.clearNotFound();
            } else {
                this.renderNotFound();
            }
        });
        response.catch((error) => console.log(error));

    //     try {
    //         const result = await this.api.getWeather(location);
    //         this.$output.innerHTML = renderOutput(result).innerHTML;
    //     } catch (error) {
    //         console.log(error);
    //         console.log("Hey team");
    //     }
    // }
    }
}

export default ViewController;