import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: 0
    };

    // constructor(){
    //     super();
    //     this.handleIncreament= this.handleIncreament.bind(this);
    // }

    handleIncreament = product =>  {
        //console.log('Increment Clicked', this); 
        console.log(product);
        this.setState({value: this.state.value +1});
    }


    render() {
  
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=> this.handleIncreament({id:1})} className="btn btn-seconday btn-sm">Increment</button>

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;