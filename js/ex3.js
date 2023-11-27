function getMyBornDay(year, month, day){
    let birthDate = new Date(year, month - 1, day); 
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDaysIndex = birthDate.getDay();
    return weekDays[weekDaysIndex];
}


let birthDay = 27;
let birthMonth = 8;
let birthYear = 2006;

let myBirthday = getMyBornDay(birthDay, birthMonth, birthYear);
console.log(`I arrived to the world on ${myBirthday}`);

