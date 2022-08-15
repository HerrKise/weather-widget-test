<template>
    <div>
        <div class="settings__header">
            <h2>Settings</h2>
        </div>

        <div class="settings_body">
            <div
                v-for="city in cities"
                class="city__settings"
                :key="city.id"
                :id="city.id"
                draggable="false"
                @dragover.prevent="toDragOver"
                @dragenter.prevent
                @drop.prevent="onDrop($event)"
            >
                <div class="city__name">
                    <button class="city__button">
                        <b-icon-list
                            class="icon"
                            @mousedown="toDrag(city.id)"
                            @mouseup="toStopDrag(city.id)"
                        />
                    </button>
                    <div style="margin-left: 5px">
                        {{ city.name }}, {{ city.country }}
                    </div>
                </div>
                <button @click="$emit('remove', city)" class="city__button">
                    <b-icon-trash class="icon" />
                </button>
            </div>
        </div>

        <label for="location"><h3>Add Location:</h3></label>
        <div style="display: flex">
            <input
                id="location"
                class="input"
                v-model="searchQuery"
                @keyup.enter="upload"
            />
            <button @click="upload" class="enter">
                <b-icon-arrow-return-left class="icon" />
            </button>
        </div>
        <div
            v-if="errorMessage.length !== 0 && searchQuery.length === 0"
            style="color: red"
        >
            {{ errorMessage }}
        </div>
    </div>
</template>

<script>
import ToggleSettingsButton from "@/components/UI/ToggleSettingsButton.vue";
import { useUploadCity } from "@/hooks/useUploadCity";
export default {
    components: { ToggleSettingsButton },
    props: {
        cities: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            searchQuery: "",
            draggable: false,
            errorMessage: "",
            city: {
                name: "",
                country: ""
            }
        };
    },
    methods: {
        toDrag(id) {
            document.querySelector(`#${id}`).setAttribute("draggable", true);
            document.querySelector(`#${id}`).classList.add("selected");
        },
        onDrop(evt) {
            const activeElement = document.querySelector(".selected");
            const elementOnTarget = evt.currentTarget;
            const isMoveable =
                activeElement !== elementOnTarget &&
                elementOnTarget.classList.contains(`city__settings`);
            if (!isMoveable) {
                return;
            } else {
                this.$emit("reorder", activeElement.id, elementOnTarget.id);
                activeElement.classList.remove("selected");
                activeElement.setAttribute("draggable", false);
            }
            console.log(evt.currentTarget);
        },
        async upload() {
            this.errorMessage = "";
            await useUploadCity(this.searchQuery)
                .then((data) => {
                    if (typeof data === "string") {
                        throw data;
                    }
                    this.$emit("create", data);
                })
                .catch((error) => {
                    this.errorMessage = error;
                })
                .finally(() => (this.searchQuery = ""));
        }
    }
};
</script>

<style>
.icon {
    width: 100%;
    height: 100%;
}
.settings__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.input {
    width: 100%;
    border: 2px solid deepskyblue;
    padding: 10px 15px;
    border-radius: 5px;
}
.city {
    display: flex;
    justify-content: space-between;
}
.city__settings {
    display: flex;
    align-items: center;
    background: lightgray;
    height: 40px;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 15px;
}
.city__name {
    display: flex;
}
.enter {
    display: flex;
    background: white;
    width: 30px;
    border: none;
}
.city__button {
    display: flex;
    margin: 0px 5px;
    width: 20px;
    border: none;
    background: inherit;
}
</style>
