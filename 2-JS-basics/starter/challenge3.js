// Calculate tip according to the bill
function tipCalculator(bill) {
    if (bill < 50 ){
        return bill * 0.2;
    } else if (bill < 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}

// Define bills for the 3 restaurants in dollars
var bills = [124, 48, 268];
var tips = []
var paid_ammouts = []

var tip, paid_ammount
for (const bill in bills) {
    tip = tipCalculator(bills[bill]);
    paid_ammount = bills[bill] + tip;
    tips.push(tip);
    paid_ammouts.push(paid_ammount);
}
console.log(tips, paid_ammouts);