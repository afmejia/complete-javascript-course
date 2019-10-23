var mark = {
    fullName: 'Mark',
    mass: 100,
    height: 1.76,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var john = {
    fullName: 'John',
    mass: 105,
    height: 1.76,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (mark.calculateBMI() > john.calculateBMI()) {
    console.log(mark.fullName + ' has the highest BMI: ' + mark.bmi);
} else if (mark.bmi < john.bmi) {
    console.log(john.fullName + ' has the highest BMI: ' + john.bmi);
} else {
    console.log(john.fullName + " and " + mark.fullName + " have the same BMI: " + john.bmi);
}