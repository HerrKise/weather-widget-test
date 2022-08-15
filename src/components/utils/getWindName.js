export function getWindName(speed) {
    if (speed <= 1) {
        return "Calm";
    } else if (speed > 1 && speed <= 2) {
        return "Light Air";
    } else if (speed > 2 && speed <= 3) {
        return "Light breeze";
    } else if (speed > 3 && speed <= 4) {
        return "Gentle breeze";
    } else if (speed > 4 && speed <= 5) {
        return "Moderate breeze";
    } else if (speed > 5 && speed <= 6) {
        return "Fresh breeze";
    } else if (speed > 6 && speed <= 7) {
        return "Strong breeze";
    } else if (speed > 7 && speed <= 8) {
        return "Moderate gale";
    } else if (speed > 8 && speed <= 9) {
        return "Fresh gale";
    } else if (speed > 9 && speed <= 10) {
        return "Strong gale";
    } else if (speed > 10 && speed <= 11) {
        return "Storm";
    } else if (speed > 11 && speed <= 12) {
        return "Violent storm";
    } else {
        return "Hurricane";
    }
}
