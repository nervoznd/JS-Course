function callbackFunction(callback, ...args) {
    setTimeout(() => {
        if (args.length) {
            callback(null, args);
        }
        else {
            callback(new Error("Missing arguments"));
        }
    }, 1000);
}

function promisify(callbackBasedFunction) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            callbackBasedFunction((error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, ...args);
        });
    };
}

const newFunction = promisify(callbackFunction)

newFunction('Hello', 'World')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });