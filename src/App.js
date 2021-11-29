import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages Url
import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import AddGame from "./components/pages/AddGame";
import UpdateGame from "./components/pages/UpdateGame";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Results from "./components/pages/Results";
import Footer from "./components/common/Footer";
// import UserContainer from "./components/User/UserContainer";
// import { app } from "./config/firebase";

function App() {
  return (
    <Provider store={store}>
      <div className="Page">
        <Router>
          {/* <UserContainer /> */}
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/admin/user/login" component={Login}></Route>
            <Route
              exact
              path="/admin/user/register"
              component={Register}
            ></Route>
            <Route exact path="/results" component={Results}></Route>
            <Route exact path="/admin/user/add" component={AddGame}></Route>
            <Route
              exact
              path="/admin/user/update"
              component={UpdateGame}
            ></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
