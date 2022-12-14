import httpService from "./httpService";
import configFile from "@/services/config.json";

const cityConfigEndpoint = "geo/1.0/reverse?";

const cityConfigService = {
    get: async (lat, lon) => {
        const { data } = await httpService.get(
            cityConfigEndpoint +
                `lat=${lat}&lon=${lon}&appid=${configFile.appId}`
        );
        return data;
    }
};

export default cityConfigService;
