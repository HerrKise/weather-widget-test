import { onMounted, ref } from "vue";
import {
    getWidgetConfig,
    setWidgetConfig
} from "@/services/localStorageService";
import { getCoordinates } from "@/components/utils/getCoordinates";
import cityConfigService from "@/services/cityConfigService";
import { useWeather } from "./useWeather";

export function useConfig() {
    const config = ref([]);
    const cities = ref([]);
    const isCitiesLoading = ref(true);
    const fetching = async () => {
        try {
            if (!getWidgetConfig() || getWidgetConfig().length === 0) {
                console.log("начали");
                const position = await getCoordinates();
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                cityConfigService.get(lat, lon).then((data) => {
                    config.value.push({
                        id: `id${Date.now()}`,
                        country: data[0].country,
                        name: data[0].name,
                        lat: data[0].lat,
                        lon: data[0].lon
                    });
                    setWidgetConfig(config.value);
                    for (const city of config.value) {
                        useWeather(city).then((cityWeather) =>
                            cities.value.push(cityWeather)
                        );
                    }
                });
            } else {
                config.value = getWidgetConfig();
                for (const city of config.value) {
                    useWeather(city).then((cityWeather) =>
                        cities.value.push(cityWeather)
                    );
                }
            }
            console.log("ljikj", config.value);
        } catch (error) {
            console.log(error);
        } finally {
            isCitiesLoading.value = false;
        }
    };
    onMounted(fetching);
    return {
        config,
        cities,
        isCitiesLoading
    };
}
