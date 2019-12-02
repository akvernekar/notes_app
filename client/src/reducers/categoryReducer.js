
const initialState=[]

const categoryReducer=(state=initialState,action)=>{
   switch (action.type){
       case 'SET_CATEGORIES':{
           return action.payload
       }
       case 'REMOVE_CATEGORY':{
           return [...state].filter(i=>i._id!=action.payload._id)
       }
       case 'ADD_CATEGORY':{
           return [...state,action.payload]
       }
       case 'EDIT_CATEGORY':{
           return [...state].map(i=>{
               if(i._id==action.payload._id){
                   return action.payload
               }else{
                   return i
               }
           })
       }
       default :{
           return [...state]
       }
   }
}

export default categoryReducer