/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function makeItSleep(timeInSec){
    return new Promise(function(resolve){
        setTimeout(resolve,timeInSec)
    })
}


async function sleep(milliseconds) {
    await makeItSleep(milliseconds);
}

module.exports = sleep;
