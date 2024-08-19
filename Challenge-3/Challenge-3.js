// Object Data
const scores = {
    dolphins1: [96, 108, 89],
    koalas1: [88, 91, 110],
    dolphins2: [97, 112, 101],
    koalas2: [109, 95, 123],
    dolphinsBonus2: [97, 112, 101],
    koalasBonus2: [109, 95, 106]
};


const calculateAverage = scores => scores.reduce((a, b) => a + b, 0) / scores.length;


const determineWinner = (avgDolphins, avgKoalas, minScore = 100) => {
    if (avgDolphins >= minScore && avgDolphins > avgKoalas) return 'Dolphins win!';
    if (avgKoalas >= minScore && avgKoalas > avgDolphins) return 'Koalas win!';
    if (avgDolphins >= minScore && avgKoalas >= minScore && avgDolphins === avgKoalas) return 'It\'s a draw!';
    return 'No team wins the trophy!';
};


const averages = {
    dolphinsAvg1: calculateAverage(scores.dolphins1),
    koalasAvg1: calculateAverage(scores.koalas1),
    dolphinsAvg2: calculateAverage(scores.dolphins2),
    koalasAvg2: calculateAverage(scores.koalas2),
    dolphinsAvgBonus2: calculateAverage(scores.dolphinsBonus2),
    koalasAvgBonus2: calculateAverage(scores.koalasBonus2)
};


console.log(`Dolphins Average (Data 1): ${averages.dolphinsAvg1}`);
console.log(`Koalas Average (Data 1): ${averages.koalasAvg1}`);
console.log(`Dolphins Average (Data 2): ${averages.dolphinsAvg2}`);
console.log(`Koalas Average (Data 2): ${averages.koalasAvg2}`);
console.log(`Dolphins Average (Data Bonus 2): ${averages.dolphinsAvgBonus2}`);
console.log(`Koalas Average (Data Bonus 2): ${averages.koalasAvgBonus2}`);

console.log(determineWinner(averages.dolphinsAvg1, averages.koalasAvg1));
console.log(determineWinner(averages.dolphinsAvg2, averages.koalasAvg2));
console.log(determineWinner(averages.dolphinsAvgBonus2, averages.koalasAvgBonus2));
