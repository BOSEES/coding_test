const input1 = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const input2 = [1,5,3,5,1,2,1,4];
function solution(board, moves) {
    let result = 0 
    let stack = [];
    
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let temp = board[j][moves[i] - 1];
            if (temp !== 0) {
                if (stack[stack.length - 1] === temp) {
                    stack.pop();
                    result += 2
                } else {
                    stack.push(temp);
                }
                board[j][moves[i] - 1] = 0;
                break;
            }
        }
    }
    return result
}

console.log(solution(input1, input2));
