function prom(a: any) {
    return new Promise<number>((resolve, reject) => {
        if (a === true) {
            resolve(1);
        } else {
            reject(0);
        }
    });
}

prom(true)
    .then((a) => {
        console.log(a);
    })
    .catch((b) => {
        console.log(b);
    });