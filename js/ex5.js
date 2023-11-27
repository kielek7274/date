function getSecondsFromNewYear() {
    let now = new Date();

    let currentYear = now.getFullYear();

    let beginningOfYear = new Date(currentYear, 0, 1, 0, 0, 0); // Note: months are 0-indexed in JavaScript

    let secondsFromNewYear = Math.floor((now - beginningOfYear) / 1000); // math.floor - static method always rounds down and returns the largest integer less than or equal to a given number. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

    return secondsFromNewYear;
}

const seconds = getSecondsFromNewYear();
console.log(`This much seconds have passed since beginning of the year: ${seconds}`);
