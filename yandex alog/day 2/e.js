import fs from 'fs';


let fileContent = fs.readFileSync("input.txt", "utf8");

let [str] = fileContent.toString().split('\n');


const p = Math.pow(10, 6) + 7;

const p1 = Math.pow(10, 6) + 11;

const h = [0];

const h1 = [0]

let x = 257;

let x2 = 263;

let xPowers = [1];

let x2Powers = [1];

let n = str.length;

let s = ' ' + str;

const isEqual = (from1, from2, len) => {
    const left = (h[from1 + len - 1] + h[from2 - 1] * xPowers[len]) % p;
    const right = (h[from2 + len - 1] + h[from1 - 1] * xPowers[len]) % p;
    
    const left1 = (h1[from1 + len - 1] + h1[from2 - 1] * x2Powers[len]) % p1;
    const right1 = (h1[from2 + len - 1] + h1[from1 - 1] * x2Powers[len]) % p1;


    return left === right && left1 === right1;
}


for (let i = 1; i <= n; i++) {
    h[i] = (h[i - 1] * x + (s.charCodeAt(i) - 96)) % p;
    
    h1[i] = (h1[i - 1] * x2 + (s.charCodeAt(i) - 96)) % p1;

    xPowers[i] = (x * xPowers[i-1]) % p;
    
    x2Powers[i] = (x2 * x2Powers[i-1]) % p1;
}


function binSearch(from) {
    let l = 0;
    let r = str.length - from;
    let m;

    let i = 1;

    while (l <= r) {
        m = l + Math.ceil((r-l)/2);
        if (isEqual(1, from + 1, m)) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return l - 1;
}

let ans = 0;

