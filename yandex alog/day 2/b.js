import fs from 'fs';
let fileContent = fs.readFileSync("input.txt", "utf8");

let [str] = fileContent.toString().split('\n');

const isEqual = (from1, from2, len) => {
    const left = (h[from1 + len - 1] + h[from2 - 1] * xPowers[len]) % p;
    const right = (h[from2 + len - 1] + h[from1 - 1] * xPowers[len]) % p;


    return left === right;
}

const p = Math.pow(10, 7) + 7;

const h = [0];

let x = 263;

let xPowers = [1];

let n = str.length;

let s = ' ' + str;


for (let i = 1; i <= n; i++) {
    h[i] = (h[i - 1] * x + (s.charCodeAt(i) - 96)) % p;

    xPowers[i] = (x * xPowers[i-1]) % p;
}


// // console.log(str.substring(0, 93) === str.substring(10, 93 + 10));
// 
// console.log(str.substring(103-93));


for (let i = str.length - 1; i >= 0; i--) {
    if (isEqual(1, str.length - i + 1, i)) {
        
        console.log(str.length - i);

        break;
    }

}