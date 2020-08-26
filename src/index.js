import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from 'redux-firestore'; // new
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'; // new
import firebase from 'firebase/app'; // new
import { FIREBASE_CONFIG as firebaseConfig } from './config/firebaseConfig'; // new

import App from './App';
import reducers from './store/reducers/rootReducer';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      reduxThunk.withExtraArgument({ getFirestore, getFirebase })//call storeemhancer
    ), // new
    reduxFirestore(firebase, firebaseConfig) // new
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider // new
      firebase={firebase} // new
      config={firebaseConfig} // new
      dispatch={store.dispatch} // new
      createFirestoreInstance={createFirestoreInstance} // new
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
