// data
const bills = [275, 40, 430];

// Calculate-Tip
const calculateTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const printBillDetails = bill => {
    const tip = calculateTip(bill);
    const total = bill + tip;
    console.log(`Hóa đơn là ${bill}, tiền tip là ${tip}, và tổng cộng là ${total}`);
};

// In kết quả cho từng hóa đơn
bills.forEach(printBillDetails);