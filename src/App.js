import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from './Components/Homepage/NavigationBar';
import Home from './Components/Homepage/Home';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import PostDetails from './Components/Posts/PostDetails';
import NewPost from './Components/Posts/NewPost';

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Switch>
          Social Media Network
          <Route path="/" exact component={Home} />
          <Route path="/create" component={NewPost} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/post/:id" component={PostDetails} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
