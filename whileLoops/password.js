function password(input) {
    let index = 0;
    let username = input[index++];
    let pass = input[index++];
    let data = input[index++];

    while (data !== pass) {
        data = input[index++];
    }
    console.log(`Welcome ${username}!`);
     
} 
password(["Gosho",
"secret",
"secret"])

