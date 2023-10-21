let heros = ['Iron man', 'Thor','Flash','spider Man','Super Man']; 
//in above it is the array


let myobject = {
    title: 'HTML, CSS, JS',
    author: 'Sivanesan',
    courseDescription: 'Here Comes Course Description!!!',
    price: 'RS:- 999/-',
    language: 'tamil',

    printprice: function(){
        console.log(`Hi This Is from PrintPrice`);
    },
    log: function(writing){
        console.log(writing);
    },
    changeprice: function(pri){
      //  console.log(this); it has full print full object details 
        this.price = `RS:- ${pri}/-`;
        return this.price;
        //this is used for namma oru object kulla function call pannum pothu podannum
    },
}

console.log(`My course Title Is ${myobject.title}!!! Its Price Is ${myobject.price} Only`);
myobject.printprice();
//console.log(); it is also same concepts 
myobject.log('Its from sample of the console.log conncepts');

console.log(myobject.changeprice(5000));

