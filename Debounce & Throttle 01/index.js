document.addEventListener('scroll', debounce((events) => {
    console.log(events);
}, 1000));

function debounce(func, delay = 1000) {
    let timeId;
    return function (...args) {
        if (timeId) {
            clearTimeout(timeId);
        }
        timeId = setTimeout(() => {
            func(...args);
        }, delay)
    }
}

document.addEventListener('mouseover', throttle((events) => {
    console.log(events);
}, 1000));

function throttle(func, delay = 1000) {
    let pastTime = 0;
    return function (...args) {
        let currentTime = new Date().getTime();
        if (currentTime - pastTime < delay) {
            return;
        }
        setTimeout(() => {
            func(...args);
        }, delay)
        pastTime = currentTime;
    }
}