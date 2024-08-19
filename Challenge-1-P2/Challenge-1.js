// Dữ liệu thử nghiệm
const scores = {
    dolphins1: [44, 23, 71],
    koalas1: [65, 54, 49],
    dolphins2: [85, 54, 41],
    koalas2: [23, 34, 27]
};

// Hàm tính trung bình
const calcAverage = scores => scores.reduce((a, b) => a + b, 0) / scores.length;

// Hàm kiểm tra đội thắng
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
};

// Tính trung bình cho từng bộ dữ liệu
const dolphinsAvg1 = calcAverage(scores.dolphins1);
const koalasAvg1 = calcAverage(scores.koalas1);
const dolphinsAvg2 = calcAverage(scores.dolphins2);
const koalasAvg2 = calcAverage(scores.koalas2);

console.log(`Dolphins Average (Data 1): ${dolphinsAvg1}`);
console.log(`Koalas Average (Data 1): ${koalasAvg1}`);
console.log(`Dolphins Average (Data 2): ${dolphinsAvg2}`);
console.log(`Koalas Average (Data 2): ${koalasAvg2}`);

// Kiểm tra đội thắng cho từng bộ dữ liệu
checkWinner(dolphinsAvg1, koalasAvg1);
checkWinner(dolphinsAvg2, koalasAvg2);
