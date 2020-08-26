import Firebase from 'firebase';

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
      .add(post)
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

export const fetchPosts = (dispatch) => {
  Firebase.firestore().collection('posts').get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data())
        dispatch({ type: 'ALL_POSTS' });
      });
    })
};
