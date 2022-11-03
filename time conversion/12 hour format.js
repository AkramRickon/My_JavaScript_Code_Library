

//conver to 24 hour format 
let timeStr = "12:20am";
let time = timeStr.slice(0, 5);    // 05:30
let modifier = timeStr.slice(-2); //PM
let [hour, minute] = time.split(':');

if (modifier==='am' && hour === '12') {
    hour = '00';
}
if (modifier === 'pm') {
    hour = Number(hour) + 12;
}

console.log(`${hour}:${minute}`);

