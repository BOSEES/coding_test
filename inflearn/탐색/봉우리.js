let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];

function solution(arr) {
    let result = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            let pivot = arr[i][j];
            for (let k = 0; k < 4; k++) {
                let cx = i - dx[k];
                let cy = j - dy[k];
                if (cx >= 0 && cx < n && cy >= 0 && cy < n && pivot <= arr[cx][cy]) {
                        flag = 0;
                        break;
                }
            }
            if (flag) result++;
        }
    }

    return result;
}



console.log(solution(arr));