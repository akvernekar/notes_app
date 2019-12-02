import axios from '../config/axios'
import Swal from 'sweetalert2'
export const setCategories=(data)=>{
    return {type:'SET_CATEGORIES',
payload:data}
}


export const startSetCategories=()=>{
    return (dispatch)=>{
        axios.get('/categories',{
            'headers':{
                'x-auth':localStorage.getItem('token2')
            }
        })
        .then(response=>{
            dispatch(setCategories(response.data))
        })
    }
} 

export const remove=(data)=>{
    return {type:'REMOVE_CATEGORY',
payload:data}
}

export const removeCategory=(id)=>{
    return (dispatch)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                axios.delete(`/categories/${id}`,{
                    headers:{
                        'x-auth':localStorage.getItem('token2')
                    }
                })
                .then(response=>{
                    dispatch(remove(response.data))
                })
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

        
    }
}

export const addCategory=(data)=>{
    return {
        type:'ADD_CATEGORY',
        payload:data
    }
}

export const startAddCategory=(formdata)=>{
    return (dispatch)=>{
        axios.post('/categories',formdata,{
                        headers:{
                            'x-auth':localStorage.getItem('token2')
                        }
                    })
                    .then(response=>{
                        if(response.data.hasOwnProperty('errors')){
                            Swal.fire({
                    title: 'Oops...',
                                text: 'Category cannot be empty',
                                
                              })  
                        }else{
                            dispatch(addCategory(response.data))
                        }
           
                    })
    }
}

export const singleCategory=(data)=>{
    return {type:'SINGLE_CATEGORY',
payload:data}
}

export const startSingleCategory=(id)=>{
    return (dispatch)=>{
        axios.get(`/categories/${id}`,{
         headers:{
             'x-auth':localStorage.getItem('token2')
         }
     })
     .then(response=>{
        dispatch(singleCategory(response.data))
     })
    }
}

export const edit=(data)=>{
    return {type:'EDIT_CATEGORY',
payload:data}
}

export const editCategory=(id,data,props)=>{
    return (dispatch)=>{
        axios.put(`/categories/${id}`,data,{
                 headers:{
                     'x-auth':localStorage.getItem('token2')
                 }
             })
             .then(response=>{
                 if(response){
                    dispatch(edit(response.data))
                    props.history.push('/category')
                 }
                 
             })
    }
}

export const resetSingleCategory=()=>{
    return{
        type:'RESET_SINGLE_CATEGORY'
    }
}