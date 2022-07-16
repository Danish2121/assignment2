//  Chapter 3

//  Question 1
var age = 22;
alert("I am " + age + " Years Old");


//  Question 2
var visitno = 20;
alert("You have visited this site " + visitno + " times");


//  Question 3
document.write("<h1>Question 3</h1>");
var birthYear = 1999;
document.write("My Birth Year is " + birthYear + "<br>" + " Data type of my declared variable is number");


//  Question 4
document.write("<h1>Question 4</h1>");
var vname = "Muhammad Danish";
var product = "T-Shirt(s)";
var quantity = 2;
document.write("<b>" + vname + "</b>" + " ordered " + "<b>" + quantity + " " + product + "</b>" + " on XYZ Clothing Store");


//  Chapter 4

//  Question 1
var name,age,email;


//  Question 2

//  Legal Variable Names
var name,$myAge,$myCourse,_quiz,$contact;

//  Illegal Variable Names
// var 1stname, my name, my contact, 1-name;


//  Question 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain, numbers, $ and _. For Example $my_1stVariable" + "<br>");
document.write("Variables must begin with a letter, $ or _. For Example $name, _name or name" + "<br>");
document.write("Variable names are case Sensitive" + "<br>");
document.write("Variable names should not be JS Keywords");


//  Chapter 5

//  Question 1 
var a = 12;
var b = 10;
var result = a + b;
document.write("<h1>Question 1</h1>");
document.write("Sum of " + a + " and " + b + " is " + result + "<br>");


//  Question 2
var a = 12;
var b = 6;
var add = a + b;
var sub = a - b;
var mul = a * b;
var div = a / b;

document.write("<h1>Question 2</h1>");
document.write("Addition of " + a + " and " + b + " is " + add + "<br>");
document.write("Subtraction of " + a + " and " + b + " is " + sub + "<br>");
document.write("Multiplication of " + a + " and " + b + " is " + mul + "<br>");
document.write("Division of " + a + " and " + b + " is " + div + "<br>");


//  Question 3
document.write("<h1>Question 3</h1>");
var a;
document.write("Value after variable declaration is undefined" + "<br>");
a = 3;
document.write("Initial Value: " + a + "<br>");
a++;
document.write("Value after increment: " + a + "<br>");
a = a + 7;
document.write("Value after addition is: " + a + "<br>");
a--;
document.write("Value after decrement is: " + a + "<br>");
a = a % 3;
document.write("The Remainder is: " + a);


//  Question 4
var ticketPrice = 600;
var quantity = 5;

document.write("<h1>Question 4</h1>");
document.write("Total Cost to buy " + quantity + " tickets to a movie is " + ticketPrice*quantity + "PKR");


//  Question 5
var tableNo = 3;

document.write("<h1>Question 5</h1>");
document.write("Table of " + tableNo + "<br>");
document.write(tableNo + " x 1 = " + tableNo + "<br>");
document.write(tableNo + " x 2 = " + tableNo + "<br>");
document.write(tableNo + " x 3 = " + tableNo + "<br>");
document.write(tableNo + " x 4 = " + tableNo + "<br>");
document.write(tableNo + " x 5 = " + tableNo + "<br>");
document.write(tableNo + " x 6 = " + tableNo + "<br>");
document.write(tableNo + " x 7 = " + tableNo + "<br>");
document.write(tableNo + " x 8 = " + tableNo + "<br>");
document.write(tableNo + " x 9 = " + tableNo + "<br>");
document.write(tableNo + " x 10 = " + tableNo + "<br>");


//  Question 6
var celcius = 25;
var fahrenhiet = 70;

C = (fahrenhiet - 32) * 5/9; 
F = (celcius * 9/5) + 32;


document.write("<h1>Question 6</h1>");
document.write(celcius + "<sup>0</sup>C is " + F + "<sup>0</sup>F" + "<br>");
document.write(fahrenhiet + "<sup>0</sup>F is " + C + "<sup>0</sup>C");


//  Question 7
var item1 = 300;
var item2 = 600;
var item1_quantity = 2;
var item2_quantity = 1;
var shipping_charges = 200;
var totalcost_item1 = item1 * item1_quantity; 
var totalcost_item2 = item2 * item2_quantity; 
var total = totalcost_item1 + totalcost_item2;


document.write("<h1>Question 7</h1>");
document.write("<h4>Shopping Cart</h4>");
document.write("Price of Item1 is " + item1 + "<br>");
document.write("Quantity of Item2 is " + item1_quantity + "<br>");
document.write("Price of Item2 is " + item2 + "<br>");
document.write("Quantity of Item2 is " + item2_quantity + "<br>");
document.write("Total Cost of Your Order is " + total);


//  Question 8
var obtMarks = 830;
var totalMarks = 1050;
var percentage = (obtMarks/totalMarks)*100;

