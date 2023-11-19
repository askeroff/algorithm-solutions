function pickMedian(arr) {
    let median = 0;
    if (arr.length % 2 === 0) {
        let firstNum = arr[arr.length / 2 - 1];
        let secondNum = arr[arr.length / 2];
        median = ((firstNum + secondNum) / 2).toFixed(1);
    } else {
        let middleIndex = Math.round(arr.length / 2);
        median = arr[middleIndex];
    }
    return median;
}

function defineMode(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    }
    const values = Object.values(obj);
    const keys = Object.keys(obj);
    let indexOfMaxElem;
    let maxElem = -Infinity;
    let occuredTimes = 0;
    let indicesOfSameValues = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i] > occuredTimes) {
            maxElem = keys[i];
            indexOfMaxElem = i;
            occuredTimes = values[i];
        }
    }

    let sameValuesObj = {};

    for (let key in obj) {
        if (obj[key] === occuredTimes) {
            sameValuesObj[key] = occuredTimes;
        }
    }

    const sameValues = Object.keys(sameValuesObj).map(i => +i);
    const answer = Math.min.apply(Math, sameValues);
    return answer;
}

function processData(input) {
    //Enter your code here
    const splitInput = input.split("\n");
    const firstLine = +splitInput[0];
    const secondLine = splitInput[1].split(" ").map(i => +i).sort((a, b) => a - b);
    let sumOfAll = secondLine.reduce((p, c) => p + c, 0);
    let mean = (sumOfAll / secondLine.length).toFixed(1);
    let median = pickMedian(secondLine);
    let mode = defineMode(secondLine);
    console.log(mean);
    console.log(median);
    console.log(mode);
}

const testArr = "64630 11735 14216 99233 14470 4978 73429 38120 51135 67060".split(" ")
    .map(i => +i).sort((a, b) => a - b);

defineMode(testArr);

function weightedMean(input) {
    const splitInput = input.split('\n');
    const numbers = splitInput[1].split(' ').map(i => +i);
    const weights = splitInput[2].split(' ').map(i => +i);

    let sum = 0;
    let weightsSum = weights.reduce((p, c) => p + c, 0);

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * weights[i];
    }
    const answer = (sum / weightsSum).toFixed(1);
    console.log(answer);
    return answer;
}
