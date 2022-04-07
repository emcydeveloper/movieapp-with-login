import { Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Search from "./Search";
import AddMovie from "./AddMovie";
import UserProfile from "./UserProfile";
import EditMovie from "./EditMovie";


function App() {
  return (
    <div className="App">
      {/* <Register /> */}

      <Switch>
        <Route exact path="/edit/:movieid"><EditMovie /></Route>
        <Route exact path="/Register"><Register /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route path="/search"><Search /></Route>
        <Route path="/add"><AddMovie /></Route>
        <Route exact path="/userprofile"><UserProfile /></Route> 
        <Route exact path="/"><Register /></Route>
        
      </Switch>
    </div>
  );
}

export default App;
