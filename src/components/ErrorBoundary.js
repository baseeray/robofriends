import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }
    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        } 
        else 
            return this.props.children;
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log(error, info);
    }
}

export default ErrorBoundary;