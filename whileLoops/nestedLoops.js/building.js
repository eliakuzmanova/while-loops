function building(input) {
    let floors = input[0];
    let apartments = input[1];

    for (let x = floors; x > 0; x--) {
        let res = "";
        for (let y = 0; y < apartments; y++) {
            if(floors === x) {
                res += `L${x}${y} `;
            } else if (x % 2 === 0 && x !== floors) {
                res += `O${x}${y} `;
            } else if (x % 2 !== 0) {
                res += `A${x}${y} `;
            }
        }
        console.log(res);
    }
    
}
building(["9", "5"])