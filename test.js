


class A{
    //properties/varibales
    name;
    surname='';
    address="delhi";  
    state;  


    //constructor
    constructor(){
        this.name = 'Nirbhay';
        this.surname = 'Singh';
        this.fatherName ='Baijnath Singh';
    }

    //method
    show(){
        console.log(this.name+" "+this.surname+" "+this.address+" "+this.fatherName);
    }

    setState(data){
        this.state = data;
    }
    showState(){
        console.log(this.state);
    }
}

class B extends A{
    friend1;
    friend2;

    constructor(friend3){
        super();
        this.friend1 = 'Chandan';
        this.friend2 = 'Arpit';
        this.friend3 = friend3;
    }

    showFrind(){
        console.log(this.friend1+" "+this.friend2+ " "+this.friend3);

    }
}
let obj1 = new B("khanum");
obj1.showFrind();

let obj = new A();
obj1.show();
//create the object
obj1.setState({
    name : "Nirbhay",
    secondName:"Kumar"
})
obj1.showState();