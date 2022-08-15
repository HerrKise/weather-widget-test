import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI";
import {
    BIconList,
    BIconGear,
    BIconXLg,
    BIconTrash,
    BIconArrowReturnLeft
} from "bootstrap-icons-vue";

const app = createApp(App);

components.forEach((component) => app.component(component.name, component));

app.component("BIconList", BIconList)
    .component("BIconGear", BIconGear)
    .component("BIconXLg", BIconXLg)
    .component("BIconTrash", BIconTrash)
    .component("BIconArrowReturnLeft", BIconArrowReturnLeft)
    .mount("#app");
