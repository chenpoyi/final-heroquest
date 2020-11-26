import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Lobby from './index'
type LobbiesProps = {
  user: {} | null
  
}
export default function Lobbies({user} : LobbiesProps) {
  let match = useRouteMatch();

  return (
      <Switch>
        <Route path={`${match.path}/:lobbyID`}>
          <Lobby user={user}/>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    // </div>
  );
}