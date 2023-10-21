document.querySelector('button').addEventListener('click',()=>{
    console.log('Button is clicked');
}) 

// add to cart click means to change the button name added to cat 
// document.querySelector('button').addEventListener('click',(ev)=>{
//     console.log(ev);
// }) 

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent='Added';
    //mela ullathu buttonnukku
    document.querySelector('p').textContent='changed';
 
    let ptag=document.querySelector('h1');
    ptag.textContent='welcome js';

       // let ptag=document.querySelector.textContent('p');its not work
    //ptag='changed';epti kudutha work agathu
})