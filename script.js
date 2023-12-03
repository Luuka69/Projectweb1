/*alert("helllllllooooooooooo!!!!!");
confirm("are you sure?");
var name=prompt("pls tell me whats wrong!!!!");
var x=10;
console.log(x);
console.log(name)*/
/*var arr1=[5];
var  arr2= Array(5);
var  arr3= Array(5.2); 
var  arr4= Array.of(5);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);*/
/*var arr=[];
arr[0]="un";
arr[1]=2;
arr[2]=3.14;
console.log(arr);
console.log(arr[0]);
console.log(arr["length"]);
arr.length=0;
console.log(arr);
arr.length=3;
console.log(arr);*/



//ex3

/*
var a;
a=prompt("enter your age!");
if(1<=a && a<=6){
    alert("you are a young child");
}
if(7<=a && a<=11){
    alert("you have reached the age of reason");
}
if(12<=a && a<=17){
    alert("you are a teenager");
}
if(18<=a && a<=100){
    alert("you are an adult");
}
var x=parseInt(prompt("give me the first number"));
var y=parseInt(prompt("give me the second number"));
//console.log(typeof x);
typex=typeof x;
typey =typeof y;
function sum(x,y){
    

if(typex !=Number || typey!=Number){
    alert("Error: please enter two numbers!");
}
    else if (typex ==Number && typey==Number){
        return x+y;
}
}
sum(x,y);
function multiple(){
    for (let i = 10; i <= 1000; i += 10) {
        console.log(i);
}
multiple();
}
function inverse(x,y){
    let b=x;
    x=y;
    y=b;
    console.log("x:"+x);
    console.log("y:"+y);
}
inverse(x,y);*/




//ex4
var w=prompt("give me a word");
var wlen=w.length;
function inversech(ch){
    let new;
    for(let i=0;i<=wlen;i++)
    new[i]=w[wlen-i];

}