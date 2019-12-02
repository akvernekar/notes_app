import axios from '../config/axios'
import Swal from 'sweetalert2'
export const setNotes=(data)=>{
    return {
        type:'SET_NOTES',
        payload:data
    }
}

export const startSetNotes=()=>{
    return (dispatch)=>{
        axios.get('/notes',{
            'headers':{
                'x-auth':localStorage.getItem('token2')
            }
        })
        .then(response=>{
           dispatch(setNotes(response.data))
        })
    }
}

export const removeNote=(data)=>{
    return {type:'REMOVE_NOTE',
payload:data}
}

export const startRemoveNote=(id)=>{
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
                axios.delete(`/notes/${id}`,{
                    'headers':{
                        'x-auth':localStorage.getItem('token2')
                    }
                })
                .then(response=>{
                    dispatch(removeNote(response.data))
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

export const addNote=(data)=>{
    return{
        type:'ADD_NOTE',
        payload:data
    }
}

export const startAddNote=(data,props)=>{
    return (dispatch)=>{
        axios.post('/notes',data,{
    headers:{
        'x-auth':localStorage.getItem('token2')
    }
})
.then(response=>{
    if(response.data.hasOwnProperty('errors')){
        Swal.fire({
            
            title: 'Oops...',
            text: 'Notes cannot be empty'
          })
    }else{
        dispatch(addNote(response.data))
    props.history.push('/notes')
    }
   
})
    }
}

export const singleNote=(data)=>{
return {
    type:'SINGLE_NOTE',
    payload:data
}
}

export const startSingleNote=(id)=>{
    return (dispatch)=>{
        axios.get(`/notes/${id}`,{
        headers:{
            'x-auth':localStorage.getItem('token2')
        }
    })
    .then(response=>{
       dispatch(singleNote(response.data))
    })
    }
}

export const editNote=(data)=>{
    return{
        type:'EDIT_NOTE',
        payload:data
    }
}

export const startEditNote=(id,data,props)=>{
    return (dispatch)=>{
        axios.put(`/notes/${id}`,data,{
        headers:{
            'x-auth':localStorage.getItem('token2')
        }
    })
    .then(response=>{
        // console.log(response.data)
        dispatch(editNote(response.data))
            props.history.push('/notes')  
    })
    }
}

export const resetSingleNote=()=>{
    return{
        type:'RESET_SINGLE_NOTE'
    }
}