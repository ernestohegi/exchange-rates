import { Component } from 'react';

class Currency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currency: props.base
        };
    }

    render() {
        return (
            <p>{ this.state.currency }</p>
        );
    }
}

export default Currency;
