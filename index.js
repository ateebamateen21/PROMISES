function prom(a) {
    return new Promise(function (resolve, reject) {
        if (a === true) {
            resolve(1);
        }
        else {
            reject(0);
        }
    });
}
prom(true)
    .then(function (a) {
    console.log(a);
})
    .catch(function (b) {
    console.log(b);
});
