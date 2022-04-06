const input = [1,2,3,4,6,7,8,0];

function solution(numbers) {
    let answer = 0;
    const set = new Set(numbers);
    
    for (let i = 1; i <= 9; i++) {    
        if(!set.has(i)) answer += i;
    }
    return answer;
}

console.log(solution(input));