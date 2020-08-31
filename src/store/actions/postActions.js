//import Firebase from 'firebase';
//const db = Firebase.firestore();

export const createPost = function (post) {
  // return (dispatch) => {
  //     Firebase.firestore().collection('posts').add(post)
  //         .then(() => {
  //             dispatch({ type: 'CREATE_POST_SUCCESSFUL' })
  //         }).catch(err => {
  //             dispatch({ type: 'CREATE_POST_ERROR' }, err)
  //         })
  // }

  //return { type: 'CREATE_NEW_POST', post: post }; // payload is optional

  return (dispatch, getState, storeEnhancers) => {
    //console.log(storeEnhancers);
    storeEnhancers
      .getFirestore()
      .collection('posts')
      .add({
        ...post,
        author: storeEnhancers.getFirebase().auth().currentUser.email
      })
      .then(() => {
        // console.log('resp is: ');
        // console.log(resp);
        // console.log('resp.docs is: ' + resp.docs);
        // console.log(resp.docs);
        // console.log('resp.docs[0].data()');
        // console.log(resp.docs[0].data());
        dispatch({ type: 'CREATE_NEW_POST' });
      })
      .catch((err) => {
        console.log({ type: 'CREATE_NEW_POST_FAILED', err: err });
      });
  };
};

export const removePosts = () => {
  return { type: 'REMOVE_ALL_POST' };
};

export const fetchPosts = () => {
  return (dispatch, getState, storeEnhancers) => {
    storeEnhancers
      .getFirestore()
      .collection('posts')
      .get()
      .then(resp => {
        dispatch({
          type: 'FETCHED_POSTS_SUCCESS',
          payload: resp.docs
        })
      })
      .catch(err => {
        dispatch({
          type: 'FETCHED_POSTS_FAIL',
          err: err
        })
      });
  };
};

// get realtime updates
export const subscribeToChanges = () => {
  return (dispatch, getState, storeEnhancers) => {
    const observer = storeEnhancers.getFirestore().collection('posts');

    observer.onSnapshot(changes => {
      changes.docChanges().forEach(change => {
        if (change.type === 'added') {
          console.log('POST_ADDITION_OBSERVED')
          console.log(change.doc.data())
          dispatch({
            type: 'POST_ADDITION_OBSERVED',
            payload: change.doc.data()
          })
        }

        if (change.type === 'removed') {
          console.log('POST_REMOVAL_OBSERVED')
          console.log(change.doc.data())
          dispatch({
            type: 'POST_REMOVAL_OBSERVED',
            payload: change.doc.data()
          })
        }
      });
    })
  }
};
