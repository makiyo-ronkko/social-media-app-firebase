import Firebase from 'firebase';

export const login = function (credentials) {

    return (dispatch, getState, storeEnhancers) => {

        console.log('authActions...trying to login...');
        storeEnhancers.getFirebase().auth()
            .signInWithEmailAndPassword(
                credentials.email, credentials.password)
            .then(() => {
                console.log('Login success');
                dispatch({
                    type: 'LOGIN_SUCCESS'
                })
            })
            .catch((err) => {
                console.log('Login failed: ' + err);
                dispatch({
                    type: 'LOGIN_ERROR',
                    error: err
                })
            });
    };
};
export const logout = function (credentials) {

    return (dispatch, getState, storeEnhancers) => {

        console.log('authActions...trying to login...');
        storeEnhancers.getFirebase().auth()
            .signOut()
            .then(() => {
                console.log('Logout success');
                dispatch({
                    type: 'LOGOUT_SUCCESS'
                })
            })
            .catch((err) => {
                console.log('Login failed: ' + err);
                dispatch({
                    type: 'LOGOUT_ERROR',
                    error: err
                })
            });
    };
};
