// console.log("welcome to mogdisho");
// // normal function or  hosted function
// salaan();
// function salaan(){
//     console.log("waan kusalaa may walaal");

// }

// // expression function or  non hosted 
// gudomid();
// var gudomid =function(){
//     console.log("waan kaqaaday walaal");
// }
//settime out
//setintervel
// console.log(global);
// setTimeout(()=>{
//     console.log('waxaa lagaaray xiligii salaada');
// },2000);
// xog =0
// let timer=setInterval(()=>{
//     xog +=1;
//     console.log( xog +'wadadan aduun ka ugu hodansan');
//     if(xog>=5){
//         clearInterval(timer);
//     }
// },2000);
// modules of node js very import and types are 
// // core module
// local module
// thrie part module
// const arday =['saacid','ali','mahamed','geedi'];
// const ID =   [200,   1000,   3000,  4000];  
// // console.log(student);
// module .exports= {

//           arday,ID

// }// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
// function subtract(a, b) {
//     return a * b;
// }

// // Display results
// const num1 = 10;
// const num2 = 5;

// console.log(`Addition of ${num1} and ${num2} is: ${add(num1, num2)}`);
// console.log(`Subtraction of ${num1} and ${num2} is: ${subtract(num1, num2)}`);
// Function to calculate Power (P = V * I)
function calculatePower(voltage, current) {
    return voltage * current;
}

// Function to calculate Energy (E = P * t)
function calculateEnergy(voltage, current, pulseDuration) {
    const power = calculatePower(voltage, current);
    return power * pulseDuration; // Energy in Joules if time is in seconds
}

// Inputs
const voltage = 230; // Voltage in Volts (V)
const current = 5;   // Current in Amperes (A)
const pulseDuration = 2; // Pulse duration in seconds (s)

// Calculations
const power = calculatePower(voltage, current);
const energy = calculateEnergy(voltage, current, pulseDuration);

// Display results
console.log(`Voltage: ${voltage} V`);
console.log(`Current: ${current} A`);
console.log(`Pulse Duration: ${pulseDuration} s`);
console.log(`Power (P = V * I): ${power} Watts`);
console.log(`Energy (E = P * t): ${energy} Joules`);

