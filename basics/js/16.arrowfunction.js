// first method
function sayhello(name){
    return `hii helo its from first method ${name}`;
}
console.log(sayhello('sivanesan'));


// second method
let sayHelo = function(nam){
    return `hii its from second method ${nam}`;
}
console.log(sayHelo(`namashivaya`));


//third method 
let sayhelo=(first,second)=>{
    return `hii its from third method ${first+second}`;
}
console.log(sayhelo('sivaya','namaha'));

//oru line la code eruntha antha brackets theva illa but more than one line means give the brackets . ethukku return poda thevailla 

//fourth method its only valid for the one line code 

let forthmethod = (first,second)=> `hii its from forth oneline method ${first+second}`;
console.log(forthmethod('OOm ','saravanabava'));
//athikapatchan return kuduthu block vasukkurathu easyya puriyum 

// ------------------------------------------
//array with objects
let myobjects =[{
    title:'go to gym',
    isDone: true,

},{
    title:'Record 20 videos',
    isDone: false,
},{
    title:'doing good',
    isDone: true,
}];
console.log(myobjects);
console.log(myobjects[1].title);
console.log(myobjects[2].title);

//true only print function, filter means one method, its use for true only using, its also call back functions

// let filter = myobjects.filter((todo)=>   todo.isDone === true)
// console.log(filter);//its shortcut+
let filter = myobjects.filter((todo)=>{
    // console.log(todo);
    return todo.isDone === true;

})
console.log(filter);
// -----------------------------------------------------------------
//arrow function cannot use in only one  sitsution

let phone ={
    title: 'samsung',
    price:'2000',
    desp: ()=>{
        return `this phone price is ${this.price}`;
    },

}
console.log(phone.desp());
// enaga undefined tunnu error varum 
// enga this use panna olunga use agathu 

// sila time this keyword object kulla pakkum sila time object ta vittu velila poi pakkum. so namma normalla this ooda functionnality yarukkum athikamma theriyathu so athikamma use panni pathu tha use pannuvanga 


//this keyword tukku oru control le illa 
//programmers etha rompa kasta pattu control pannuvanga so  ethunalla arrow function la this keyword tee aduthuttanga,athunalla this keyword arrow function la use panna not work react la this keyword vassu arrow function use pannuvanga athulla use pannalam 
// entha this  mattum tha arrow la work agathu 