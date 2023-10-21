// logical operators like and or not
//&& || ! both side are true or false anything useing

// console.log(9430412-7547890);

let isloged=true;
let payment=true;
if(isloged && payment){
    console.log('watch videos');
}
else{
    console.log('buy Now');
}
loged=false;
pay=true;
if(loged || pay){
    console.log('payment or isloged any one is not valid')
}

loged=false;
pay=false;
if(loged || pay){
    console.log('payment or isloged any one is not valid')
}
else{
    console.log('payment and isloged not valid')
}

if(!loged){
    console.log('your are not loged in ');   
}