import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;

        return (<div>
            <button className="btn btn-primary btn-sm m-2"
                onClick={onReset} >Reset</button>

            {counters.map(counter => (
                <Counter key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter} >
                </Counter>
            ))}
        </div>
        );
    }
}

export default Counters;


/*
class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4 },
            {id: 2, value: 1 },
            {id: 3, value: 2 },
            {id: 4, value: 3 }
        ]
     };

     handleDelete = counterId =>{
         //console.log("Event Handler Called", counterId);
         const counters = this.state.counters.filter(c => c.id !== counterId);
         this.setState({counters: counters});

     };

    render() {
        return (<div>
            {this.state.counters.map(counter => (
            <Counter key={counter.id} value={counter.value} onDelete = {this.handleDelete} id = {counter.id}>
                </Counter>
            ))}
        </div>
        );
    }
}

export default Counters;
*/