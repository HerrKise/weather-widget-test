import httpService from "./httpService";
import configFile from "@/services/config.json";

const cityWeatherEndpoint = "data/2.5/weather?";

const cityWeatherService = {
    get: async (lat, lon) => {
        const { data } = await httpService.get(
            cityWeatherEndpoint +
                `lat=${lat}&lon=${lon}&appid=${configFile.appId}&units=metric`
        );
        return data;
    }
};

export default cityWeatherService;
