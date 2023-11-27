function getLastDayOfMonth(year, month) {
    let firstDayOfMonth = new Date(year, month - 1, 1); 

    firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() - 1);

    let lastDayOfPreviousMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0);

    return lastDayOfPreviousMonth.getDate();
}

let currentYear = 2023;
let currentMonth = 11;

let lastDayOfPreviousMonth = getLastDayOfMonth(currentYear, currentMonth);
console.log(`Last day month ago was: ${lastDayOfPreviousMonth}`);
