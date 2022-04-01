import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";
import Scroll from "./components/scroll/scroll";
function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setRobots(users));
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} value={searchField} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
