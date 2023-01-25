function vacation(input) {
    let moneyForVacation = Number(input[0]);
    let savedMoney = Number(input[1]);
    let index = 2;

    let daysCounter = 0;
    let spendCounter = 0;

    while (savedMoney < moneyForVacation) {
        let action = input[index];
        index++
        let amount = Number(input[index]);
        daysCounter++;
        if (action === "spend") {
            spendCounter++;
            savedMoney -= amount;
            if (savedMoney < 0) {
                savedMoney = 0;
            }
        } else if (action === "save") {
            savedMoney += amount;
            spendCounter = 0;
        }
        if (spendCounter >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysCounter}`);
            break;
        }
        index++;
    }
    if (savedMoney >= moneyForVacation) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

