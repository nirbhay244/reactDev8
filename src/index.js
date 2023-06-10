import React from 'react';
import  ReactDOM  from 'react-dom/client';
class A extends React.Component{
    //properties



    //constructor
    constructor(){
        super();
        this.state = {name:"Nirbhay", surname:"Singh",address:"delhi"}
    }



    //method

    render(){
        return <h1>Oklabs {this.state.name} {this.state.surname}</h1>
    }

}

const root =    ReactDOM.createRoot(document.getElementById("root"));
root.render(<A name="n" surname="S">Welcome</A>)

