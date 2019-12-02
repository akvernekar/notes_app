

const initialState=[]

const noteReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_NOTES':{
            return action.payload
        }
        case 'ADD_NOTE':{
            return [...state,action.payload]
        }
        case 'EDIT_NOTE':{
            return [...state].map(i=>{
                if(i._id==action.payload._id){
                    return action.payload
                }else{
                    return i
                }
            })
        }
        case 'REMOVE_NOTE':{
            return [...state].filter(i=>i._id!=action.payload._id)
        }
        default:{
            return [...state]
        }
    }

}

export default noteReducer