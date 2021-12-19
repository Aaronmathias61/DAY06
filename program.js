//Square of a Number
let a=5;
console.log(Math.pow(a,2));

//Swapping of two numbers
let a=5;
let b=10;
let temp;
console.log("Before swapping a and b is "+a+" and "+b);
temp=a;a=b;b=temp;
console.log("After swapping a and b is "+a+" and "+b);

//Addition of three number
let a=5;
let b=10;
let c=20;
console.log("Addition of three numbers is",(a+b+c));

//Celsius to Fahrenheit conversion
let a=32;
console.log("Farenheit is ",((a*9/5)+32).toFixed(2));

//Meter to miles
let a=10000;
console.log(a+" Meter in miles is",(a*0.000621371).toFixed(2));

//Pounds in kg
let a=10000;
console.log(a+" Pounds in kg is",(a*0.453592).toFixed(2));

//Power of any number x ^ y
let x=5;
let y=4;
console.log(Math.pow(x,y));

//Area of equilateral triangle
let a=7;
console.log("Area of equilateral triangle is ",(Math.sqrt(3)*Math.pow(a,2)/4).toFixed(2));

//Area of Isosceles triangle
let b=7,h=8;
console.log("Area of Isosceles triangle is ",(b*h/2).toFixed(2));

//Volume Of Sphere
let r=9;
console.log("Volume Of Sphere ",(4*Math.pow(r,3)*Math.PI/3).toFixed(2));

//Give the Actual cost and Sold cost, Calculate Discount Of Product
let ac=1100,sc=1000;
console.log("Discount is "+((ac-sc)*100/ac).toFixed(2)+"%");    