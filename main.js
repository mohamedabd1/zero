//task 1

var num=[1,2,3,4,5,6,7,8,9,10];
var sum=55;
function calc()
{
  return(total=sum/2)
}
console.log(calc());

//task 2
function traingle(base,height)
{
  return((base*height)/2)
}
console.log(traingle(5,10));

//task3
function age(years)
{
    return(years*365.25)
}
console.log(age(2));

//task4
function sun(x,y)
{
    return((x+y))
}
console.log(sun(5,6));

//task5
function array()
{
    var nam=["mohamed","abd","elhamed","khaled","ali","noor","baker","hosam","hazem","hasan"]
    return nam[0]
}
console.log(array ())

//task6
function id(myname)
{
    return myname
}
document.getElementById("one").innerHTML=(id("mohamed abd elhamed"))

//task7
function time(hours)
{
    return(hours*3600)
}
console.log(time(2));

//task8
function number(a,b,c,d)
{if((a+b+c+d)>360){

    return true;
}else{
    return false
}

}
document.getElementById("two").innerHTML=(number(100,100,100,100))

//task9
function number2(a)
{if(a==0){
    return true
}else{
    return false
}
}
console.log(number2(0))
 
//task10
function task10(c,h)
{
    return (((c+h)/100)*100)
}
console.log(task10(1250,50))

// task11
function task11(a,b){
    if(a>b){
        return a

    }else if(a==b) {
        return (" equal")
    } else {
        return ("notequal")
    }
}
console.log(task11(8,8));

task12
function task12(){
    var a="5";
    var b=5;
    if(a===b){
        return("number")
    }
    else{ return ("not number")}
}
console.log( task12())

// task13
function task13()
{
    document.getElementById("three").innerHTML=Date();
}
console.log(task13())
