function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}


function findBinomDist(data) {
    let n = data.n; // n
    let p = data.p; // successful events
    let x = data.x; // prob of getting a boy
    let q = data.q; // prob of not getting a boy

    let denominator = factorial(n - p) * factorial(p);
    let combination = (factorial(n)) / denominator;
    let pX = Math.pow(x, p);
    let qX = Math.pow(q, n - p);

    let result = (combination * pX * qX);

    return Number(result);
}

function binomialDist() {
    let childrenNumber = 6; // n
    let allBoys = 3; // successful events
    let probOfABoy = 1.09 / 2.09; // prob of getting a boy
    let probOfAGirl = 1 / 2.09; // prob of not getting a boy
    let res = 0;
    for (let i = 3; i <= 6; i++) {
        res += findBinomDist({n: childrenNumber, p: i, q: probOfAGirl, x: probOfABoy});
    }
    console.log(res.toFixed(3));
    return res;
}

function binomDist2() {
    let data = {
        n: 10,
        p: 1,
        x: 0.12,
        q: 0.88
    };
    let noMoreThanTwoRejects = 0;
    for (let i = 0; i <= 2; i++) {
        data.p = i;
        noMoreThanTwoRejects += findBinomDist(data);
    }

    let atLeastTwoReject = 0;
    for (let i = 2; i <= 10; i++) {
        data.p = i;
        atLeastTwoReject += findBinomDist(data);
    }
    console.log(noMoreThanTwoRejects.toFixed(3));
    console.log(atLeastTwoReject.toFixed(3));
}

binomDist2();

function geometricDist() {
    let n = 5;
    let p = 1 / 3;
    let q = 2 / 3;

    let result = 0;

    for (let i = 1; i <= 5; i++) {
        result += Math.pow(q, i - 1) * p
    }

    console.log(result.toFixed(3));
}

geometricDist();

function poissonDist(data) {
    // i messed up variables
    // p is X in formula, and X is P
    let e = 2.71828;
    let delta = 2.5; // the mean
    let k = 5; // result we want

    let result = (Math.pow(delta, k) * Math.pow(e, -delta)) / (factorial(k));
    console.log(result.toFixed(3));
    return Number(result).toFixed(3);
}

poissonDist();

function normalDist(mean, deviation) {
    let e = 2.71828;
    let denominator = deviation * Math.sqrt(2 * Math.PI);
    let power = Math.sqrt(mean) / 2;
    let numerator = Math.pow(e, -power);

    let result = numerator/denominator;

    console.log(result.toFixed(3));
}

normalDist(20, 2);
