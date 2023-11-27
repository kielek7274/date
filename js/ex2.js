function getWeeklyDay(year, month, day){
    let date = new Date(year, month - 1, day); 
    let daysSpanish = [ "lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];
    let dayOfWeekInSpanish = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date); // enables language-sensitive date and time formatting (I have read it [partially]) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
    return dayOfWeekInSpanish;
} 

let year = 2023;
let month = 11;
let day = 27;

let result = getWeeklyDay(year, month, day);
console.log(`The day of the week for ${year}-${month}-${day} is: ${result}`); 