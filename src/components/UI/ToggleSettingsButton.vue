<template>
    <button class="settings__btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "toggle-settings-button"
};
</script>

<style>
.settings__btn {
    display: flex;
    width: 25px;
    border: none;
    background: white;
}
</style>
