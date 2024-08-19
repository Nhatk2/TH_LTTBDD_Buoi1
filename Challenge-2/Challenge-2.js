const markMass = parseFloat(prompt("Enter Mark's Mass:"));
const markHeight = parseFloat(prompt("Enter Mark's Height:"));
const johnMass = parseFloat(prompt("Enter John's Mass:"));
const johnHeight = parseFloat(prompt("Enter John's Height:"));
var Body_Mass = (mass, height) =>{
    var BMI =  mass / (height * height)
    return BMI 
};
const MarkBMI1 = Body_Mass(markMass, markHeight);
const JohnBMI1 = Body_Mass(johnMass, johnHeight);


console.log("Mark's BMI:", MarkBMI1);
console.log("John's BMI",JohnBMI1);

if (MarkBMI1 > JohnBMI1) {
    console.log(`Mark's BMI (${MarkBMI1}) is higher than John's (${JohnBMI1})!`);
} else if (JohnBMI1 > MarkBMI1) {
    console.log(`John's BMI (${JohnBMI1}) is higher than Mark's (${MarkBMI1})!`);
} else {
    console.log(`Mark and John have the same BMI (${MarkBMI1})!`);
}