document.write("<h1>Question 8</h1>")
document.write("Obtained Marks: " + obtMarks + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Percentage: " + percentage);



//  Question 9
var usdollar = 10;
var saudiriyal = 25;
var total = usdollar*104.80 + saudiriyal*28;
console.log(total);

document.write("<h1>Question 9</h1>");
document.write("<h3>Currency in PKR</h3>");
document.write("Total Currency in PKR: " + total);



//  Question 10
var num = 4;

document.write("<h1>Question 10</h1>")

// num = (num + 5)*10/2;

document.write("Number = " + num + "<br>");
document.write("First add 5 to number then multiply it with 10 then divide it by 2" + "<br>");
document.write("Answer = " + (num + 5)*10/2);



//  Question 11
var currentyear = 2022;
var birthyear = 1999;

document.write("<h1>Question 11</h1>")
document.write("<h3>Age Calculator</h3>");

document.write("Current Year: " + currentyear + "<br>");
document.write("Birth Year: " + birthyear + "<br>");
document.write("Your Age is: " + (currentyear - birthyear));



//  Question 12
var radius = 20;
var pie = 3.142;
var circumference = 2 * pie * radius;
var area = pie * radius * radius;

document.write("<h1>Question 12</h1>")
document.write("<h3>The Geometrizer</h3>");

document.write("Radius of a Circle: " + radius + "<br>");
document.write("The Circumference is: " + circumference + "<br>");
document.write("The area is: " + area);



//  Question 13
var favsnack = "chocolate chip";
var currentage = 15;
var maxage = 65;
var estamount = 3;
var totalamountsnacks = (maxage - currentage) * estamount;

document.write("<h1>Question 13</h1>")
document.write("<h3>The LifeTime Supply Calculator</h3>");

document.write("Favourite Snack: " + favsnack + "<br>");
document.write("Current Age: " + currentage + "<br>");
document.write("Estimated Maximum Age: " + maxage + "<br>");
document.write("Amount of snacks per day: " + estamount + "<br>");
document.write("You will need " + totalamountsnacks + " to last you until the ripe old age of " + maxage);


//  Chapter 6-9

//  Question 1
document.write("<h1>Question 1</h1>");

var a = 5;
document.write("Result" + "<br>" + "The value of a is: " + a + "<br><br>");

++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br><br>");

--a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a);


//  Question 2
document.write("<h1>Question 2</h1>");
var c = 2, b = 1;

// --c;
document.write("c is " + c + "<br>");
document.write("b is " + b + "<br>");

var result = --c - --b + ++b + b--;
document.write("Result is " + result);


//  Qquestion 3
var name = prompt("Question 3\nEnter Your name");
alert("Hello " + name);


//  Question 4
document.write("<h1>Question 5</h1>");
var tableno = +prompt("Enter table number", 5);

document.write(tableno + " x 1 = " + tableno*1 + "<br>");
document.write(tableno + " x 2 = " + tableno*2 + "<br>");
document.write(tableno + " x 3 = " + tableno*3 + "<br>");
document.write(tableno + " x 4 = " + tableno*4 + "<br>");
document.write(tableno + " x 5 = " + tableno*5 + "<br>");
document.write(tableno + " x 6 = " + tableno*6 + "<br>");
document.write(tableno + " x 7 = " + tableno*7 + "<br>");
document.write(tableno + " x 8 = " + tableno*8 + "<br>");
document.write(tableno + " x 9 = " + tableno*9 + "<br>");
document.write(tableno + " x 10 = " + tableno*10 + "<br>");


//  Question 6

document.write("<h1>Question 6</h1>");

var sub1 = prompt("Enter First Subject");
var sub2 = prompt("Enter Second Subject");
var sub3 = prompt("Enter Third Subject");
var totalpersub = 100;
var obt1 = +prompt("Enter Obtained Marks");
var obt2 = +prompt("Enter Obtained Marks");
var obt3 = +prompt("Enter Obtained Marks");
var obtainedMarks = obt1 + obt2 + obt3;
var totalMarks = 300;
var percentage = (obtainedMarks / totalMarks) * 100 + "%";

var sub1percentage = obt1/100*100 + "%";
var sub2percentage = obt2/100*100 + "%";
var sub3percentage = obt3/100*100 + "%";




document.write(`<table>
<tr>
<th>Subject</th>
<th>Total Marks</th>
<th>Obtained Marks</th>
<th>Percentage</th>
</tr>
<tr>
<td>${sub1}</td>
<td>${totalpersub}</td>
<td>${obt1}</td>
<td>${sub1percentage}</td>
</tr>
<tr>
<td>${sub2}</td>
<td>${totalpersub}</td>
<td>${obt2}</td>
<td>${sub2percentage}</td>
</tr>
<tr>
<td>${sub3}</td>
<td>${totalpersub}</td>
<td>${obt3}</td>
<td>${sub3percentage}</td>
</tr>
<tr>
<td></td>
<td><b>${totalMarks}</b></td>
<td><b>${obtainedMarks}</b></td>
<td><b>${percentage}</b></td>
</tr>
</table>`);


