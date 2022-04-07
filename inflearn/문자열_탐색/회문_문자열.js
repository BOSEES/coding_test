const input = "gooG";

function solution(string) {
    const s = string.toLowerCase();
    if (s.split("").reverse().join("") !== s) return false;
    return true;
}

console.log(solution(input));