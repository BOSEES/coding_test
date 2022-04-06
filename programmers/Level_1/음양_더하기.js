const input1 = [4,7,12];
const input2 = [true,false,true];

function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, index) => signs[index]? acc + cur : acc - cur,0);
}

console.log(solution(input1, input2));