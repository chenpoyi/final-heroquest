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
  }

  handleSuccessfulLogin(data :{}) {
    // this.props.history.push("/");
    // console.log("HERE")
    this.setState({
      loggedInStatus: true,
      user: data
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
        <div className="App">
          <NavBar drawerList={this.drawerList} loggedInStatus={this.state.loggedInStatus} />
        </div>

        <div>
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
        </div>
      </Router>
    );
  }
}

// type homeProp = {
//   drawerList: string[];
// };

function Home() {
  return (

      <MediaCard />
   
  );
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