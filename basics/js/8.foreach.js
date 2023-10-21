let heros =['Sivaji', 'MGR' , 'kamal', 'rajinikanth' , 'vijay' ,'ajith' , 'vijaysethupathi' ];



// heros.forEach(function () {
//     console.log('hii');
// });  call back function

heros.forEach(function (hero, position) {
    console.log(`${position+1}  ${hero} `);
});

let days =['sun','mon','tue','wed','thus','fri','sat'];

days.forEach(function (days, positn) {
    console.log(`${positn+1}  ${days} `);
});