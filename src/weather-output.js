import tempImg from "./assets/weather/thermometer.svg"
import windImg from "./assets/weather/wind.svg";
import humidityImg from "./assets/weather/humidity.svg"

function render() {
    // Elements
    const $container = document.createElement("div");
    const $header = document.createElement("h1");
    const $descriptor = document.createElement("p");
    const $weatherContainer = document.createElement("div");
    const $leftContainer = document.createElement("div");
    const $img = document.createElement("img");

    // Class names
    $container.className = "output-div";
    $header.className = "location-header";
    $descriptor.className = "location-descriptor";
    $weatherContainer.className = "weather-main";
    $leftContainer.className = "weather-left"
    $img.className = "weather-img";

    // Content
    $header.textContent = "London, UK";
    $descriptor.textContent = "Current weather at 10:00 16th August in London UK"
    $img.src = "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg";


    const tempItem = {
        src: tempImg,
        alt: "Temperature",
        title: "Temperature",
        big: "32\u00B0C", 
        label: "Feels like: 32\u00B0C"
    };

    const windItem = {
        src: windImg,
        alt: "Wind",
        title: "Wind",
        big: "6 mph", 
        label: "Direction: SW"
    };

    const humidityItem = {
        src: humidityImg,
        alt: "Humidity",
        title: "Humidity",
        big: "67%", 
        label: "Current humidity"
    };

    // Appends
    $container.appendChild($header);
    $container.appendChild($descriptor);
    
    $leftContainer.appendChild(makeOutputCategory(tempItem));
    $leftContainer.appendChild(makeOutputCategory(windItem));
    $leftContainer.appendChild(makeOutputCategory(humidityItem));

    $weatherContainer.appendChild($leftContainer);
    $weatherContainer.appendChild($img);

    $container.appendChild($weatherContainer);

    return $container;
}

const makeOutputCategory = (obj) => {

    const $container = document.createElement('div');
    const $textContainer = document.createElement('div');
    const $icon = document.createElement('img');
    const $big = document.createElement("p");
    const $label = document.createElement("p");

    $container.className = 'category';
    $icon.className = 'cat-icon';
    $big.className = "big";
    $label.className = "big-label";

    // Assign object fields
    $icon.src = obj.src;
    $icon.alt = obj.alt;
    $icon.title = obj.title;
    $big.textContent = obj.big;
    $label.textContent = obj.label;

    $textContainer.appendChild($big)
    $textContainer.appendChild($label)

    $container.appendChild($icon);
    $container.appendChild($textContainer);

    return $container;
}

export default render;