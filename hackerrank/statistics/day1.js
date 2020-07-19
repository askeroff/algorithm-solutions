function pickMedian(arr) {
    let median = 0;
    if (arr.length % 2 === 0) {
        let firstNum = arr[arr.length / 2 - 1];
        let secondNum = arr[arr.length / 2];
        median = ((firstNum + secondNum) / 2).toFixed(1);
    } else {
        let middleIndex = Math.round(arr.length / 2);
        median = arr[middleIndex];
        const before = arr.slice(0, middleIndex);
        const after = arr.slice(middleIndex + 1);
        if (before.length !== after.length) {
            median = arr[middleIndex - 1]
        }
    }
    return median;
}

function firstPart(input) {
    const splitInput = input.split("\n");
    const length = +splitInput[0];
    const numbers = splitInput[1].split(" ").map(i => +i).sort((a, b) => a - b);

    let median = pickMedian(numbers);
    let middleIndex = Math.round(numbers.length / 2);
    const firstHalf = numbers.length % 2 === 0 ? numbers.slice(0, middleIndex) : numbers.slice(0, middleIndex - 1);
    const secondHalf = numbers.slice(middleIndex);
    let median2 = pickMedian(firstHalf);
    let median3 = pickMedian(secondHalf);

    console.log(median2);
    console.log(median);
    console.log(median3);
    return [median2, median, median3];
}


function secondPart(input) {
    const splitInput = input.split("\n");
    const length = +splitInput[0];
    const numbers = splitInput[1].split(" ").map(i => +i);
    const freqs = splitInput[2].split(" ").map(i => +i);

    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let z = 0; z < freqs[i]; z++) {
            result.push(numbers[i]);
        }
    }

    result = result.sort((a, b) => a - b);
    let middleIndex = Math.round(result.length / 2);
    const firstHalf = result.length % 2 === 0 ? result.slice(0, middleIndex) : result.slice(0, middleIndex - 1);
    const secondHalf = result.slice(middleIndex);
    let median2 = pickMedian(firstHalf);
    let median3 = pickMedian(secondHalf);
    let diff = (median3 - median2).toFixed(1);
    console.log(diff);
}

function processData(input) {
    const splitInput = input.split("\n");
    const length = +splitInput[0];
    const numbers = splitInput[1].split(" ").map(i => +i).sort((a, b) => a - b);
    let sumOfAll = numbers.reduce((p, c) => p + c, 0);
    let mean = (sumOfAll / numbers.length).toFixed(1);

    let sumofAllDistances = 0;

    numbers.forEach(num => {
        sumofAllDistances += (num - mean) * (num - mean);
    });

    let answer = Math.sqrt(sumofAllDistances / length).toFixed(1);

    console.log(answer);
}


const data = "9\n3 7 8 5 12 14 21 13 18";
const data2 = "9\n18 45 55 70 76 83 88 90 92 92 95 98";

// part 2 data
const data3 = "6\n6 12 8 10 20 16\n5 4 3 2 1 5";

// part 3 data

const data4 = "5\n10 40 30 50 20";


processData(data4);
