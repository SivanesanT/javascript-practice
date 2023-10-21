let mytag = document.querySelector('h4');
console.log(mytag);
// ethulla answer tag la varum so change panna mudiyathu so namma text ta mattum thaniya edukka textcontent ta  use pannuvom 
console.log(mytag.textContent);
//eppo text mattum thaniya vanthutum so eppo nammalala edit panna mudiyum
mytag.textContent='it has been changed using the textcontent';
//now it has been changed 

let mytage = document.querySelectorAll('p');
console.log(mytage);
// epti panni pakkum podu antha queryselctorall kulla textcontent tum varum 
//text content tukkurathu oru property
//namma ella tag gaiyum matha poram example

//edit all them which tags are used in p 
let fullchange = document.querySelectorAll('p');
fullchange.forEach((some)=>{
   some.textContent='changed using the foreach un loops';
})
//delete all them which tags are used in p 
fullchange.forEach((some)=>some.remove());

//create new tags using the js
let newpTag= document.createElement('p');
// console.log(newpTag);
newpTag.textContent='this is created by the createElement() in js';
//namma eppo oru element ta uruvakkitom but etha oru etathulla vaikkanum eppo so we have to give the space for this 
document.querySelector('body').appendChild(newpTag);
// appendChild tunna entha adathulla atha page pannunu artham ethu last la serkkum 


