import { format } from "date-fns";

function formatDate(date) {
    return format(date, "do LLLL");
}

function degreeToDirection(degree) {

    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const interval = 360/directions.length;
    console.log(interval);
    const index = Math.floor((degree + 22.5)/interval);
    return directions[index] ? directions[index]:"N";
}

export { formatDate, degreeToDirection };