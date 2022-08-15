import cityWeatherService from "@/services/cityWeatherService";
import { roundToDecimal } from "@/components/utils/roundToDecimal";
import { getWindName } from "@/components/utils/getWindName";
import { getWindDirection } from "@/components/utils/getWindDirection";

export async function useWeather(city) {
    let cityWeather;
    try {
        await cityWeatherService.get(city.lat, city.lon).then((data) => {
            console.log(data);
            cityWeather = {
                id: city.id,
                name: city.name,
                country: data.sys.country,
                icon: data.weather[0].icon,
                temp: roundToDecimal(data.main.temp),
                feels_like: roundToDecimal(data.main.feels_like),
                description: data.weather[0].description,
                wind_name: getWindName(data.wind.speed),
                wind_speed: roundToDecimal(data.wind.speed),
                wind_direction: getWindDirection(data.wind.deg),
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                visibility: data.visibility / 1000
            };
        });
        return cityWeather;
    } catch (error) {
        console.log(error);
    }
}
