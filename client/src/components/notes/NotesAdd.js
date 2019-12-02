import React from 'react'
import Form from './form'
import {connect} from 'react-redux'
import {startAddNote} from '../../actions/notes'

 class NotesAdd extends React.Component{
    constructor(props){
        super(props)
        
    }
formData=(data)=>{

this.props.dispatch(startAddNote(data,this.props))
}

    render(){
        return(<div style={{backgroundImage: "url(" + "https://s3.envato.com/files/252706805/educlap-9.jpg" + ")", backgroundRepeat: "no-repeat",backgroundSize:"cover",height:"auto",
    }} class="jumbotron jumbotron-fluid">
<div className='row'>
            <div className="col-md-5 offset-md-1">
                <h2 style={{color:'white'}}>New Notes</h2>
                <Form formData={this.formData}/>
                </div>

                <div className="col-md-5">
                <img src="http://gif-free.com/uploads/posts/2018-12/1544710900_santa-claus-writing-letter.gif"/>
                </div>
            </div> 
            </div>)
    }
}

export default connect()(NotesAdd)