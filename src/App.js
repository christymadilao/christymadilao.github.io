import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";

export default function App() {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);

  return (
    <Router>
      <NavBar style={{ display: "flex", flexDirection: "row" }} />
      <Switch>
        <Route exact path="/about" component={About} />
        {isFirstLoading && <Redirect to="/about" />}
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}
