function cake(input) {
    let schirochina = Number(input[0]);
    let duljina = Number(input[1]);
    let sizeOfCake = schirochina * duljina;

    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        command = input[index];
        if (command === "STOP") {
            if (sizeOfCake < 0) {
                console.log(`No more cake left! You need ${Math.abs(sizeOfCake)} pieces more.`);
                break;
            } else{
                console.log(`${Math.abs(sizeOfCake)} pieces are left.`);
                break;
            }
        
        } else if (sizeOfCake < 0) {
            console.log(`No more cake left! You need ${Math.abs(sizeOfCake)} pieces more.`);
            break;
        }
        let piece = Number(input[index]);
        
        sizeOfCake -= piece;
        index++;
    }

}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])



