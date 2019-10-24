function avg (data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum / data.length;
}

var john = {
    name: "John",
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        var tip, bill;
        for (var i = 0; i < this.bills.length; i++) {
            bill = this.bills[i];
            if (bill < 50) {
                tip =  bill * 0.2;
            } else if (bill < 200) {
                tip = bill * 0.15;
            } else {
                tip = bill * 0.1;
            }
            this.tips.push(tip);
            this.finalBills.push(bill + tip);
        }
    },
    finalBills: [],
    tips: []
}

var mark = {
    name: "Mark",
    bills: [77, 375, 110, 45],
    calcTip: function() {
        var tip, bill;
        for (var i = 0; i < this.bills.length; i++) {
            bill = this.bills[i];
            if (bill < 100) {
                tip =  bill * 0.2;
            } else if (bill < 300) {
                tip = bill * 0.10;
            } else {
                tip = bill * 0.25;
            }
            this.tips.push(tip);
            this.finalBills.push(bill + tip);
        }
    },
    finalBills: [],
    tips: []
}

john.calcTip();
mark.calcTip();
avgTipJohn = avg(john.tips);
avgTipMark = avg(mark.tips);

if (avgTipJohn > avgTipMark) {
    console.log(john.name + "'s family paid the highest tips on average: " + avgTipJohn);
} else if(avgTipJohn < avgTipMark) {
    console.log(mark.name + "'s family paid the highest tips on average: " + avgTipMark);
} else {
    console.log("Both famies payed the same tip: " + avgTipJohn);
}

console.log(avgTipMark);
