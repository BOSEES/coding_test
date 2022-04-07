const input = "tge0a1h205er";

function solution(string) {
    let s = string.replace(/[^0-9]/g, "");
    return parseInt(s);
}

console.log(solution(input))