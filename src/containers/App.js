import { useState, useEffect } from "react";
import Cardlist from "../components/cardlist.js";
import Searchbox from "../components/searchbox.js";
import Scroll from "../components/scroll.js";
import ErrorBoundary from "../components/ErrorBoundary.js";
import './App.css';


const App = () => {
    const [searchfield, setSearchfield] = useState('');
    const [robots, setRobots] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => setRobots(users));
    },[]);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
        <div className="App tc">
            <h1 className= "f1" >RoboFriends</h1>
            <Searchbox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <Cardlist robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App; // export default App;