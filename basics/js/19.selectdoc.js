console.log(document.title);

document.title='sivanesan website';
console.log(document.title);

let mytag = document.getElementById('idone');
console.log(mytag);

//etha namma change panna mudiyathu so ethu full tag a mean pannu so print agathu 

console.log(document.getElementsByClassName('classone'));

let tag = document.querySelector('p');
console.log(tag);
//query selector nu kudutha first ulla p tag mattum tha select agum so we use queryselectorall kudutha alla p tag gum select agum example

let minetag = document.querySelectorAll('p');
console.log(minetag);
//but etha nammalala read panna mudiyathu  ethula array ya mention pannanum
console.log(minetag[1]);

//etha query selector ra vassu id ya kudu select pannalam but query selector appo mattum # for id, . for class use pannanum illana atha tag nu aduthukkum 
let minetg = document.querySelectorAll('#idone');
console.log(minetg[0]);
let minet = document.querySelectorAll('.classone');
console.log(minet[0]);
//enga array metion pannalanna namakku puriyatha mari output kamikkum so mention the array