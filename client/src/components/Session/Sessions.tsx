import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Session from './index'
type SessionsProps = {
  user: {} | null
  
}
export default function Lobbies({user} : SessionsProps) {
  let match = useRouteMatch();

  return (
      <Switch>
        <Route path={`${match.path}/:SessionID`}>
          <Session user={user}/>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    // </div>
  );
}