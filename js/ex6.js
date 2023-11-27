function getSecondsToNewYear() {
    let now1 = new Date();

    let currentYear = now1.getFullYear();

    let nextYear = currentYear + 1;
    let beginningOfNextYear = new Date(nextYear, 0, 1, 0, 0, 0);

    let secondsToNewYear = Math.floor((beginningOfNextYear - now1) / 1000);

    return secondsToNewYear;
}

let secondsTilEnd = getSecondsToNewYear();
console.log(`Seconds 'til the last second of the year: ${secondsTilEnd}`);
