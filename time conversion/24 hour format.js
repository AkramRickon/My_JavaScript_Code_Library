
let timeStr = '00:30';
let [hour, minute] = timeStr.split(':');
modifier = hour >= 12 ? 'pm' : 'am';
hour = hour % 12 || 12;
console.log(`${hour}:${minute}${modifier}`)

