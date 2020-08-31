import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
//const currentTime = new Date();

const initialState = {
  posts: [
    // { id: 'first', title: '1. test title', content: '1. test content', time: currentTime },
    // { id: 'second', title: '2. test title', content: '2. test content', time: currentTime },
    // { id: 'third', title: '3. test title', content: '3. test content', time: currentTime },
    // { id: 'fourth', title: '4. test title', content: '4. test content', time: currentTime },
    // { id: 'fifth', title: '5. test title', content: '5. test content', time: currentTime },
    // { id: 'sixth', title: '6. test title', content: '6. test content', time: currentTime },
    // { id: 'seventh', title: '7. test title', content: '7. test content', time: currentTime },
    // { id: 'eighth', title: '8. test title', content: '8. test content', time: currentTime }
  ],
  userData: {},
  userActionErr: null,
  loginStatus: false,
  notifications: []
};

const authReducer = (state = initialState, action) => {
  //console.log('Current state is: ');
  //console.log(state); // current state

  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        userActionErr: action.error.code
      }
    case 'LOGIN_SUCCESS':
      console.log('Login success, state not changed');
      return {
        ...state,
        loginStatus: true
      }
    default:
      return state;
  }
}
// switch (action.type) {
//     case 'CREATE_POST_SUCCESSFUL':
//         console.log('Post created');
//         return state;
//     case 'CREATE_POST_ERROR':
//         console.log('Post creation failed', action.err.message);
//         return state;
//     default:
//         return state
// }

const postReducer = (state = initialState, action) => {
  //console.log('Current state is: ');
  //console.log(state); // current state
  switch (action.type) {
    case 'FETCHED_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload
      }
    case 'CREATE_NEW_POST':
      console.log('A new post has been added');
      return {
        ...state,
        // posts: [
        //   ...state.posts, // existing posts
        //   action.post, //adding a new post
        // ],
      };
    case 'CREATE_NEW_POST_FAIL':
      console.log('An error has occurred: ' + action.err.message);
      return {
        ...state,
        userActionErr: action.err.message,
      };
    case 'REMOVE_ALL_POSTS':
      return {
        ...state,
        posts: [],
      };
    case 'POST_ADDITION_OBSERVED':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          action.payload
        ]
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  firebase: firebaseReducer, //firebase authentication
  firestore: firestoreReducer // firestore database
})

export default rootReducer;
