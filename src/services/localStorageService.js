const WIDGET_CONFIG = "widget-config";

export function setWidgetConfig(config) {
    localStorage.setItem(WIDGET_CONFIG, JSON.stringify(config));
}

export function getWidgetConfig() {
    return JSON.parse(localStorage.getItem(WIDGET_CONFIG));
}
