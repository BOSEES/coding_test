let input1 = "teachermode";
let input2 = "e";

function solution(string, target) {
    let result = [];
    let array1 = changArray(string, target, 'L');
    let array2 = changArray(string, target, 'R');

    for (let i = 0; i < string.length; i++) {
        if(array1[i] > array2[i]) result.push(array2[i]);
        else result.push(array1[i]);
    }

    return result.join(" ");
}

function changArray(string, target, flag) {
    let result = [];
    const n = string.length;
    let count = 0;
    if (flag === "L") {
        for (let i = 0; i < n; i++) {
            if (string[i] === target) {
                count = 0;
            } else {
                count++;
            }
            result.push(count);
        }
    } else {
        for (let i = n - 1; i >= 0; i--) {
            if (string[i] === target) {
                count = 0;
            } else {
                count++;
            }
            result.push(count);
        }
        result.reverse();
    }

    return result;
}   

console.log(solution(input1, input2));