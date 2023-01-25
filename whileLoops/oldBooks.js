function oldBooks(input) {
    let favBook = input[0];
    let index = 1;
    let books = input[index];

    let counter = 0;

    while (books !== "No More Books") {
        books = input[index];
        index++;
        
        if (favBook === books) {
            console.log(`You checked ${counter} books and found it.`);
            break;

        }else if (books === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter} books.`);
            }
        
        counter++;
    }
    
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
