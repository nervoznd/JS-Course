function delayedNum(current, max) {
    if (current <= max) {
        console.log(current);
        setTimeout(() => {
            delayedNum(current + 1, max);
        }, 1000);
    }
}

function run() {
    return new Promise((resolve) => {
        delayedNum(1, 10);
        resolve();
    })
}