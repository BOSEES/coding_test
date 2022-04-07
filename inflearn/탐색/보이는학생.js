let input = `8
130 135 148 140 145 150 150 153`

let inputArray = input.split("\n");
let n = parseInt(inputArray[0]);
let k = inputArray[1].split(" ").map((e) => parseInt(e));

function solution(n, k) {
    let result = 1;
    let pivot = k[0];
    for (let i = 1; i < n; i++) {
        if(pivot < k[i]) {
            result++;
            pivot = k[i];
        }
    }
    return result;
}
console.log(solution(n, k))