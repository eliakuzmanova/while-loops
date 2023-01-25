function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index++]);

    let sumNum = 0;

    while (sumNum < num) {
        let tempNum = Number(input[index++]);
        sumNum += tempNum;
    }
    console.log(sumNum);

}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])



