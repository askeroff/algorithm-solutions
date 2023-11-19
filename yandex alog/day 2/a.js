import fs from 'fs';
let fileContent = fs.readFileSync("input.txt", "utf8");

let [str, reqN, ...reqs] = fileContent.toString().split('\n');

reqs = reqs.filter(i => i !== '');

const getHash = (from, len) => {
    return (h[from + len - 1] - h[from - 1] * xPowers[len]) % p;
}


const isEqual = (from1, from2, len) => {
    const left = (h[from1 + len - 1] + h[from2 - 1] * xPowers[len]) % p;
    const right = (h[from2 + len - 1] + h[from1 - 1] * xPowers[len]) % p;


    return left === right;
}

const p = Math.pow(10, 9) + 7;

const h = [0];

let x = 263;


let xPowers = [1];

let n = str.length;

let s = ' ' + str;


for (let i = 1; i <= n; i++) {
    h[i] = (h[i - 1] * x + (s.charCodeAt(i) - 96)) % p;

    xPowers[i] = (x * xPowers[i-1]) % p;
}


for (let i = 0; i < reqs.length; i++) {
    const [l, f1, f2] = reqs[i].split(' ');
    if (isEqual(Number(f1) + 1, Number(f2) + 1, Number(l))) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

