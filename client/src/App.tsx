import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import MediaCard from "./components/TitleCard";
import Signup from "./components/Signup";
import Login from "./components/Login";

import { getDrawerList } from "./helpers/selectors";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TitleCard from "./components/TitleCard";
import Content from "./components/Content";

interface IProps {
  // history: string[];
}
interface IState {
  message?: string;
  loggedInStatus: boolean;
  user: {} | null;
}



class App extends Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props);
    
    this.state = {
      message: "Click the button to load data!",
      loggedInStatus: false,
      user: null
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin(data :{}) {
    
    this.setState({
      loggedInStatus: true,
      user: data
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: false,
      user: null
    })
  }

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  drawerList: string[] = getDrawerList();

  render() {
    return (
      <Router>
        <Grid container direction="column">
          <Grid item className="App">
          <NavBar drawerList={this.drawerList} loggedInStatus={this.state.loggedInStatus} handleSuccessfulLogout={this.handleSuccessfulLogout} user={this.state.user}/>
          </Grid>
          <Grid item container>
            <Grid xs={false} sm={2} />
            <Grid xs={12} sm={8}>
            <Switch>
            <Route path="/login">
              <Login handleSuccessfulLogin={this.handleSuccessfulLogin} loggedIn = {this.state.loggedInStatus}/>
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
            </Grid>
          </Grid>
        </Grid>
      </Router>
    );
  }
}



function Home() {
  return <MediaCard />;
}


export default App;

// let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//             that build on the /topics URL path. You can think of the
//             2nd <Route> here as an "index" page for all topics, or
//             the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
