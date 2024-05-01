var Num = 20;
console.log(typeof(Num));

num = toString(Num);
console.log(typeof(Num)) ;

var n = "20" ;
n = parseInt(n) ;
console.log(typeof(n));


var x = 2.5641
console.log(x.toFixed(2)); // after d decimal point ,return string 

console.log(x.toPrecision(3)) //totol number ,return string

console.log(typeof(Number("21"))); 

console.log(Number(true));
console.log(Number(false));


//string concatente

document.write("farhan" + " shahriar <br/>");

var first_name = "Farhan " ;
var last_name = "Shahriar" ;
var full_name = first_name + last_name ;
document.write(full_name) ;


// library functions 
//printing of sting len 

var text = "Bangladesh" ;
var len = text.length ;
document.write( "<br> number of character"+ len) ;
document.write( "<br> number of character"+ text.length) ;

//user input 
var  _input = prompt("enter your name") ;
document.write("<br> name is :"+_input)

// singel char return 

var y = "farhan" ;
document.write("<br>the singel char form farhan of 2  is : "+ y.charAt(2));

// to upper case 

var myname= "farhan" ;
document.write("<br>farhan is in upper case : "+ myname.toUpperCase());
 // concat function

 var n1 = "i love " ;
 var n2 = "bangladesh";

 document.write("<br>"+n1.concat(n2)) ;

 //sliceing the text 
//"<br>"+
 var myname = "farhan ";
 document.write("<br>"+myname.slice(1,3));










