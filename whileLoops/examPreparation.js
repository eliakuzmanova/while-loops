function examPreparation(input) {
    let maxSmallGrade = input[0];
    let index = 1;
    let command = input[index];

    let lastProblem = "";
    let counter = 0;
    let sumOfGrades = 0;
    let sumOfAllProblems = 0;

    while(command !== "Enough") {
        lastProblem = input[index];
        index++;
        let grade = Number(input[index]);
        sumOfGrades += grade;
        sumOfAllProblems++;

        if (grade <= 4) {
            counter++
            if (counter >= maxSmallGrade) {
                console.log(`You need a break, ${counter} poor grades.`);
                break;
            }
        }

        index++
        command = input[index];
    }
    let avgScore = (sumOfGrades / sumOfAllProblems).toFixed(2);
    if (command === "Enough") {
        console.log(`Average score: ${avgScore}`);
        console.log(`Number of problems: ${sumOfAllProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

