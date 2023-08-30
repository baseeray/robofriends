import {Component} from "react";
import Cardlist from "../components/cardlist.js";
import Searchbox from "../components/searchbox.js";
import Scroll from "../components/scroll.js";
import ErrorBoundary from "../components/ErrorBoundary.js";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return (
                <div className="App tc">
                    <h1 className= "f1" >RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <h1>Loading..</h1>
                </div>
            );
        }
        else {
            return (
                <div className="App tc">
                    <h1 className= "f1" >RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App; // export default App;