import React from "react";


class UserClass extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            count : 0,
            count2 : 1
        }
        console.log("child-constructor");
    }

    componentDidMount(){
        console.log("child-mount");
    }
    render(){
        console.log("child-render");
        const {name,location,contact} = this.props;
        return(
            <div className="user-card">
                <h2>count = {this.state.count}</h2>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:{contact}</h4>
                <button onClick={ () => 
                {
                    this.setState({count:this.state.count + 1})
                }
                }>Count Increment</button>
            </div>
        )
    }
}


export default UserClass;