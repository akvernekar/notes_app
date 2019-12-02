const initialState={}

const singleCategoryReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SINGLE_CATEGORY':{
            return action.payload
        }
        case 'RESET_SINGLE_CATEGORY':{
            return {}
        }
        default :{
            return {...state}
        }
    }
}

export default singleCategoryReducer