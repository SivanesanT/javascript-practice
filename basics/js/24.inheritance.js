class user{
    constructor(firstname,lastname){
        this.firstname =firstname;
        this.lastname = lastname;

    }
    geter(){
        return `Username is ${this.firstname} ${this.lastname}`;
    }
    setter(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;

    }
}

let user1 = new user('siva','kbk');
console.log(user1.geter());

user1.setter('sabari','selva');
console.log(user1.geter());




class Teacher extends user{

    geter(){
         return "ashwin";
}

}
let teach = new Teacher('sivam','raman');
console.log(teach.geter());

teach.setter('santhosh','raman');
console.log(teach.geter());


