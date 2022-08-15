<template>
    <div class="widget__city">
        <div class="widget__header">
            <h3>{{ city.name }}</h3>
        </div>
        <div class="widget__body__main">
            <img
                :src="`http://openweathermap.org/img/wn/${city.icon}@2x.png`"
            />
            <div class="temperature">
                <h1>{{ city.temp }} &deg;C</h1>
            </div>
        </div>
        <div class="widget__body__information">
            <span
                >Feels like {{ city.feels_like }} &deg;C,
                {{ city.description }}. </span
            ><span>{{ city.wind_name }}.</span>
        </div>
        <div class="widget__body__params">
            <div class="param">
                {{ city.wind_speed }} m/s {{ city.wind_direction }}
            </div>
            <div class="param">{{ city.pressure }}hPa</div>
            <div class="param">Humidity: {{ city.humidity }}%</div>
            <div class="param">Visibility {{ city.visibility }} km</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        city: {
            type: Object,
            required: true
        }
    }
};
</script>

<style>
.widget__city {
    margin-bottom: 30px;
}
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
