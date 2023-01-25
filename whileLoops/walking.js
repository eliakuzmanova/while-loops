function walking(input) {
    let index = 0;
    let command = input[index];

    let goal = 10000;
    let sumOfSteps = 0;

    while (sumOfSteps < goal) {
        command = input[index];
       let steps = Number(input[index]);
        if (command === "Going home") {
            index++;
            sumOfSteps += Number(input[index]);
            break;
        }
        sumOfSteps += steps;
        index++;
    }
    let diff = Math.abs(goal - sumOfSteps);
    if (sumOfSteps >= goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])



