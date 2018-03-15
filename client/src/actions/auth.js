import {firebase, googleAuthProvider} from '../config/firebase';

export const LoginUser = (userdata) => ({
    type: 'LOGIN',
    userdata
});

export const LogoutUser = () => ({
    type: 'LOGOUT'
});

export const onLogoutUser = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const startLoginWithGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            console.log('Login success');
        }).catch((e) => {
            console.log('Login Error', e);
        });
    }
}
