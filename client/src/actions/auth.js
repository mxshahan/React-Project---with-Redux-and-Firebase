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

export const createNewUserWithEmailAndPassword = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch((e) => {
            console.log(e.code, e.message);
        });
    }
}

export const startLoginWithEmailAndPassword = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password).catch(e => {
            console.log('Error Found In Login', e);
        }) 
    }
}