const currentTime = new Date();

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
};

const rootReducer = (state = initialState, action) => {
  //console.log('Current state is: ');
  //console.log(state); // current state

  switch (action.type) {
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
    default:
      return state;
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
};

export default rootReducer;
