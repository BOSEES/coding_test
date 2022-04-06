const input = [1,2,3,4];

function solution(nums) {
    let result = 0;
    function DFS(L,s,sum) {
        if (L === 3) {
            if(isPrime(sum)) result++;
        } else {
            for (let i = s; i < nums.length; i++) {
                DFS(L + 1, i + 1, sum + nums[i]);
            }
        }
    }
    
    DFS(0, 0, 0);
    return result;
}

function isPrime(num) {
    if (num === 2) return true;
    for(let i = 2; i <= Math.floor(num/2); i++) {
        if (num % i === 0) return false;
    }
    return true;   
}

console.log(solution(input));