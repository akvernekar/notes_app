import React from 'react'

import Form from './form'
import {connect} from 'react-redux'
import {startSingleNote,startEditNote,resetSingleNote} from '../../actions/notes'

class NotesEdit extends React.Component{
    constructor(props){
        super(props)
        
    }

componentDidMount=()=>{
    const id=this.props.match.params.id
    
    this.props.dispatch(startSingleNote(id))
}
componentWillUnmount=()=>{
    this.props.dispatch(resetSingleNote())
}

formData=(data)=>{
    const id=this.props.match.params.id
    
    this.props.dispatch(startEditNote(id,data,this.props))
}

    render(){
        return(<div style={{backgroundImage: "url(" + "https://s3.envato.com/files/252706805/educlap-9.jpg" + ")", backgroundRepeat: "no-repeat",backgroundSize:"cover",height:"auto",
    }} class="jumbotron jumbotron-fluid">
            
            <div className='row'>
            <div className="col-md-5 offset-md-1">
                <h2 style={{color:'white'}}>Edit Notes</h2>
                {Object.keys(this.props.singleNote).length!=0 && <Form note={this.props.singleNote} formData={this.formData}/>}
                </div>
                <div className="col-md-5">
                <img src="http://gif-free.com/uploads/posts/2018-12/1544710900_santa-claus-writing-letter.gif"/>
                </div>
            </div>
            </div>  )
    }
}

const mapStateToProps=(state)=>{
return {
    singleNote:state.singleNote
}
}

export default connect(mapStateToProps)(NotesEdit)
