let n = 5;
let A = [2,3,3,1,3];
let B = [1,1,2,2,3];
// 1: 가위, 2: 바위, 3: 보
function solution(n, a, b) {
    for(let i = 0; i < n; i++) {
        if (a[i] === 1 && b[i] === 2) console.log("B")
        else if (a[i] === 2 && b[i] === 3) console.log("B")
        else if (a[i] === 3 && b[i] === 1) console.log("B")
        else if (a[i] === b[i]) console.log("D");
        else console.log("A");
    }
}

solution(n, A, B);