import fs from 'fs';
let fileContent = fs.readFileSync("input.txt", "utf8");

let [length, arrString] = fileContent.toString().split('\n');

const arr = arrString.split(' ').map(i => {
    if (i !== '') {
        return Number(i);
    }
    return '';
}).filter(i => i !== '');


function partition(x, low, right) {
    let e = low;
    let g = low;
    let n = low;

    while (n <= right) {
        if (arr[n] === x) {
            if (n !== g) {
                let temp = arr[n];
                arr[n] = arr[g];
                arr[g] = temp;
            }
            g += 1;
        }

        if (arr[n] < x) {
            let temp = arr[n];
            arr[n] = arr[g];
            arr[g] = arr[e];
            arr[e] = temp;

            e += 1;
            g += 1;
        }

        n += 1;
    }

    return [e,g];
}

function quickSort(low, right) {
    let x = arr[Math.floor(Math.random() * (right - low + 1) + low)];

    let [e,g] = partition(x, low, right);

    if (low >= right || right >= arr.length || low < 0) {
        return;
    }

    quickSort(low, e-1);
    quickSort(g, right);
}

quickSort(0, arr.length - 1);

console.log(arr.join(' '));