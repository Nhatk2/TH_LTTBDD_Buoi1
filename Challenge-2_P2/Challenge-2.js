// Dữ liệu thử nghiệm
const bills = [125, 555, 44];

// Hàm tính tiền tip
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;


// Tạo mảng chứa tiền tip và tổng giá trị
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

// In kết quả ra console
for (let i = 0; i < bills.length; i++) {
    console.log(`Hóa đơn là ${bills[i]}, tiền tip là ${tips[i]}, và tổng cộng là ${totals[i]}`);
}
