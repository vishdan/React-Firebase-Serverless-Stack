export const createProject = (project) =>{
    return (dispatch,getState,{getFirestore}) =>{
        
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Danny',
            authorLastName:'D',
            createdAt : new Date() 
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project:project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })

    }
}