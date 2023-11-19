import fs from 'fs';
let fileContent = fs.readFileSync("input.txt", "utf8");

let [_, ...numsString] = fileContent.toString().split('\n');

const nums = numsString.filter(i => i !== '');

function getBuckets() {
    return {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
    };
}

function radix(arr) {
    const l = arr[0].length;

    let current = [...arr];

    for (let j = l - 1; j >= 0; j--) {
        console.log('**********');
        console.log(`Phase ${l - j}`);
        const buckets = getBuckets();
        for (let i = 0; i < current.length; i++) {
            if (buckets[current[i][j]]) {
            	buckets[current[i][j]].push(current[i]);
            }
        }

        current = Object.values(buckets).flat();

        for (let i = 0; i <= 9; i++) {
            console.log(`Bucket ${i}: ${buckets[i].length ? buckets[i].join(', ') : 'empty'}`)
        }

    }

    return current;

}

console.log('Initial array:');
console.log(nums.join(', '));


const res = radix(nums);

console.log('**********');
console.log(`Sorted array:`);
console.log(res.join(', '));