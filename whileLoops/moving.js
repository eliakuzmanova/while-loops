function moving(input) {
    
    let schirochina = Number(input[0]);
    let duljina = Number(input[1]);
    let visochina = Number(input[2]);
    let prostranstvo = schirochina * duljina * visochina;
    let index = 3;
    let command = input[index];

    while (command !== "Done") {
        command = input[index];
        if (command === "Done" && prostranstvo > 0) {
            console.log(`${Math.abs(prostranstvo)} Cubic meters left.`);
            break;
        }  else if (command === "Done" && prostranstvo < 0) {
            console.log(`No more free space! You need ${Math.abs(prostranstvo)} Cubic meters more.`);
        }
        let boxes = input[index];
        index++;
        prostranstvo -= boxes;
        if (prostranstvo <= 0) {
            console.log(`No more free space! You need ${Math.abs(prostranstvo)} Cubic meters more.`);
            break;
        }
    }

}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

