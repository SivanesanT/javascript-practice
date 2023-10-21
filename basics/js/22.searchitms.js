document.querySelector('#idtwo').addEventListener('input',(event)=>{
    console.log(event.target.value);
}
)

function search() {
    let myvalue= document.querySelector('#idtwo').value;
  //console.log(myvalue);
    if(myvalue < 1 || myvalue > 20 ){
        console.log('number of leters is excess or very small');
    }else{
        console.log(myvalue);
    }
}


function search() {
    let myvalue= document.querySelector('#idtwo').value;
  
    if(myvalue === 'fuck'){
        console.log('this word is not search');
    }else{
        console.log(myvalue);
    }
}



function change(){
  
        let  myvalue=document.querySelector('body')
        myvalue.style.background='red';
 
}
function normal(){
  
    let  myvalue=document.querySelector('body')
    myvalue.style.background='white';
    
    let change =document.querySelector('h1');
    change.style.color='red';
    // change.style.display='none';
}

function add(){
    let ul = document.querySelector('ul');
    let newli = document.createElement('li');
    newli.textContent='its added li';
    ul.appendChild(newli);
}
