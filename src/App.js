import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";

import DogGooo from "./pages/DogGooo";
import DoughBros from "./pages/DoughBros";
import Mentoree from "./pages/Mentoree";
import QuoteRequestDraftProject from "./pages/QuoteRequestDraftProject";
import UIOperationsProject from "./pages/UIOperationsProject";
import VendorContactManagementProject from "./pages/VendorContactManagementProject";

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
        <Route path="/doggooo" component={DogGooo} />
        <Route path="/doughbros" component={DoughBros} />
        <Route path="/mentoree" component={Mentoree} />
        <Route
          path="/quoterequestdraftproject"
          component={QuoteRequestDraftProject}
        />
        <Route path="/uioperationsproject" component={UIOperationsProject} />
        <Route
          path="/vendorcontactmanagementproject"
          component={VendorContactManagementProject}
        />
      </Switch>
    </Router>
  );
}
