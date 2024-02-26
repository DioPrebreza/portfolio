import { BrowserRouter, Switch, Route } from "react-router-dom";
import Searchbar from "./pages/Searchbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Searchbar />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
