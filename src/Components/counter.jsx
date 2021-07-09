// import React and component class from React Module
import React, { Component } from 'react';

class Counter extends Component {
    render() {

        //console.log('props', this.props);
        // Look bootstrap documentation for className
        return (
            // Rendering of Lists: to convert strings into java script objects
            <div>
            <span  className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = {() => this.props.onIncrement(this.props.counter)} className = "btm btn-secondary btn-sm">Increment</button>
            <button  onClick = {() => this.props.onDelete(this.props.counter.id)} className = "btm btn-danger btn-sm  m-2">Delete</button>
            </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;



/*
class Counter extends Component {
    // When more than 1 JSX type is returned (Converted to React) Babbel get 
        //confused which is parent type, so only one type div is used
        // State is property of react, which will provide any data which the 
        // Component (Counter) needs

        // When state is changed, tell the React by using this.setState() method
        state = {
            value: 0
        }

        // Bind event handler to this pointer
        constructor(){
            super();
            this.handleIncrement = this.handleIncrement.bind(this); //binds
        }

        handleIncrement(product)
        {
            //console.log("Increment Clicked", this);
            //this.state.count++;
            console.log(product);
            this.setState({value: this.state.value + 1});
        }

        // If we want to pass paramters to handleFunction, Make a doHandleFunction 
        // Call handleFunction in new function and call new function on onClick
        // Parameters to HandleFun(): Write Arraow Function

        // If we want to define styles with no of properties then we use inline
    render() {

        //console.log('props', this.props);
        // Look bootstrap documentation for className
        return (
            // Rendering of Lists: to convert strings into java script objects
            <div>
            <span  className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = {() => this.handleIncrement(1)} className = "btm btn-secondary btn-sm">Increment</button>
            <button  onClick = {() => this.props.onDelete(this.props.id)} className = "btm btn-danger btn-sm  m-2">Delete</button>
            </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;


class CounterSecond extends Component {

    state = {
        counter: 0,
        tags: []
    }

    renderTagsIfAndElse(){
        if(this.state.tags.length === 0) return <pi>"This is not a list"</pi>;

        return  <ul> {this.state.tags.map(tag => <li key = {tag}>{tag}</li>)} </ul>
    }


render() { 
    // Look bootstrap documentation for className
    return (
        <div>
            { this.state.tags.length === 0 && "Please create a new tag" }
            {this.renderTagsIfAndElse()}
        </div>
        );
    }
}
 
//export default CounterSecond;
*/
