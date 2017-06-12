import { Component } from 'react';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = { currency: props.base};
    }

    componentWillMount() {
        this.props.store.subscribe(() => {
            this.setState(this.props.store.getState());
        });
    }

    render() {
        return (
            <p>{ this.state.currency }</p>
        );
    }
}

export default Currency;
