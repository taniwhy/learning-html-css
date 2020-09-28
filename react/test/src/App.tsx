import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { Provider } from "./Provider";

export const TestContext = createContext(
  {} as {
    test: string;
    setTest: React.Dispatch<React.SetStateAction<string>>;
  }
);

const App: React.FC = () => {
  const [test, setTest] = useState<string>("");
  const message: string = "hello";
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/test/:param"
            render={() => (
              <TestContext.Provider value={{ test, setTest }}>
                <Test message={message} />
              </TestContext.Provider>
            )}
          />
        </Switch>
        <Link to="/">Home</Link>
        <Link to="/test/world?message=hooks#test">Test</Link>
      </Router>
    </Provider>
  );
};

export default App;
