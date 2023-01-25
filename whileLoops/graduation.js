function graduation(input) {
    let index = 0;
    let name = input[index++];

    let sumOfGrade = 0;
    let counter = 0;
    let i = 1;
    let isExcluded = false;

    while (i <= 12 ) {
        let grade = Number(input[index++]);
        if (grade < 4) {
            counter++
            if (counter > 1) {
                console.log(`${name} has been excluded at ${i} grade`);
                isExcluded = true
                break;
            }
            continue;
        }
    
        sumOfGrade += grade;
        i++
    }
    let avarageGrade = sumOfGrade / 12;
    if (!isExcluded){
    console.log(`${name} graduated. Average grade: ${avarageGrade.toFixed(2)}`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

