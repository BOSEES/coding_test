const n = 5;
const arr=[[10, 13, 10, 12, 15], 
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];

function solution(n, arr) {
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        let temp1 = 0;
        let temp2 = 0;
        for (let j = 0; j <n; j++) {
            temp1 += arr[i][j];
            temp2 += arr[j][i];
        }
        result = Math.max(result, Math.max(temp1, temp2));
    }
    let temp1 = 0;
    let temp2 = 0;
    for (let i = 0; i < n; i++) {
        temp1 += arr[i][i];
        temp2 += arr[i][n - 1 - i];
    }

    return result = Math.max(result, Math.max(temp1, temp2));
}

console.log(solution(n, arr));