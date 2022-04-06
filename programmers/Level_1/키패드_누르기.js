const input1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const input2 = "right";

function solution(numbers, hand) {
    let result = ""
    let leftThum = [3, 0];
    let rightThum = [3, 2];
    
    const phone = {
        1: [0, 0] , 2: [0, 1], 3: [0, 2],
        4: [1, 0] , 5: [1, 1], 6: [1, 2],
        7: [2, 0] , 8: [2, 1], 9: [2, 2],
                    0: [3, 1]
    }
    
    for (let i = 0; i < numbers.length; i++) {
        const target = phone[numbers[i]];
        
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            result += "L";
            leftThum = phone[numbers[i]];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            result += "R";
            rightThum = phone[numbers[i]];
        } else {
            let count1 = Math.abs(leftThum[0] - target[0]) + 
                Math.abs(leftThum[1] - target[1]);
            let count2 = Math.abs(rightThum[0] - target[0]) + 
                Math.abs(rightThum[1] - target[1]);
            if (count1 < count2) {
                result += "L";
                leftThum = phone[numbers[i]];
            } else if (count1 > count2) {
                result += "R";
                rightThum = phone[numbers[i]];
            } else {
                if (hand === "left") {
                    result += "L";
                    leftThum = phone[numbers[i]];
                } else {
                    result += "R";
                    rightThum = phone[numbers[i]];
                }
            }
        }
    }
    return result;
}

console.log(solution(input1, input2));