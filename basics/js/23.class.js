class sayHi {
    sayhii() {
        console.log('sayhii');
    }
    sayhii2(){
            console.log('sayhii2');
    }

}
let somename = new sayHi();
somename.sayhii();
somename.sayhii2();





class some{
    sayhii(name){
        console.log("hii "+name);
    }
}
let some1=new some();
some1.sayhii('kumaresan');

//eppo namma class le pass panna porom athukku constructor venum 

class classname{
    
    constructor(name){
        // like vellila declare pannamatharitha ethu
        this.name=name;
    }
    sayhii(){
        console.log("hiii "+ this.name);
    }
}
let classname1 = new classname('this is from karambakkudi');
classname1.sayhii();

