export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                uid: action.userdata.uid,
                email: action.userdata.email,
                displayName: action.userdata.displayName,
                photoURL: action.userdata.photoURL
            }
        case 'LOGOUT':
            state = {}
        default: 
            return state
    }
}