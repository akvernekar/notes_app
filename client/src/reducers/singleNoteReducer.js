const initialState={}

const singleNoteReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SINGLE_NOTE':{
            return action.payload
        }
        case 'RESET_SINGLE_NOTE':{
            return {}
        }
        default :{
            return {...state}
        }
    }
}

export default singleNoteReducer