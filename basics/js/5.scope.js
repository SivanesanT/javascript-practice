let name1='sometext';
const name2='somevalue';
var name3='VAR';
//its is old version js la erunthussu 2016 varaiyum use pannanga

name3 = 'changed';
console.log(name3);

if(true){
    console.log(name1);
    console.log(name3);
    name1='againchanged'; // enga change pannalam its work and changed ethu let 
    name3='sivanesan';//ethu var etha kandippa change agum 
            
    console.log(name1);

    let sum = 'something';
    console.log(sum);

    var some='anything';
    console.log(some);

    const sub = 'somesentence';
    console.log(sub);
    //let and const ta ethukkulla declare pannuna ethulla mattum tha use pannalam
}

console.log(some);
some='isit';
console.log(some);

// console.log(sum);  //its the let sum 
// console.log(sub); //its the const sub

console.log(name1);
console.log(name3);

// ethu la enna theri ethunna var aa enga  venunallum use pannalam but the let apti illa etha change vennuna in the if but and use out side also print it  

if(true ){
    let sum='its second time useing';
    console.log(sum);
}