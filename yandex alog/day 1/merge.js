import fs from 'fs';
let fileContent = fs.readFileSync("input.txt", "utf8");

let [, arrString] = fileContent.toString().split('\n');

const arr = arrString.split(' ').map(i => {
    if (i !== '') {
        return Number(i);
    }
    return '';
}).filter(i => i !== '');


function merge (first, second) {
    let sorted = [];

    let i = 0;
    let j = 0;

    while (i < first.length && j < second.length) {
        if (first[i] <= second[j]) {
            sorted.push(first[i]);
            i++;
        } else if (second[j] < first[i]) {
            sorted.push(second[j]);
            j++;
        }
    }

    const result = [...sorted, ...first.slice(i), ...second.slice(j)];

    return result;
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const divider = Math.floor(array.length/2);

    const left = mergeSort(array.slice(0, divider));
    const right = mergeSort(array.slice(divider));

    return merge(left, right);
}

const res = mergeSort(arr);

console.log(res.join(' '));