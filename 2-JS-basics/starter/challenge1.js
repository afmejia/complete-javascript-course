var markMass, markHeight, johnMass, johnHeight, higherBMI;

markMass = 95;
markHeight = 1.76;
johnMass = 85;
markHeight = 1.76;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
higherBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's BMI? " + higherBMI);