let hour = 10

let time = (hour >= 0 && hour <= 11) 
    ? "Good morning"
    : (hour >= 12 && hour <= 16) 
        ? "Good afternoon"
        : "Good evening";

console.log(time);
