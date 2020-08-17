import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from './Components/Layout/NavigationBar';
import Feeds from './Components/Homepage/Feeds';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import PostDetails from './Components/Posts/PostDetails';
import NewPost from './Components/Posts/NewPost';
import Firebase from 'firebase';
import { FIREBASE_CONFIG as firebaseConfig } from './config/firebaseConfig';

//const db = Firebase.firestore();

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

const db = Firebase.firestore();

db.collection('posts').get()
  .then(resp => {
    console.log('resp is: ');
    console.log(resp);
    console.log('resp.docs is: ' + resp.docs);
    console.log(resp.docs);
    console.log('resp.docs[0].data()');
    console.log(resp.docs[0].data());
  })
  .catch(err => {
    console.log(err);
  });

class App extends Component {

  state = {
    uid: Firebase.auth().currentUser
  };

  render() {

    //const User = Firebase.auth().currentUser;

    // Get the currently signed-in user 
    // only executed when changes on user login status
    Firebase.auth().onAuthStateChanged(user => {
      // user is now logged in, previous not
      if (user && this.state.uid === null) {
        this.setState({
          uid: user.uid
        })
        // user is now logged in, and previous was
      } else if (!user && this.state.uid !== null) {
        this.setState({
          uid: null
        })
      }
    });

    return (
      <Router>
        <NavigationBar uid={this.state.uid} />
        <main>
          <Switch>
            Social Media Network
            {/* <Route path="/" exact component={Feeds} /> */}
            <Route exact path="/" render={() => { return <Feeds uid={this.state.uid} /> }} />
            <Route path="/create" render={() => { return <NewPost uid={this.state.uid} /> }} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route exact path="/logout" render={() => {
              return <Logout uid={this.state.uid} />
            }}></Route>
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </main>
      </Router>
    );
  }


}

export default App;
