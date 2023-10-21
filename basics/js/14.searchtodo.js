let mytodos=[];

mytodos.push(`gain the money`);
mytodos.push(`To sell the datas`);
mytodos.push(`money is more importance`);
mytodos.push(`Go To Gym`);
mytodos.push(`Buy a Car`);
mytodos.push(`Buy a Phone`);

console.log(mytodos);

//indexof 
console.log(mytodos.indexOf(`money is more importance`));



let findtodo = mytodos.findIndex(function(todo) {
    return todo ==`Go To Gym`;
})
 console.log(findtodo)

//  console.log(mytodos.findIndex(function(todo) {
//     return todo ==`Go To Gym`;
// }))
 
//starts here *function using

let findTodo = function(todolist,searchitem)  
{
let result = todolist.findIndex(function(todo)
{ 
    return todo.toLowerCase() == searchitem.toLowerCase();
    //erantum lower panni same ma vantha athu oree ethu thannu vassukovom
})
return result;
}
console.log(findTodo(mytodos,'Buy A car'));


// console.log(mytodos.find(function(todo){
//     console.log( todo.toLowerCase() == 'go to gym');
// }));

console.log(mytodos.find(function(todo){
    return todo.toLowerCase() == 'go to gym';
}));


let whattodo = function(todolists, searchitems){
    let result = todolists.find(function(todo){
        return todo.toLowerCase() == searchitems.toLowerCase()
    })
    return result;
}
console.log(whattodo(mytodos , 'bUY A phone'));



 