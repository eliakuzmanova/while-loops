function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let price = Number(input[index]);
    index++;
    let command = input[index];
    let allMoney = 0;

    while (destination !== "End") {
        command = input[index];
        allMoney = 0;
        while(allMoney < price) {
            command = Number(input[index]);
            allMoney += command
            index++;
        }
        if (destination !== Number && destination !== "End") {
            console.log(`Going to ${destination}!`);
        }
        destination = input[index];
        if ( destination === "End") {
        break;
        }
        index++;
        price = input[index];
        index++;
    } 

}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

