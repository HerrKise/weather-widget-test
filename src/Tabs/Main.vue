<template>
    <cities-list :cities="cities" />
</template>

<script>
import ToggleSettingsButton from "@/components/UI/ToggleSettingsButton.vue";
import { getWidgetConfig } from "@/services/localStorageService";
import CitiesList from "@/components/CitiesList.vue";
export default {
    components: { ToggleSettingsButton, CitiesList },
    props: {
        cities: {
            type: Array,
            required: true
        }
    },
    methods: {
        async loadCoordinates() {
            try {
                const responce = await axios
                    .get(
                        "http://api.openweathermap.org/geo/1.0/direct?q=Moskow&limit=5&appid=b033d0ae7c72d43ce6b8892b39ba72c9"
                    )
                    .then(({ data }) => {
                        console.log(data[0]);
                        (this.city.name = data[0].name),
                            (this.city.lat = data[0].lat),
                            (this.city.lon = data[0].lon);
                    });
                const weather = await axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${this.city.lat}&lon=${this.city.lon}&appid=b033d0ae7c72d43ce6b8892b39ba72c9`
                    )
                    .then(({ data }) => {
                        console.log(data.weather[0].icon);
                        this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                    });
            } catch (error) {
                alert(error);
            }
        }
    }
};
</script>

<style>
.widget__body__main {
    display: flex;
    flex-direction: row;
}

.widget__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.temperature {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
}

.widget__body__params {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
}

.param {
    font-size: 0.8rem;
    min-width: 85px;
    padding: 5px 0px;
}
.icon {
    width: 100%;
    height: 100%;
}
</style>
