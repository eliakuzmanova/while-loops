function accountBalance(input) {
    let index = 0;
    let command = (input[index++]);

    let sumOfMoney = 0;
    

    while ( command !== "NoMoreMoney") {
        let money = Number(command);
        
        

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        sumOfMoney += money;
        console.log("Increase: " + money.toFixed(2));
        
        command = input[index++]
    }
    console.log("Total: " + sumOfMoney.toFixed(2));
}
accountBalance (["120",
"45.55",
"-150"])

