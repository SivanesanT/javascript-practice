console.log(typeof 'ashwin');
console.log(typeof 5);
//dollar to rupee to converter

let convertrupees=(dollar)=>{
    // return dollar*69;
    if(typeof dollar==='number'){
        return dollar*69;
    }else{
        throw Error(`Amount only in number so type number's only`);
    }
}
//  console.log(convertrupees('one'));
console.log(convertrupees(78));
console.log('this line will not show if program crashes----------------');
// throw kudutha adutha line run agathu athukka atha try catch kondu vanthanga 
// if suopose any error in the code means another line is runned so using the try and catch la kamikkira error red la kamikkathu like the output mathari kamikkum 


let convertrupee=(dollar)=>{
    // return dollar*69;
    if(typeof dollar==='number'){
        return dollar*69;
    }else{
        throw Error(`Amount only in number so type number's only`);
    }
}
try{
    console.log(convertrupee('one'));

}catch(errorone){
    console.log(errorone);
    // any name also given in the catch within the brackets  like e and anyothers ethu eror red color la kamikkathu like answer mari kamikkum 
    console.error(`this is number error`);
    console.error(`this is number error ${errorone}`);
    //this method also using, this also work next line , ethu error red color la kamikkum 

}
console.log('this line will not show if program crashes');