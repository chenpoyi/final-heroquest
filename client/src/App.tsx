import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Armory from "./components/Armory";
import User from "./components/User";
import MakeNewCharacterList from "./components/MakeNewCharacter/MakeNewCharacterList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Lobbies from "./components/Lobby/Lobbies";
import Session from "./components/Session/index";
import Sessions from "./components/Session/Sessions"
import Home from "./components/Home";

interface IProps {
  // history: string[];
}
interface IState {
  message?: string;
  loggedInStatus: boolean;
  user: {} | null;
}

// PLACEHOLDER USER
const tempUser = {
  created_at: "2020-11-25T18:37:44.611Z",
  email: "scott@m.ca",
  id: 1,
  password_digest:
    "$2a$12$RTewzsa94Rkll8RuyXVrKOyECyv3gQC.2yvdfPgDvgIs/chrpdejK",
  updated_at: "2020-11-25T18:37:44.611Z",
};

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      loggedInStatus: true,
      user: tempUser,
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin(data: {}) {
    this.setState({
      loggedInStatus: true,
      user: data,
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: false,
      user: null,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Grid container spacing={4}>
            <Grid item className="App">
              <NavBar
                loggedInStatus={this.state.loggedInStatus}
                handleSuccessfulLogout={this.handleSuccessfulLogout}
                user={this.state.user}
              />
            </Grid>
            <Grid item container>
              <Grid xs={false} sm={2} />
              <Grid xs={12} sm={12}>
                <Switch>
                  <Route path="/login">
                    <Login
                      handleSuccessfulLogin={this.handleSuccessfulLogin}
                      loggedIn={this.state.loggedInStatus}
                    />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                  <Route path="/armory">
                    <Armory user={this.state.user} />
                  </Route>
                  <Route path="/lobby">
                    <Grid item>
                      <Grid item>
                        <Lobbies user={this.state.user} />
                      </Grid>
                    </Grid>
                  </Route>
                  <Route path="/session">
                    <Sessions user={this.state.user} />
                  </Route>

                  <Route path="/newcharacter">
                    <Grid item>
                      <Grid item>
                        <MakeNewCharacterList user={this.state.user}/>
                      </Grid>
                    </Grid>

                  </Route>
                  <Route path="/user">
                    <User user={this.state.user} />
                  </Route>
                  <Route path="/">
                    <Home user={this.state.user} />
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
