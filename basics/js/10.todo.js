// let mytodos=['Go to Gym','Records  20 videos today','buy a phone'];

let mytodos=[];


console.log('using the foreach to show the datas');
// mytodos.forEach(function(todo,posi) {
//     console.log(` ${posi+1}.  ${todo}`)
// });


// push means it can instert data to the mytodos array
console.log(`.....After pushed the data.....`);
mytodos.push(`gain the money`);
mytodos.push(`To sell the datas`);
mytodos.push(`money is more importance`);
// push na last la datas sa send pannum
mytodos.forEach(function(todo,posi) {
    console.log(` ${posi+1}.  ${todo}`)
});
//unshift na first la data insert agum 
console.log(`.....After Unshift the data.....`)
mytodos.unshift(`money is more importance`);
mytodos.unshift(`monkeys are eat the banana`);
mytodos.forEach(function(todo,posi) {
    console.log(` ${posi+1}.  ${todo}`)
});

console.log('using the forloop to show the datas');

//using the forloop to show the datas

for(i=0; i < mytodos.length; i++){
    console.log(`${i+1}.  ${mytodos[i]}`)
}