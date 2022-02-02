function a (){return 5;}
undefined
a()
5
a
ƒ a (){return 5;}
b=a
ƒ a (){return 5;}
function a (x)
{return x;}
undefined
b(19)
5
b=a
ƒ a (x)
{return x;}
b(19)
19
//Prosleđivanje po vrednosti VS Prosleđivanje po referenci
undefined
function a (x)
{x*=2;
 return x;}
undefined
var broj = 5;
undefined
a(broj)
10
broj
5
broj =a(broj)
10
var broj = {id:3}
undefined
function a (x)
{x.id*=2;
 return x;}
undefined
a (broj)
{id: 6}
broj
{id: 6}
//imidiate invoke function
undefined
niz =[4,5,6,8,0]
(5) [4, 5, 6, 8, 0]
niz.forEach(function(value){}
VM1048:1 Uncaught SyntaxError: missing ) after argument list
var objekat ={
    prvi() {console.log ("poziv prve metode");},drugi (){consol.log("poziv druge metode");},treca(){console.log("poziv trece metode");} }
undefined
objekat.prvi()
VM1519:2 poziv prve metode