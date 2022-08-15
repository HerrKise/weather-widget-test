<template>
    <div v-if="cities.length > 0">
        <city-item v-for="city in cities" :key="city.id" :city="city" />
    </div>
</template>

<script>
import CityItem from "./CityItem.vue";
export default {
    props: {
        cities: {
            type: Array,
            required: true
        }
    },
    components: { CityItem }
};
</script>

<style></style>
