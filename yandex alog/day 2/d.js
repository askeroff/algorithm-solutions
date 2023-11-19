import fs from 'fs';


let fileContent = fs.readFileSync("input.txt", "utf8");

let [str, cubicsStr] = fileContent.toString().split('\n');

let cubics = cubicsStr.split(' ').map(i => Number(i));
let reverseCubics = [...cubics].reverse();


const p = Math.pow(10, 6) + 7;

const p1 = Math.pow(10, 6) + 11;

let xPowers = [1];

let x2Powers = [1];

function buildHash(fromArr, calcPowers) {
    const h = [0];

    const h1 = [0]

    let x = 257;

    let x2 = 263;

    let n = fromArr.length;

    let s = [0, ...fromArr];

    for (let i = 1; i <= n; i++) {
        h[i] = (h[i - 1] * x + s[i]) % p;

        h1[i] = (h1[i - 1] * x2 + s[i]) % p1;

        if (calcPowers) {
            xPowers[i] = (x * xPowers[i - 1]) % p;

            x2Powers[i] = (x2 * x2Powers[i - 1]) % p1;
        }
    }

    return { h, h1 };
}

const { h, h1 } = buildHash(cubics, true);

const { h: rH, h1: rH1 } = buildHash(reverseCubics);

const isEqualFunc = (props) => {
    const { h, h1, rH, rH1 } = props;
    return (len, from1, from2) => {
        const left = (h[from1 + len - 1] + rH[from2 - 1] * xPowers[len]) % p;
        const right = (rH[from2 + len - 1] + h[from1 - 1] * xPowers[len]) % p;

        const left1 = (h1[from1 + len - 1] + rH1[from2 - 1] * x2Powers[len]) % p1;
        const right1 = (rH1[from2 + len - 1] + h1[from1 - 1] * x2Powers[len]) % p1;


        return left === right && left1 === right1;
    }
}

const isEqual = isEqualFunc({ h, h1, rH, rH1 });

const answer = [];

for (let i = Math.floor(cubics.length/2); i >= 0; i--) {
    if (isEqual(i + 1, i, cubics.length - i)) {
        answer.push(cubics.length - i);
    }
}

answer.push(cubics.length);

console.log(answer.join(' '));