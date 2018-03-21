import database, {firebase} from '../config/firebase';


export const createProject = (project) => ({
    type: 'CREATE_PROJECT',
    project
})

export const createNewProject = (project) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`customers/${uid}/projects`).push(project).then((res) => {
            dispatch(createProject({
                id: res.key,
                ...project
            }));
            console.log('Success')            
        }).catch((e) => {
            console.log('Error', e)
        })
    }
}