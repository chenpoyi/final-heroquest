import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Paper from '@material-ui/core/Paper';


import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MyCharacterCard from "./components/Session/MyCharacterCard"
import Armory from "./components/Armory"

import { getDrawerList, getOneCharacter } from "./helpers/selectors";
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

import  {ThemeProvider}  from '@material-ui/styles';
import QuestList from "./components/QuestList";
import Lobbies from "./components/Lobby/Lobbies";
import Session from "./components/Session/index"

interface IProps {
  // history: string[];
}
interface IState {
  message?: string;
  loggedInStatus: boolean;
  user: {} | null;
}

const styles = {
  paperContainer: {
     backgroundImage: "http://7-themes.com/data_images/out/75/7029709-old-paper-picture.jpg"  }
};

// PLACEHOLDER USER
const tempUser = {
created_at:
"2020-11-25T18:37:44.611Z",
email:
"scott@m.ca",
id:1,
password_digest:
"$2a$12$RTewzsa94Rkll8RuyXVrKOyECyv3gQC.2yvdfPgDvgIs/chrpdejK",
updated_at:
"2020-11-25T18:37:44.611Z"
}

class App extends Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props);
    
    this.state = {
      message: "Click the button to load data!",
      loggedInStatus: true,
      user: tempUser
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
         <div style={styles.paperContainer} >
        <Grid container direction="column" spacing={4}>
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
            <Route path="/armory" >
              <Armory user={this.state.user} />
            </Route>
            <Route path="/lobby" >
              <Grid item>
                
                  <Grid item>
                  <Lobbies user={this.state.user}/>
                  </Grid>
               
              </Grid>
            </Route>
            <Route path="/session" >
              <Session user={this.state.user}/>
            </Route>
            <Route path="/">
              <Home user={this.state.user}/>
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

// const characterInfo = {
//   name: "Ragnor", 
//   dateCreated: "Nov 19, 2020", 
//   lastUsed: "Nov 21, 2020", 
//   race: "Barbarian", 
//   questsCompleted: 3, 
//   image: "https://i.imgur.com/h0nbSUe.gif",
//   body: 3,
//   mind: 4,
//   attack: 5,
//   defense: 6,
//   movement: 7,
//   gold: 120
// }



function Home(user :any) {
  return (
  <>
  <TitleCard user={user}/>
  </>);
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
