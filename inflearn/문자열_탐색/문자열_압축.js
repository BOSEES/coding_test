const input = "KKHSSSSSSSE";

function solution(string) {
    let result = "";
    let target = string[0];
    let count = 1;

    for (let i = 1; i < string.length; i++) {
        if (string[i] === target) {
            count++;
        } else {
            result += target + count;
            target = string[i];
        }
    }

    return result;
}
//K2HS7E

console.log(solution(input));