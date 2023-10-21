let email='AShwin@gmail.com';
let pass='1234567';

console.log(email.toLowerCase(email));
console.log(pass.trim(pass));
//entha trim function first laiyum and lastlaiyum ulla tha mattum tha remove the space then it naduvulla ullatha adukkathu 



console.log(email.includes('@gmail'));
//includes sukkulla ulla value va antha variable la (email.) eruntha true illana false


let emailcheck = function(user){

    if(user.includes('@')){
        return true;
    }else{
        return false;
    }

}
console.log(emailcheck(email));



function passwordcheck(verify){

    if( (verify.includes('1234')) && (verify.length>6) ) { return true; }else{ return false; }
}
console.log(passwordcheck(pass));
