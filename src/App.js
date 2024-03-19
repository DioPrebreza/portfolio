import { BrowserRouter, Switch, Route } from "react-router-dom";
import Searchbar from "./pages/Searchbar";
import "./App.css";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Searchbar />
          </Route>
          <Route path="/results" exact>
            <Results />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
