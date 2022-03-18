const arrey1 =[1,2,3,4]
arrey1.reduce(function(prosli,sadasnji){
    return prosli + sadasnji;
});

arrey1.reduce(function(prosli,sadasnji,sadasnjiIndex){
    console.log("Sabiramo index: " + sadasnjiIndex);
});

let initialValue = 0
let sum = [{x:1},{x:2},{x:3}].reduce(function(prosla,sadasnja){
    return prosla + sadasnja.x
}, initialValue)
console.log(sum)