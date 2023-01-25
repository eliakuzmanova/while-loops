function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let n = Number(input[2]);

    let counterCombinations = 0;
    let isFound = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            counterCombinations++;
            if (x + y === n) {
                console.log(`Combination N:${counterCombinations} (${x} + ${y} = ${n})`);
                counterCombinations++;
                isFound = true;
                break;
            }
        }
        if(isFound === true)
        break;
    }
    if (!isFound) {
        console.log(`${counterCombinations} combinations - neither equals ${n}`);
    }
}
sumOfTwoNumbers(["88", 
"888", 
"2000"])






