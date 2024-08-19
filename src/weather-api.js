class WeatherAPI {

    constructor() {
        this.API_KEY = "52XZCWBLFZRJCBEUNVBP7BSBH";
        this.BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
        this.keys = [
            "conditions", 
            "datetime",
            "temp",
            "feelslike",
            "winddir",
            "windspeed",
            "humidity",
            "icon",
        ]
    }

    async getWeather(location) {

        const url = `${this.BASE_URL}${location}?unitGroup=metric&include=current&key=${this.API_KEY}&contentType=json`;

        try {
            const response = await fetch(url, {mode: "cors"});
            if (!response.ok) {
                throw new Error(`HTTP error code ${response.status}`)
            }
            const data = await response.json();
            const packagedData = this.weatherParser(data);
            return packagedData;
        } catch(error) {
            console.log(error);
            return false
        }
    }

    weatherParser(data) {
        const conditionData = data.currentConditions;
        const output = this.keys.reduce((acc, key) => {
            if (Object.prototype.hasOwnProperty.call(conditionData, key)) {
                acc[key] = conditionData[key];
            };
            return acc;
        }, {});
        console.log(data);
        output.address = data.resolvedAddress;
        output.date = data.days["0"].datetime;
        return output;
    }
}

export default WeatherAPI;