function coins(input) {
    let num = Number(input[0]);
    let sumInCoins = parseInt(num * 100);

    let coinsCounter = 0;

    while (sumInCoins > 0) {
        if (sumInCoins - 200 >= 0) {
            sumInCoins -= 200;
            coinsCounter++;
        } else if (sumInCoins - 100 >= 0) {
            sumInCoins -= 100;
            coinsCounter++;
        } else if (sumInCoins - 50 >= 0) {
            sumInCoins -= 50;
            coinsCounter++;
        } else if (sumInCoins - 20 >= 0) {
            sumInCoins -= 20;
            coinsCounter++;
        } else if (sumInCoins - 10 >= 0) {
            sumInCoins -= 10;
            coinsCounter++;
        } else if (sumInCoins - 5 >= 0) {
            sumInCoins -= 5;
            coinsCounter++;
        } else if (sumInCoins - 2 >= 0) {
            sumInCoins -= 2;
            coinsCounter++;
        } else if (sumInCoins - 1 >= 0) {
            sumInCoins -= 1;
            coinsCounter++;
        }
    }
    console.log(coinsCounter);
}
coins(["0.56"])