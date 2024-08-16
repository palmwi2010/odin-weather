class WeatherAPI {

    static API_KEY = "52XZCWBLFZRJCBEUNVBP7BSBH";
    static BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

    static async getWeather(location) {

        const url = `${WeatherAPI.BASE_URL}${location}?unitGroup=metric&include=current&key=${WeatherAPI.API_KEY}&contentType=json`;

        try {
            const response = await fetch(url, {mode: "cors"});
            if (!response.ok) {
                throw new Error(`HTTP error code ${response.status}`)
            }
            const data = await response.json();
            const packagedData = WeatherAPI.weatherParser(data);
            return packagedData;
        } catch(error) {
            console.log(error);
        }
    }

    static weatherParser(data) {

        const keys = [
            "conditions", 
            "datetime",
            "temp",
            "feelsLike",
            "winddir",
            "windspeed",
            "humidity",
            "icon",
        ]

        console.log(data);
        const conditionData = data.currentConditions;
        console.log(conditionData);

        const output = keys.reduce((acc, key) => {
            if (Object.prototype.hasOwnProperty.call(conditionData, key)) {
                acc[key] = conditionData[key];
            };
            return acc;
        }, {});
        output.address = data.resolvedAddress;
        return output;
    }
}

export default WeatherAPI;