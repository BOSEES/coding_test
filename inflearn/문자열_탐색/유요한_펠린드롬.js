let str="found7, time: study; Yduts; emit, 7Dnuof";

function solution(s){
    let answer="YES";
    s=s.toLowerCase().replace(/[^a-z]/g, '');
    if(s.split('').reverse().join('')!==s) return "NO";
    return answer;
}

console.log(solution(str));