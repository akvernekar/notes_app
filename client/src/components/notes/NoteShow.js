import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {startSetNotes,startRemoveNote} from '../../actions/notes'

class NoteShow extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount=()=>{
       
this.props.dispatch(startSetNotes())
    }

    remove=(id)=>{
        
        this.props.dispatch(startRemoveNote(id))
    }

    render(){
        return(<div style={{backgroundImage: "url(" + "https://s3.envato.com/files/252706805/educlap-9.jpg" + ")", backgroundRepeat: "no-repeat" ,backgroundSize:"cover"
    }} class="jumbotron jumbotron-fluid">
<Link to='/notes/add'><button style={{color:'white'}} className="btn btn-outline-warning">Add note</button></Link>

            <div className='row offset-md-1'>
                {this.props.notes.map(item=>{
                    return(<div className='col-md-3'>
                    <div className='card bg-light mb-3 ' style={{"width": "18rem"}}>
                        <div className='card-body' key={item._id}>
                            <h1 className="card-title">{item.title}</h1>
                            <p className="card-text">{item.discription}</p>
                            <p className="card-subtitle mb-2 text-muted">-{item.categoryId &&item.categoryId.title}-</p>
                            <button style={{'width':'120px'}}  className="btn btn-danger btn-sm" onClick={()=>{this.remove(item._id)}}>remove</button>
                            <Link to={`/notes/edit/${item._id}`}> <button style={{'width':'120px'}}  className="btn btn-info btn-sm" >edit</button></Link>
                            </div>
                            </div>
                            </div> )
                })}
            </div>
            </div>
       )
    }
}

const mapStateToProps=(state)=>{
return {notes:state.notes}
}

export default connect(mapStateToProps)(NoteShow)