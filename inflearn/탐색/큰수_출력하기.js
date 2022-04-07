let input = `6
7 3 9 5 6 12`

function solution(input) {
    let temp = input.split("\n");
    let input1 = parseInt(temp[0]);
    let input2 = temp[1].split(" ").map((num)=> parseInt(num));

    return input2.filter((num) => num >= input1).join(" ");
}

console.log(solution(input))