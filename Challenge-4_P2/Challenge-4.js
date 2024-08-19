// Dữ liệu thử nghiệm
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Hàm tính tiền tip
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

// Tạo mảng chứa tiền tip và tổng giá trị
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

// In kết quả ra console
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// Hàm tính trung bình
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Tính và in trung bình của tổng giá trị
const averageTotal = calcAverage(totals);
console.log('Average Total:', averageTotal);
